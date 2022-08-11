const astronot = document.querySelector('.astronot'),
indexer = navigator.appVersion.indexOf("Mac")

if ( indexer != -1) {
    astronot.classList.add('mac')
} else {
    astronot.classList.add('winzort')
}