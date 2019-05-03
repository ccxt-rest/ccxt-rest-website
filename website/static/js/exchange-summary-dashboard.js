(function() {
    function loadExchangeSummaryDashboard() {
        var lastUpdateDateElem = document.getElementById("lastUpdateDate")
        var exchangeSummaryElem = document.getElementById("exchangeSummary")
        if (lastUpdateDateElem && exchangeSummaryElem) {
            var xhr = new XMLHttpRequest();
    
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var imageText = ('<img' + xhr.responseText.split('<img')[1]).split('</div>')[0]
                    var tableText = ('<table' + xhr.responseText.split('<table')[1]).split('</table>')[0] + '</table>'
                    lastUpdateDateElem.innerHTML = imageText;
                    exchangeSummaryElem.innerHTML = tableText;
                } else {
                    console.log(`The request failed : ${xhr.status}!`);
                }
        
            };
        
            xhr.open('GET', 'https://franz-see.github.io/ccxt-rest/exchanges/');
            xhr.send();
        } else {
            setTimeout(loadExchangeSummaryDashboard, 1000);
        }
    }

    setTimeout(loadExchangeSummaryDashboard, 1000);

})();