var procurement;
const procurementPara = document.getElementById('inProcurement')
const yesProcurementRadio = document.getElementById('procurementYes')
const noProcurementRadio = document.getElementById('procurementNo')

yesProcurementRadio.addEventListener('change', function(event) {
    if (this.checked){
        procurement = true;
        procurementPara.removeAttribute('aria-hidden');
        procurementPara.classList.remove('hidden');
        procurementPara.innerHTML =  `<p><strong>Since you responded "yes" to the above question,</strong> the first steps may not be to request for AAACT's testing. If you are unsure, please stop filling in this form and <a href="mailto:aaact-aatia@ssc-spc.gc.ca?subject=Request%20for%20guidance%20and%20access%20to%20toolkit%20for%20procurement%20related%20activity" target="_blank">use this email link to request for guidance</a>.</p>`;
    }
});

noProcurementRadio.addEventListener('change', function(event) {
    if (this.checked && procurement == true){
        procurement = false
        procurementPara.innerHTML = ''
        procurementPara.setAttribute('aria-hidden', 'true');
        procurementPara.classList.add('hidden');
    }
});

var live;
const livePara = document.getElementById('appLive')
const yesLiveRadio = document.getElementById('applicationLiveYes')
const noLiveRadio = document.getElementById('applicationLiveNo')

yesLiveRadio.addEventListener('change', function(event) {
    if (this.checked){
        live = true;
        livePara.removeAttribute('aria-hidden');
        livePara.classList.remove('hidden');
        livePara.innerHTML =  `<div class="focus-group"><label class="gc-label" for="appURL">If available, please provide the URL to access the application (including login information for testing accounts if applicable)</label><input class="gc-text__input" id="appURL" autocomplete="off" placeholder="" type="text" value="" name="appURL"></div>`
    }
});

noLiveRadio.addEventListener('change', function(event) {
    if (this.checked && live == true){
        live = false
        livePara.innerHTML = ''
        livePara.setAttribute('aria-hidden', 'true');
        livePara.classList.add('hidden');
    }
});