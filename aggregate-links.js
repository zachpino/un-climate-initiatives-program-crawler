//Javascript in web console used to pull links from alphabetical listing pages
//https://climateinitiativesplatform.org/index.php/Category:Climate_initiative

[...document.querySelectorAll('.mw-content-ltr li a')].map(d=>d.href)
