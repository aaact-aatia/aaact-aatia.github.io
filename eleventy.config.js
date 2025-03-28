const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const getFileInfo = require("./scripts/filters/fileInfo");
const markdownIt = require("markdown-it");
const striptags = require('striptags');
const getSlugify = (eleventyConfig) => eleventyConfig.getFilter("slugify");

module.exports = function(eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public": "/",
		"./admin": "/admin",
	});

	const slugify = getSlugify(eleventyConfig);

	eleventyConfig.addNunjucksAsyncFilter("fileInfo", async (filePaths, callback) => {
		try {
			const fileInfoArray = await getFileInfo(filePaths);
			callback(null, fileInfoArray);
		} catch (error) {
			callback(error, null);
		}
	});

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" })
			.setLocale("en")
			.toFormat("yyyy'-'MM'-'dd");
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	// Add a filter to format dates in full text with locale
	eleventyConfig.addFilter("fullTextDate", (dateValue, locale = "en") => {
		if (!dateValue || dateValue === "") return "Invalid Date"; // Handle empty strings

		let parsedDate;

		if (typeof dateValue === "string") {
			parsedDate = DateTime.fromFormat(dateValue, "yyyy-MM-dd", { zone: "utc" });
		} else if (dateValue instanceof Date) {
			parsedDate = DateTime.fromJSDate(dateValue, { zone: "utc" });
		} else {
			console.error("Invalid Date Format:", dateValue);
			return "Invalid Date";
		}

		if (!parsedDate.isValid) {
			console.error("Invalid Date:", dateValue);
			return "Invalid Date";
		}

		// Ensure it remains in UTC before formatting
		parsedDate = parsedDate.toUTC();

		const format = locale === "fr" ? "EEEE d MMMM yyyy" : "EEEE, MMMM d, yyyy";
		return parsedDate.setLocale(locale).toFormat(format);
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter("todayDate", () => {
		return DateTime.now().toFormat("yyyy-LL-dd");
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterByField", (items, field, value) => {
		return items.filter(item => {
			let fieldValue = item.data[field];

			// Check for exact value match (true/false)
			if (fieldValue === value) {
				return true;
			}

			// If value is false, we also need to check for empty objects
			if (value === false && typeof fieldValue === "object") {
				return Object.keys(fieldValue).length === 0 ||
					Object.values(fieldValue).every(val =>
						typeof val === "object"
							? Object.keys(val).length === 0 || Object.values(val).every(subVal => !subVal)
							: !val
					);
			}

			return false;
		});
	});

	// Filter: filterByUpcomingEvents
	// This filter returns only events that have a valid future date.
	eleventyConfig.addFilter("filterByUpcomingEvents", (events, locale = "en") => {
		return events.filter(event => {
			// Get the event date from either the locale-specific field or the general event date
			let eventDateStr = event?.data?.eventDetails?.[locale]?.date || event?.data?.eventDetails?.eventDate;
			if (!eventDateStr) return false; // Skip events without a date

			// Extract only the date part (YYYY-MM-DD) if there's a timestamp
			if (typeof eventDateStr === "string") {
				eventDateStr = eventDateStr.split("T")[0];
			} else if (eventDateStr instanceof Date) {
				eventDateStr = eventDateStr.toISOString().split("T")[0];
			}

			// Convert the date string into a DateTime object
			let eventDate = DateTime.fromISO(eventDateStr, { zone: "utc" });

			// If the date is invalid, try parsing it as a standard JavaScript Date
			if (!eventDate.isValid) {
				try {
					eventDate = DateTime.fromJSDate(new Date(eventDateStr), { zone: "utc" });
				} catch {
					return false; // Skip events with unparseable dates
				}
			}

			// Return true only if the event date is today or in the future
			return eventDate.startOf("day") >= DateTime.now().startOf("day");
		});
	});

	// Filter: filterByNoDateEvents
	// This filter returns only events that do not have a valid date.
	eleventyConfig.addFilter("filterByNoDateEvents", (events, locale = "en") => {
		return events.filter(event => {
			// Get the event date from either the locale-specific field or the general event date
			let eventDateStr = event?.data?.eventDetails?.[locale]?.date || event?.data?.eventDetails?.eventDate;

			// If no date is provided or it's an empty string, consider this a "no date" event
			if (!eventDateStr || eventDateStr === "") return true;

			// If eventDateStr is already a JavaScript Date object, exclude it
			if (eventDateStr instanceof Date) return false;

			// Ensure we only extract the date part (YYYY-MM-DD)
			eventDateStr = String(eventDateStr);
			if (eventDateStr.includes("T")) {
				eventDateStr = eventDateStr.split("T")[0];
			}

			// Convert the extracted date string into a DateTime object
			let eventDate = DateTime.fromISO(eventDateStr, { zone: "utc" });

			// If the date is invalid, try parsing it as a standard JavaScript Date
			if (!eventDate.isValid) {
				try {
					eventDate = DateTime.fromJSDate(new Date(eventDateStr), { zone: "utc" });
				} catch {
					return true; // Include events that fail date parsing
				}
			}

			// If a valid date exists, exclude it from the "no date" list
			return !eventDate.isValid;
		});
	});

	// Filter: filterByPastEvents
	// This filter returns only events that have already occurred (past events).
	eleventyConfig.addFilter("filterByPastEvents", (events, locale = "en") => {
		return events.filter(event => {
			// Get the event date from either the locale-specific field or the general event date
			let eventDateStr = event?.data?.eventDetails?.[locale]?.date || event?.data?.eventDetails?.eventDate;
			if (!eventDateStr) return false; // Skip events without a date

			// Extract only the date part (YYYY-MM-DD) if there's a timestamp
			if (typeof eventDateStr === "string") {
				eventDateStr = eventDateStr.split("T")[0];
			} else if (eventDateStr instanceof Date) {
				eventDateStr = eventDateStr.toISOString().split("T")[0];
			}

			// Convert the extracted date string into a DateTime object
			let eventDate = DateTime.fromISO(eventDateStr, { zone: "utc" });

			// If the date is invalid, try parsing it as a standard JavaScript Date
			if (!eventDate.isValid) {
				try {
					eventDate = DateTime.fromJSDate(new Date(eventDateStr), { zone: "utc" });
				} catch {
					return false; // Skip events with unparseable dates
				}
			}

			// Return true only if the event date is in the past
			return eventDate.startOf("day") < DateTime.now().startOf("day");
		});
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortByDate", (items, dateField) => {
		return items
			.map(item => {
				let dateString = item?.data?.[dateField];
				let itemDate = dateString ? DateTime.fromISO(dateString, { zone: "utc" }) : null;

				if (itemDate && !itemDate.isValid) {
					itemDate = DateTime.fromJSDate(new Date(dateString), { zone: "utc" });
				}

				return { ...item, itemDateObj: itemDate?.isValid ? itemDate : null };
			})
			.filter(item => item.itemDateObj) // Remove invalid dates
			.sort((a, b) => a.itemDateObj - b.itemDateObj); // Sort ascending (earliest first)
	});

	eleventyConfig.addFilter("sortByEventDate", (events, locale = "en") => {
		return events
			.map(event => {
				let dateString = event?.data?.eventDetails?.eventDate || event?.data?.eventDetails?.[locale]?.date;
				let eventDate = dateString ? DateTime.fromISO(dateString, { zone: "utc" }) : null;

				if (eventDate && !eventDate.isValid) {
					eventDate = DateTime.fromJSDate(new Date(dateString), { zone: "utc" });
				}

				return { ...event, eventDateObj: eventDate?.isValid ? eventDate : null };
			})
			.filter(event => event.eventDateObj) // Remove invalid dates
			.sort((a, b) => a.eventDateObj - b.eventDateObj); // Sort ascending (earliest first)
	});

	const slugifyFilter = eleventyConfig.javascriptFunctions.slugify;

	eleventyConfig.addFilter("stripTagsSlugify", (str) => {

		if (!str) return;

		return slugifyFilter(striptags(str), {
		});
	});

	eleventyConfig.addFilter("localeMatch", function (collection) {
		const { locale } = this.ctx; // avoid retrieving it for each item
		return collection.filter((item) => item.data.locale === locale);
	});

	const markdownItOptions = {
		html: true,  // Allows inline HTML like <abbr>
		breaks: true, // Enables GitHub-style line breaks
		linkify: true, // Auto-links raw URLs
		typographer: true // Enables smart punctuation formatting https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
	};
	const md = markdownIt(markdownItOptions)

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});

	eleventyConfig.setLibrary('md', md);

	// Full Markdown rendering (blocks, paragraphs, lists, etc.)
	eleventyConfig.addFilter("markdownify", (markdownString) => {
		return md.render(markdownString);
	});

	// Inline Markdown rendering (no paragraphs, just inline elements)
	eleventyConfig.addFilter("markdownInline", (markdownString) => {
		return md.renderInline(markdownString);
	});

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	})

	// Encode URL components (e.g., email subjects)
	eleventyConfig.addFilter("urlEncode", (value) => {
		if (!value) return "";
		return encodeURIComponent(value);
	});

	eleventyConfig.addCollection("allHeadings", function (collectionApi) {
		return collectionApi.getAll().map(item => {
			if (item.data.toc || item.data.tocSimple) {
				const tokens = md.parse(item.template.frontMatter.content, {});
				const levels = item.data.tocSimple ? 1 : 2;
				const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
				const headings = tokens.filter(token =>
					validTags.includes(token.tag) && token.type === 'heading_open'
				).map(token => {
					const level = token.tag;
					const rawText = tokens[tokens.indexOf(token) + 1].content;
					const text = striptags(rawText);
					const id = slugify(text, { lower: true, strict: true, locale: 'fr' });
					return { level, text, id };
				});
				item.data.headings = headings;
			}
			return item;
		});
	});

	// Generate TOC
	eleventyConfig.addShortcode('extractHeadings', function (content, tocType) {
		const slugify = eleventyConfig.getFilter("slugify");
		const tokens = md.parse(content, {});
		const levels = tocType === 'tocSimple' ? 1 : 2; // tocSimple only includes level 2 headings
		const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
		const headings = tokens.filter(token =>
			validTags.includes(token.tag) && token.type === 'heading_open'
		).map(token => {
			const level = token.tag;
			const rawText = tokens[tokens.indexOf(token) + 1].content;
			const text = striptags(rawText); // Strip HTML tags from the heading text
			const id = slugify(text, { lower: true, strict: true, locale: 'fr' });
			return { level, text, id };
		});

		// Create TOC HTML
		let tocHTML = '<aside><h2>{{ onThisPage[locale].heading }}</h2><ul>';
		const levelsStack = [];

		headings.forEach(heading => {
			const levelIndex = parseInt(heading.level.substring(1)) - 1;

			while (levelsStack.length && levelsStack[levelsStack.length - 1] > levelIndex) {
				tocHTML += '</ul></li>';
				levelsStack.pop();
			}

			if (levelsStack.length && levelsStack[levelsStack.length - 1] === levelIndex) {
				tocHTML += '</li>';
			}

			if (!levelsStack.length || levelsStack[levelsStack.length - 1] < levelIndex) {
				tocHTML += '<ul>';
				levelsStack.push(levelIndex);
			}

			tocHTML += `<li><a href="#${heading.id}">${heading.text}</a>`;
		});

		while (levelsStack.length) {
			tocHTML += '</ul></li>';
			levelsStack.pop();
		}

		tocHTML += '</ul></aside>';

		return tocHTML;
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
