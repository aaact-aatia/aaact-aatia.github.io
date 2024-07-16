---
title: Intake form
description: This intake form is to determine what service you require from AAACT.
customScript: /js/intake.js
---

<form id="myForm">
	<div>
		<p>Instructions: A series of dropdowns will be presented to you one at a time. As you make selections, the form will dynamically update to show you the next relevant set of options. When you activate the "Submit" button, you will be presented with the information that's relevant to your choices</p>
	</div>
	<div class="wb-fieldflow" data-wb-fieldflow='{"noForm": true}' aria-live="polite">
		<p>What service do you need?</p>
		<ul>
			<!-- Documents Remediation 		SSCMember nonSSCMember-->
			<li>Documents Remediation - making a digital document accessible 
				<div class="wb-fieldflow-sub">
					<p>Are you a member of Shared Services?</p>
						<ul>
							<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#SSCMember","container":"#ajaxContainer", "clean": "#ajaxContainer" ,"type": "replace"}'>Yes</li>
							<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#nonSSCMember","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>No</li>
						</ul>
				</div>
			</li>
			<!-- Info Services 		workshops a11y accessibleDocuments accessibleForms virtualEvents COTS a11ySoftwareDev images linkText M365 other-->
			<li>Information services - workshops and frequently asked questions
				<div class="wb-fieldflow-sub">
					<p>What kind of information do you need?</p>
					<ul>
						<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#workshops","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>Workshops and Learning sessions</li>
						<li>General and Specialised questions<div class="wb-fieldflow-sub">
								<p>You need advice and guidance on what?</p>
								<ul>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#a11y","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on learning about accessibility</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#accessibleDocuments","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on how to make accessible documents</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#accessibleForms","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on how to make accessible forms</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#virtualEvents","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on holding accessible events and virtual meetings</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#COTS","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on Commercial-Off-The-Shelf (COTS) product(s)</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#a11ySoftwareDev","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on accessibility in software development (WCAG, ATAG, EN 301 549)</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#altText","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on how to handle images (alt text and types of images)</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#linkText","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on the proper link text format</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#M365","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I need advice and/or guidance on an M365 product</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#other","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>Other...</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</li>
			<!-- Procurement 		procurement-->
			<li data-wb-fieldflow='[{"action": "ajax", "url": "./fieldflow-logic/index.html#procurement","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}]'>Procurement - support in the acquisition of product and services with ICT components </li>
			<!-- Software Testing		design assessmentDone assessmentNotDone VPATDone VPATNotDone userTesting-->
			<li>Testing of software (websites, web apps, desktop apps, mobile apps)
				<div class="wb-fieldflow-sub">
					<p>What kind of testing are you looking for?</p>
					<ul>
						<li>Accessibility Conformance Testing - testing whether the software adheres to accessibility standards
							<div class="wb-fieldflow-sub">
								<p>Which statement better describes your software?</p>
								<ul>
									<li>The software is developed internally
										<div class="wb-fieldflow-sub">
											<p>At which stage of the software development process are you?</p>
											<ul>
												<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#planning","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>Planning</li>
												<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#design","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>Design</li>
												<li>Under construction<div class="wb-fieldflow-sub">
													<p>Have you already conducted the accessibility self assessment?</p>
													<ul>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentDone","container":"#ajaxContainer", "clean": "#ajaxContainer" ,"type": "replace"}'>Yes</li>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentNotDone","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>No</li>
													</ul>
												</li>
												<li>QA phase<div class="wb-fieldflow-sub">
													<p>Have you already conducted the accessibility self assessment?</p>
													<ul>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentDone","container":"#ajaxContainer", "clean": "#ajaxContainer" ,"type": "replace"}'>Yes</li>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentNotDone","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>No</li>
													</ul>
												</li>
												<li>Already launched<div class="wb-fieldflow-sub">
													<p>Have you already conducted the accessibility self assessment?</p>
													<ul>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentDone","container":"#ajaxContainer", "clean": "#ajaxContainer" ,"type": "replace"}'>Yes</li>
														<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#selfAssessmentNotDone","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>No</li>
													</ul>
												</li>
											<ul>
										</div>
									</li>
									<li>The software is a Commercial-Off-The-Shelf (COTS) product 
										<div class="wb-fieldflow-sub">
											<p>Did you obtain a Voluntary Product Accessibility Template (VPAT) or an Accessibility Conformance Report (ACR) from the company?</p>
											<ul>
												<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#VPATDone","container":"#ajaxContainer", "clean": "#ajaxContainer" ,"type": "replace"}'>Yes</li>
												<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#VPATNotDone","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>No</li>
												<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#VPATACR","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>I don't know what a VPAT and an ACR is.</li>
											</ul>
										</div>
									</li>
									<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#M365","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>The software is an M365 product or was developed using an M365 product.</li>
								<ul>
							</div>
						</li>
						<li data-wb-fieldflow='{"action": "ajax", "url": "./fieldflow-logic/index.html#userTesting","container":"#ajaxContainer", "clean": "#ajaxContainer" , "type": "replace"}'>User Testing - testing to gather feedback on their experience and identify usability issues</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
	<input type="submit" id="submitButton">
</form>
<div id="ajaxContainer" aria-live="polite" style="margin: 15px"></div>
