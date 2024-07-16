---
title: "Intake Form: Software Testing Request"
customScript: /js/intake-form-software.js
---

<div id="AAACTSoftwareDescription">
    <h2>Welcome!</h2>
    <p>Thank you for choosing AAACT to review your product. This form is the first step in understanding your needs and directing you to the appropriate services.</p>
    <h2>We do not offer complete end-to-end testing</h2>
    <p>Please be aware that although we assess compliance with accessibility standards, <strong>we do not provide comprehensive end-to-end testing</strong>. If you require more thorough testing, you can either conduct the testing within your department or you may need to engage a third-party service.
    <br><br>
    For assistance, please email us by using the following link to <a href="mailto:aaact-aatia@ssc-spc.gc.ca?subject=Request%20for%20guidance%20and%20access%20to%20toolkit%20for%20engaging%20third-party%20testing%20services">request guidance and access to our tools: request for assistance in third-party testing</a>.
    <br><br>
    AAACT testing services may be an option for a partial or a verification test. If so, please continue filling in this form.</p>
    <h2>We require a self-assessment before we conduct testing</h2>
    <p>If you have not yet completed the self-assessment, but you would like to secure a spot in our testing schedule in advance, that is perfectly fine. However, before conducting the test, we will kindly ask you to provide us with the self-assessment form. We will review it in order to assist you in identifying any areas of accessibility knowledge that may require improvement.
    <br><br>
    Our main priority is to build accessibility capacity within the government of Canada. Our goal is to encourage partners to adopt and practice accessibility.</p>
    <h2> We recommend getting a VPAT or ACR before testing a Commercial-Off The Shelf (COTS) product</h2>
    <p>When using a Commercial-Off The Shelf (COTS) product, you may not be able to solve all accessibility issues on your own.
    <br><br>
    During the first step of getting the vendor or developer to identify the compliance level, we generally either go the company's website and search for an Accessibility Conformance Report (ACR) or <a href="https://www.itic.org/policy/accessibility/vpat">Voluntary Product Accessibility Template (VPAT)</a>. If none is present, we ask a company the following:</p>
    <ul>
        <li>Does this application meet any accessibility standards? If yes, which one and at what level?</li>
        <li>How was the compliance level verified and are there any reports, tools, or guidance available, such as VPAT, installation guides, accessibility guides, or guides for using the tool with different technologies like keyboard access or screen readers?</li>
    </ul>
    <h3>Microsoft products</h3>
    <p>When any GC partner/department/service encounter an accessibility issue with any Microsoft product such as:</p>
    <ul>
        <li>Dynamics,</li>
        <li>Forms,</li>
        <li>PowerApps,</li>
        <li>Power BI,</li>
        <li>Sharepoint,</li>
        <li>Teams,</li>
        <li>etc.</li>
    </ul>
    <br>
    <p>They need to send it to the <a href="mailto:dcc.accessibility-accessibilite.cnn@ssc-spc.gc.ca?subject=Encountered%20accessibility%20issue%20with%20Microsoft%20product&body=Hello%20Accessibility%20Team,%0AI%20would%20like%20to%20report%20an%20accessibility%20issue%20[product].%0AYour%20signature">Digital Communications and Collaboration (DCC) - User Experience team</a> and they take care of submitting the issue to Microsoft.
    <br><br>
    For more information about issues already submitted to Microsoft by the Government of Canada, see:</p>
    <ul>
        <li><a href="https://www.gcpedia.gc.ca/wiki/Probl%C3%A8mes_d%27accessibilit%C3%A9_M365_Accessibility_Issues">M365 Accessibility Issues - GCpedia</a></li>
        <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/7/77/SSC-DCC-M365-Accessibility-Issues-Tracker-EN.xlsx">The SSC DCC Accessibility Issues Tracker</a></li>
    </ul>
</div>

<div class="wb-frmvld">
    <form id="form" method="POST" novalidate="" aria-live="polite">
        <!-- After reading the above, I agree -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                After reading the above, <span class="field-name">I agree to</span> the following:
                <span class="required"> (all checkboxes required)</span>
            </legend>
            <!-- 1st checkbox -->
            <div class="gc-input-checkbox">
                <input id="agreement_1" required="required" class="gc-input-checkbox__input" type="checkbox" value="Fill out and submit the self-assessment form before AAACT's testing." name= "agreement_1">
                <label class="gc-checkbox-label" for="agreement_1">
                    Fill out and submit the self-assessment form before AAACT's testing.
                </label>
            </div>
            <!-- 2nd checkbox -->
            <div class="gc-input-checkbox">
                <input id="agreement_2" required="required" class="gc-input-checkbox__input" type="checkbox" value="Complete this form only if you are seeking sample/verification testing." name= "agreement_2">
                <label class="gc-checkbox-label" for="agreement_2">
                    Complete this form only if you are seeking sample/verification testing
                </label>
            </div>
            <!-- 3rd checkbox -->
            <div class="gc-input-checkbox">
                <input id="agreement_3" required="required" class="gc-input-checkbox__input" type="checkbox" value="Seek a VPAT® or ACR from the company when using a COTS product." name= "agreement_3">
                <label class="gc-checkbox-label" for="agreement_3">
                     Seek a VPAT® or ACR from the company when using a COTS product.
                </label>
            </div>
        </fieldset>
        <!-- Are you currently in the middle of a procurement process? -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">Are you currently in the middle of a procurement process?</span>
                <span class="required"> (required)</span>
            </legend>
            <!-- 1st checkbox -->
            <div class="gc-input-radio">
                <input id="procurementYes" data-rule-required="true" class="gc-radio__input" type="radio" value="Yes" name="Procurement Process">
                <label class="gc-radio-label" for="procurementYes">
                Yes
                </label>
            </div>
            <!-- 2nd checkbox -->
            <div class="gc-input-radio">
                <input id="procurementNo" class="gc-radio__input" type="radio" value="No" name="Procurement Process">
                <label class="gc-radio-label" for="procurementNo">
                    No
                </label>
            </div>
            <div id="inProcurement" aria-hidden="true"  class="hidden" aria-live="polite"></div>
        </fieldset>
        <!-- Contact Details -->
        <div>
            <h2>Contact Details</h2>
            <p>Providing your contact details will allow us to reach out to you for any necessary follow-up on the information provided in this form and to coordinate the application testing.</p>
            <!-- Full Name -->
            <div class="gc-input-text">
                <label class="gc-label" for="fullName">
                    <span class="field-name">Full name</span>
                    <span class="required"> (required)</span>
                </label>
                <input class="gc-text__input" id="fullName" required="required" autocomplete="name" placeholder="" type="text" value="" name="Full name">
            </div>
            <!-- Email address -->
            <div class="gc-input-text">
                <label class="gc-label" for="email">
                    <span class="field-name">Email address</span>
                    <span class="required"> (required)</span>
                </label>
                <div class="gc-description">For example: name@example.com
                </div>
                <input class="gc-text__input" id="email" required="required" autocomplete="email" placeholder="" type="email" value="" name="Email">
            </div>
            <!-- Project Role -->
            <div class="gc-input-text">
                <label class="gc-label" for="projectRole">
                    <span class="field-name">Project role</span>
                    <span class="required"> (required)</span>
                </label>
                <input class="gc-text__input" id="projectRole" required="required" autocomplete="off" placeholder="" type="text" value="" name="Project Role">
            </div>
        </div>
        <!-- Preferred language -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">Preferred language for communication</span>
                <span class="required"> (required)</span>
            </legend>
            <div class="gc-input-radio">
                <input id="languageEN" data-rule-required="true" class="gc-radio__input" type="radio" value="English" name="Preferred language">
                <label class="gc-radio-label" for="languageEN">
                    English</span>
                </label>
            </div>
            <!--  -->
            <div class="gc-input-radio">
                <input id="languageFR" class="gc-radio__input" type="radio" value="French" name="Preferred language">
                <label class="gc-radio-label" for="languageFR">
                    French</span>
                </label>
            </div>
        </fieldset>
        <!-- Supplementary contact details -->
        <div class="focus-group">
            <label class="gc-label" for="supplementaryContact">Supplementary contact details (email address and project roles)</label>
            <div class="gc-description" id="details-desc">Please provide the contact details of any additional individuals who should be included in the communication regarding this testing request.</div>
            <textarea class="gc-textarea" id="supplementaryContact" placeholder="" aria-describedby="details-desc" name="Supplementary contact"></textarea>
        </div>
        <!-- GC deparment  -->
        <div class="focus-group">
            <div class="gc-group">
                <label class="gc-label" for="GCdeparment">
                    <span class="field-name">Which GC department or agency is this request for?</span>
                    <span class="required"> (required)</span>
                </label>
                <div class="gc-description" id="options-desc">Browse the drop down list and select your department</div>
                <select aria-describedby="options-desc" class="gc-dropdown" name="GCdeparment" id="GCdeparment" required="required">
                    <option label="No selection"></option>
                    <option value="Accessibility Standards Canada">Accessibility Standards Canada</option>
                    <option value="Administrative Tribunals Support Service of Canada">Administrative Tribunals Support Service of Canada</option>
                    <option value="Agriculture and Agri-Food Canada">Agriculture and Agri-Food Canada</option>
                    <option value="Association of Professional Executives of the Public Service of Canada">Association of Professional Executives of the Public Service of Canada</option>
                    <option value="Atlantic Canada Opportunities Agency">Atlantic Canada Opportunities Agency</option>
                    <option value="Atlantic Pilotage Authority">Atlantic Pilotage Authority</option>
                    <option value="Atomic Energy of Canada Limited">Atomic Energy of Canada Limited</option>
                    <option value="Bank of Canada">Bank of Canada</option>
                    <option value="Canada Agricultural Review Tribunal">Canada Agricultural Review Tribunal</option>
                    <option value="Canada Border Services Agency">Canada Border Services Agency</option>
                    <option value="Canada Council for the Arts">Canada Council for the Arts</option>
                    <option value="Canada Deposit Insurance Corporation">Canada Deposit Insurance Corporation</option>
                    <option value="Canada Economic Development for Quebec Regions">Canada Economic Development for Quebec Regions</option>
                    <option value="Canada Energy Regulator">Canada Energy Regulator</option>
                    <option value="Canada Industrial Relations Board">Canada Industrial Relations Board</option>
                    <option value="Canada Mortgage and Housing Corporation">Canada Mortgage and Housing Corporation</option>
                    <option value="Canada Revenue Agency">Canada Revenue Agency</option>
                    <option value="Canada School of Public Service">Canada School of Public Service</option>
                    <option value="Canadian Air Transport Security Authority">Canadian Air Transport Security Authority</option>
                    <option value="Canadian Centre for Occupational Health and Safety">Canadian Centre for Occupational Health and Safety</option>
                    <option value="Canadian Centre on Substance Abuse">Canadian Centre on Substance Abuse</option>
                    <option value="Canadian Commercial Corporation">Canadian Commercial Corporation</option>
                    <option value="Canadian Cultural Property Export Review Board">Canadian Cultural Property Export Review Board</option>
                    <option value="Canadian Dairy Commission">Canadian Dairy Commission</option>
                    <option value="Canadian Food Inspection Agency">Canadian Food Inspection Agency</option>
                    <option value="Canadian Grain Commission">Canadian Grain Commission</option>
                    <option value="Canadian Heritage">Canadian Heritage</option>
                    <option value="Canadian Human Rights Commission">Canadian Human Rights Commission</option>
                    <option value="Canadian Human Rights Tribunal">Canadian Human Rights Tribunal</option>
                    <option value="Canadian Institutes of Health Research">Canadian Institutes of Health Research</option>
                    <option value="Canadian Intergovernmental Conference Secretariat">Canadian Intergovernmental Conference Secretariat</option>
                    <option value="Canadian International Trade Tribunal">Canadian International Trade Tribunal</option>
                    <option value="Canadian Museum for Human Rights">Canadian Museum for Human Rights</option>
                    <option value="Canadian Museum of History">Canadian Museum of History</option>
                    <option value="Canadian Museum of Immigration at Pier 21">Canadian Museum of Immigration at Pier 21</option>
                    <option value="Canadian Museum of Nature">Canadian Museum of Nature</option>
                    <option value="Canadian Northern Economic Development Agency">Canadian Northern Economic Development Agency</option>
                    <option value="Canadian Nuclear Safety Commission">Canadian Nuclear Safety Commission</option>
                    <option value="Canadian Radio-television and Telecommunications Commission">Canadian Radio-television and Telecommunications Commission</option>
                    <option value="Canadian Security Intelligence Service">Canadian Security Intelligence Service</option>
                    <option value="Canadian Space Agency">Canadian Space Agency</option>
                    <option value="Canadian Tourism Commission">Canadian Tourism Commission</option>
                    <option value="Canadian Transportation Agency">Canadian Transportation Agency</option>
                    <option value="CBC/Radio-Canada">CBC/Radio-Canada</option>
                    <option value="Civilian Review and Complaints Commission for the RCMP">Civilian Review and Complaints Commission for the RCMP</option>
                    <option value="Communications Security Establishment Canada">Communications Security Establishment Canada</option>
                    <option value="Competition Tribunal">Competition Tribunal</option>
                    <option value="Copyright Board Canada">Copyright Board Canada</option>
                    <option value="Correctional Service Canada">Correctional Service Canada</option>
                    <option value="Court Martial Appeal Court of Canada">Court Martial Appeal Court of Canada</option>
                    <option value="Courts Administration Service">Courts Administration Service</option>
                    <option value="Crown-Indigenous Relations and Northern Affairs Canada">Crown-Indigenous Relations and Northern Affairs Canada</option>
                    <option value="Defence Construction Canada">Defence Construction Canada</option>
                    <option value="Deputy Prime Minister and Minister of Finance">Deputy Prime Minister and Minister of Finance</option>
                    <option value="Employment and Social Development Canada">Employment and Social Development Canada</option>
                    <option value="Environment and Climate Change Canada">Environment and Climate Change Canada</option>
                    <option value="Farm Credit Canada">Farm Credit Canada</option>
                    <option value="Farm Products Council of Canada">Farm Products Council of Canada</option>
                    <option value="Federal Court">Federal Court</option>
                    <option value="Federal Court of Appeal">Federal Court of Appeal</option>
                    <option value="Federal Economic Development Agency for Northern Ontario">Federal Economic Development Agency for Northern Ontario</option>
                    <option value="Federal Economic Development Agency for Southern Ontario">Federal Economic Development Agency for Southern Ontario</option>
                    <option value="Federal Public Sector Labour Relations and Employment Board">Federal Public Sector Labour Relations and Employment Board</option>
                    <option value="Finance Canada">Finance Canada</option>
                    <option value="Financial Consumer Agency of Canada">Financial Consumer Agency of Canada</option>
                    <option value="Financial Transactions and Reports Analysis Centre of Canada">Financial Transactions and Reports Analysis Centre of Canada</option>
                    <option value="Fisheries and Oceans Canada">Fisheries and Oceans Canada</option>
                    <option value="Global Affairs Canada">Global Affairs Canada</option>
                    <option value="Governor General">Governor General</option>
                    <option value="Halifax Port Authority">Halifax Port Authority</option>
                    <option value="Health Canada">Health Canada</option>
                    <option value="House of Commons">House of Commons</option>
                    <option value="Immigration and Refugee Board of Canada">Immigration and Refugee Board of Canada</option>
                    <option value="Immigration, Refugees and Citizenship Canada">Immigration, Refugees and Citizenship Canada</option>
                    <option value="Impact Assessment Agency of Canada">Impact Assessment Agency of Canada</option>
                    <option value="Indigenous Services Canada">Indigenous Services Canada</option>
                    <option value="Infrastructure Canada">Infrastructure Canada</option>
                    <option value="Ingenium">Ingenium</option>
                    <option value="Innovation, Science and Economic Development Canada">Innovation, Science and Economic Development Canada</option>
                    <option value="International Joint Commission">International Joint Commission</option>
                    <option value="Justice Canada">Justice Canada</option>
                    <option value="King's Privy Council for Canada and Emergency Preparedness">King's Privy Council for Canada and Emergency Preparedness</option>
                    <option value="Laurentian Pilotage Authority Canada">Laurentian Pilotage Authority Canada</option>
                    <option value="Law Commission of Canada">Law Commission of Canada</option>
                    <option value="Library and Archives Canada">Library and Archives Canada</option>
                    <option value="Library of Parliament">Library of Parliament</option>
                    <option value="Military Grievances External Review Committee">Military Grievances External Review Committee</option>
                    <option value="Military Police Complaints Commission of Canada">Military Police Complaints Commission of Canada</option>
                    <option value="National Arts Centre">National Arts Centre</option>
                    <option value="National Capital Commission">National Capital Commission</option>
                    <option value="National Defence">National Defence</option>
                    <option value="National Film Board of Canada">National Film Board of Canada</option>
                    <option value="National Gallery of Canada">National Gallery of Canada</option>
                    <option value="National Research Council Canada">National Research Council Canada</option>
                    <option value="National Security and Intelligence Review Agency">National Security and Intelligence Review Agency</option>
                    <option value="Natural Resources Canada">Natural Resources Canada</option>
                    <option value="Natural Sciences and Engineering Research Council of Canada">Natural Sciences and Engineering Research Council of Canada</option>
                    <option value="Northern Pipeline Agency">Northern Pipeline Agency</option>
                    <option value="Office of the Auditor General of Canada">Office of the Auditor General of Canada</option>
                    <option value="Office of the Chief Electoral Officer">Office of the Chief Electoral Officer</option>
                    <option value="Office of the Commissioner for Federal Judicial Affairs Canada">Office of the Commissioner for Federal Judicial Affairs Canada</option>
                    <option value="Office of the Commissioner of Lobbying of Canada">Office of the Commissioner of Lobbying of Canada</option>
                    <option value="Office of the Commissioner of Official Languages">Office of the Commissioner of Official Languages</option>
                    <option value="Office of the Conflict of Interest and Ethics Commissioner">Office of the Conflict of Interest and Ethics Commissioner</option>
                    <option value="Office of the Correctional Investigator Canada">Office of the Correctional Investigator Canada</option>
                    <option value="Office of the Information Commissioner of Canada">Office of the Information Commissioner of Canada</option>
                    <option value="Office of the Intelligence Commissioner">Office of the Intelligence Commissioner</option>
                    <option value="Office of the Leader of the Government in the House of Commons">Office of the Leader of the Government in the House of Commons</option>
                    <option value="Office of the Minister of Intergovernmental Affairs">Office of the Minister of Intergovernmental Affairs</option>
                    <option value="Office of the Privacy Commissioner of Canada">Office of the Privacy Commissioner of Canada</option>
                    <option value="Office of the Procurement Ombudsman">Office of the Procurement Ombudsman</option>
                    <option value="Office of the Public Sector Integrity Commissioner of Canada">Office of the Public Sector Integrity Commissioner of Canada</option>
                    <option value="Office of the Québec Lieutenant">Office of the Québec Lieutenant</option>
                    <option value="Office of the Secretary to the Governor General">Office of the Secretary to the Governor General</option>
                    <option value="Office of the Senate Ethics Officer">Office of the Senate Ethics Officer</option>
                    <option value="Office of the Superintendent of Financial Institutions Canada">Office of the Superintendent of Financial Institutions Canada</option>
                    <option value="Office of the taxpayers' ombudsperson">Office of the taxpayers' ombudsperson</option>
                    <option value="Pacific Economic Development Canada">Pacific Economic Development Canada</option>
                    <option value="Pacific Pilotage Authority Canada">Pacific Pilotage Authority Canada</option>
                    <option value="Parks Canada">Parks Canada</option>
                    <option value="Parliamentary Budget Officer">Parliamentary Budget Officer</option>
                    <option value="Parole Board of Canada">Parole Board of Canada</option>
                    <option value="Patented Medicine Prices Review Board">Patented Medicine Prices Review Board</option>
                    <option value="Polar Knowledge Canada">Polar Knowledge Canada</option>
                    <option value="Policy Horizons Canada">Policy Horizons Canada</option>
                    <option value="PPP Canada">PPP Canada</option>
                    <option value="Prairies Economic Development Canada">Prairies Economic Development Canada</option>
                    <option value="Prime Minister's Office">Prime Minister's Office</option>
                    <option value="Privy Council Office">Privy Council Office</option>
                    <option value="Public Health Agency of Canada">Public Health Agency of Canada</option>
                    <option value="Public Prosecution Service of Canada">Public Prosecution Service of Canada</option>
                    <option value="Public Safety Canada">Public Safety Canada</option>
                    <option value="Public Servants Disclosure Protection Tribunal Canada">Public Servants Disclosure Protection Tribunal Canada</option>
                    <option value="Public Service Commission">Public Service Commission</option>
                    <option value="Public Services and Procurement Canada">Public Services and Procurement Canada</option>
                    <option value="Quebec Federal Council">Quebec Federal Council</option>
                    <option value="Royal Canadian Mint">Royal Canadian Mint</option>
                    <option value="Royal Canadian Mounted Police">Royal Canadian Mounted Police</option>
                    <option value="Royal Canadian Mounted Police External Review Committee">Royal Canadian Mounted Police External Review Committee</option>
                    <option value="Royal Society of Canada, The">Royal Society of Canada, The</option>
                    <option value="Secretariat of the National Security and Intelligence Committee of Parliamentarians">Secretariat of the National Security and Intelligence Committee of Parliamentarians</option>
                    <option value="Senate of Canada">Senate of Canada</option>
                    <option value="Shared Services Canada">Shared Services Canada</option>
                    <option value="Social Sciences and Humanities Research Council of Canada">Social Sciences and Humanities Research Council of Canada</option>
                    <option value="Social Security Tribunal of Canada">Social Security Tribunal of Canada</option>
                    <option value="Specific Claims Tribunal">Specific Claims Tribunal</option>
                    <option value="Standards Council of Canada">Standards Council of Canada</option>
                    <option value="Statistics Canada">Statistics Canada</option>
                    <option value="St Lawrence Seaway Management Corporation, The">St Lawrence Seaway Management Corporation, The</option>
                    <option value="Supreme Court of Canada">Supreme Court of Canada</option>
                    <option value="Tax Court of Canada">Tax Court of Canada</option>
                    <option value="Telefilm Canada">Telefilm Canada</option>
                    <option value="The Federal Bridge Corporation Limited">The Federal Bridge Corporation Limited</option>
                    <option value="The Jacques Cartier and Champlain Bridges Incorporated">The Jacques Cartier and Champlain Bridges Incorporated</option>
                    <option value="The National Battlefields Commission">The National Battlefields Commission</option>
                    <option value="Transportation Appeal Tribunal of Canada">Transportation Appeal Tribunal of Canada</option>
                    <option value="Transportation Safety Board of Canada">Transportation Safety Board of Canada</option>
                    <option value="Transport Canada">Transport Canada</option>
                    <option value="Treasury Board of Canada Secretariat">Treasury Board of Canada Secretariat</option>
                    <option value="Veterans Affairs Canada">Veterans Affairs Canada</option>
                    <option value="Veterans Review and Appeal Board">Veterans Review and Appeal Board</option>
                    <option value="Women and Gender Equality Canada">Women and Gender Equality Canada</option>
                </select>
            </div>
        </div>
        <!-- Application Name -->
        <div class="gc-group">
            <h2>Application Details</h2>
            <div class="focus-group">
                <label class="gc-label" for="applicationName">Application name</label>
                <input class="gc-text__input" id="applicationName" autocomplete="off" placeholder="" type="text" value="" name="Application Name">
            </div>
        </div>
        <!-- Application Details -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">Please check all that apply for the application:</span>
                <span class="required"> (required)</span>
            </legend>
            <div class="gc-input-checkbox">
                <input id="applicationDetails1" data-rule-required="true" class="gc-input-checkbox__input" type="checkbox" value="Web-based" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails1"> 
                Web-based
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails2" class="gc-input-checkbox__input" type="checkbox" value="Desktop application" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails2"> 
                Desktop application
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails3" class="gc-input-checkbox__input" type="checkbox" value="Mobile application" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails3">
                    <span>Mobile application</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails4" class="gc-input-checkbox__input" type="checkbox" value="Authoring tool" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails4">   
                    <span>Authoring tool</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails5" class="gc-input-checkbox__input" type="checkbox" value="Based on GC Design System or Web Experience Toolkit (WET)" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails5">
                    <span>Based on GC Design System or Web Experience Toolkit (WET)</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails6" class="gc-input-checkbox__input" type="checkbox" value="Contains time-based media (videos)" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails6">
                    <span>Contains time-based media (videos)</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails7" class="gc-input-checkbox__input" type="checkbox" value="Contains fillable forms" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails7">
                    <span>Contains fillable forms</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails8" class="gc-input-checkbox__input" type="checkbox" value="Includes an admin side" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails8">
                    <span>Includes an admin side</span>
                </label>
            </div>
            <div class="gc-input-checkbox">
                <input id="applicationDetails9" class="gc-input-checkbox__input" type="checkbox" value="Supports multiple user roles" name="Application Details">
                <label class="gc-checkbox-label" for="applicationDetails9">
                    <span>Supports multiple user roles</span>
                </label>
            </div>
        </fieldset>
        <!-- Application Reach -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">Will this application be public-facing, internal or both?</legend>
            <div class="gc-input-radio">
                <input id="applicationReachPublic" class="gc-radio__input" type="radio" value="Public-facing" name="Application Reach">
                <label class="gc-radio-label" for="applicationReachPublic">
                    Public-facing
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="applicationReachInternal" class="gc-radio__input" type="radio" value="Internal" name="Application Reach">
                <label class="gc-radio-label" for="applicationReachInternal">
                    Internal
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="applicationReachBoth" class="gc-radio__input" type="radio" value="Both" name="Application Reach">
                <label class="gc-radio-label" for="applicationReachBoth">
                    Both
                </label>
            </div>
        </fieldset>
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">Is the application currently live?</legend>
            <div class="gc-input-radio">
                <input id="applicationLiveYes" class="gc-radio__input" type="radio" value="Yes" name="Application Live">
                <label class="gc-radio-label" for="applicationLiveYes">
                    Yes
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="applicationLiveNo" class="gc-radio__input" type="radio" value="No" name="Application Live">
                <label class="gc-radio-label" for="applicationLiveNo">
                    No
                </label>
            </div>
            <div id="appLive" aria-hidden="true"  class="hidden" aria-live="polite"></div>
        </fieldset>
        <!-- Special access -->
        <fieldset class="focus-group" aria-describedby="access-desc" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">Will we need accounts or any special method of access to be set up?</span>
                <span class="required"> (required)</span>
            </legend>
            <div class="gc-description" id="access-desc">If the answer is yes, please refrain from sharing the details within this form. We will inquire about any necessary accounts or access setup in our response email regarding this task.</div>
            <div class="gc-input-radio">
                <input id="specialAccessYes" data-rule-required="true" class="gc-radio__input" type="radio" value="Yes" name="Special access">
                <label class="gc-radio-label" for="specialAccessYes">
                    Yes
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="specialAccessNo" class="gc-radio__input" type="radio" value="No" name="Special access">
                <label class="gc-radio-label" for="specialAccessNo">
                    No
                </label>
            </div>
        </fieldset>
        <!-- Num of users  -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">Approximately, how many users do you expect will use the solution?</span>
                <span class="required"> (required)</span>
            </legend>
            <div class="gc-input-radio">
                <input id="numUsers_less20" data-rule-required="true" class="gc-radio__input" type="radio" value="Less than 20" name="Num of Users">
                <label class="gc-radio-label" for="numUsers_less20">
                    Less than 20
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="numUsers_btw20_100" class="gc-radio__input" type="radio" value="20 to 100" name="Num of Users">
                <label class="gc-radio-label" for="numUsers_btw20_100">
                    20 to 100
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="numUsers_btw100_1000" class="gc-radio__input" type="radio" value="100 to 1000" name="Num of Users">
                <label class="gc-radio-label" for="numUsers_btw100_1000">
                    100 to 1000
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="numUsers_more10000_" class="gc-radio__input" type="radio" value="More than 1000" name="Num of Users">
                <label class="gc-radio-label" for="numUsers_more10000_">
                    More than 1000
                </label>
            </div>
        </fieldset>
        <!-- Level of sensitivity -->
        <div class="focus-group">
            <label class="gc-label" for="sensitivityLevel">
                <span class="field-name">What is the level of sensitivity of the application?</span>
                <span class="required"> (required)</span>
            </label>
            <select class="gc-dropdown" id="sensitivityLevel" name="sensitivityLevel" required="required">
                <option label="No selection"></option>
                <option value="Unclassified">Unclassified</option>
                <option value="Protected A">Protected A</option>
                <option value="Protected B">Protected B</option>
                <option value="Protected C">Protected C</option>
                <option value="Confidential">Confidential</option>
                <option value="Secret">Secret</option>
                <option value="Top Secret">Top Secret</option>
            </select>
        </div>
        <!-- Stage of development -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">
                <span class="field-name">What is the current stage of development for your project?</span>
                <span class="required"> (required)</span>
            </legend>
            <div class="gc-input-radio">
                <input id="stage.0" data-rule-required="true" class="gc-radio__input" type="radio" value="Design (drafting requirements)" name="Stage of Development">
                <label class="gc-radio-label" for="stage.0">
                    Design (drafting requirements)
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="stage.1" class="gc-radio__input" type="radio" value="Development (building the solution)" name="Stage of Development">
                <label class="gc-radio-label" for="stage.1">
                    Development (building the solution)
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="stage.2" class="gc-radio__input" type="radio" value="Quality assurance (reviewing the app, most development is complete)" name="Stage of Development">
                <label class="gc-radio-label" for="stage.2">
                    Quality assurance (reviewing the app, most development is complete)
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="stage.3" class="gc-radio__input" type="radio" value="Ready for or post deployment (app has been accepted in its current state)" name="Stage of Development">
                <label class="gc-radio-label" for="stage.3">
                    Ready for or post deployment (app has been accepted in its current state)
                </label>
            </div>
        </fieldset>
        <!-- Testing Details -->
        <div>
            <h2 id="testing-details">Testing Details</h2>
            <div class="focus-group">
                <label class="gc-label" for="testingDetails">
                    <span class="field-name">Approximate number of pages / screens</span> (note: we only assess samples)
                    <span class="required"> (required)</span>
                </label>
                <div class="gc-description" id="testingDetails-desc">Please enter a number. It is a good idea to keep to the highest impact and most visited pages / screens.</div>
                <input class="gc-text__input" id="testingDetails" required="required" autocomplete="off" placeholder="" aria-describedby="testingDetails-desc" type="number" value="" name="Testing Details" min="1">
            </div>
        </div>
        <!-- Timelines -->
        <div class="focus-group">
            <label class="gc-label" for="timelines">
                <span class="field-name">In what timelines do you expect the testing to be done?</span>
                <span class="required"> (required)</span>
            </label>
            <div class="gc-description" id="timelines-desc">Please provide us with at least four months' advance notice, as we receive a high volume of requests and need sufficient time to accommodate them.</div>
            <input class="gc-text__input" id="timelines" required="required" autocomplete="off" placeholder="" aria-describedby="timelines-desc" type="text" value="" name="Timeline">
        </div>
        <!-- User Testing  -->
        <fieldset class="focus-group" aria-describedby="userTesting-desc" tabindex="0">
            <legend class="gc-label">Are you looking to have user testers?</legend>
            <div class="gc-description" id="userTesting-desc">We suggest requesting user testing only after ensuring that the application meets the accessibility standards (EN 301 549).</div>
            <div class="gc-input-radio">
                <input id="userTestingYes" class="gc-radio__input" type="radio" value="Yes" name="userTesting">
                <label class="gc-radio-label" for="userTestingYes">
                    Yes
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="userTestingNo" class="gc-radio__input" type="radio" value="No" name="userTesting">
                <label class="gc-radio-label" for="userTestingNo">
                    No
                </label>
            </div>
        </fieldset>
        <!-- Self assessment -->
        <fieldset class="focus-group" tabindex="0">
            <legend class="gc-label">Did you complete the self-assessment?</legend>
            <div class="gc-input-radio">
                <input id="selfAssessmentYes" class="gc-radio__input" type="radio" value="Yes" name="Self Assessment">
                <label class="gc-radio-label" for="selfAssessmentYes">
                    Yes
                </label>
            </div>
            <div class="gc-input-radio">
                <input id="selfAssessmentNo" class="gc-radio__input" type="radio" value="No" name="Self Assessment">
                <label class="gc-radio-label" for="selfAssessmentNo">
                    No
                </label>
            </div>
        </fieldset>
        <div>
            <p>***We need to contact the information and privacy coordinator</p>
            <h2>Collection of Personal Information</h2>
            <p>We collect personal information for the purpose of organizing the scheduling of accessibility testing of your application. This information may include contact details. The collection of this information is necessary for .</p><br>
            <p><strong>Legal Authority</strong></p>
            <p>The legal authority for collecting this information is provided by [insert specific legal or program authorities, e.g., the Shared Services Canada Act, the Criminal Code, etc.], which mandates [insert the mandate or requirement that necessitates the collection of personal information].</p><br>
            <p><strong>Use, Sharing, Storage, and Retention</strong></p>
            <p>The information collected will be used for [insert uses, e.g., service provision, communication, etc.]. It may be shared with [insert entities with whom the information may be shared, e.g., other government departments, service providers, etc.] as required by law or for the purposes of [insert purpose].</p>
            <p>The information will be stored [insert storage details, e.g., in secure government databases] and retained in accordance with [insert retention standards or guidelines, e.g., the Library and Archives of Canada Act, specific institutional retention policies, etc.].</p><br>
            <p><strong>Access and Correction</strong></p>
            <p>Individuals have the right to access and request correction of their personal information. Requests can be made to [insert contact details for the Access to Information and Privacy Coordinator or the process for accessing information on the SSC’s Access to Information and Privacy (ATIP) website].</p><br>
            <p><strong>Complaints</strong></p>
            <p>If you have concerns about how your personal information is handled, you may file a complaint with [insert contact details for the institution’s complaint process] or with the Privacy Commissioner of Canada.</p>
        </div>
        <div id="PreviewSubmitButton"> 
            <button type="submit" id="SubmitButton">Submit</button>
            <div class="inline-block bg-purple-200 px-4 py-1">
                <a href="/en/auth/login">Sign in</a> to test how you can submit and view responses
            </div>
        </div>
    </form>
</div>

