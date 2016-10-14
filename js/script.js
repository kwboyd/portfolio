
  //window.onload = function() { init() };
  //
  //var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1irx4_Xs7oJsJ17Cbcf4FjSZ0ukKR4U-TMVVhCXCgc4Q/pubhtml';
  //
  //function init() {
  //  Tabletop.init( { key: public_spreadsheet_url,
  //                   callback: showInfo,
  //                   simpleSheet: true } )
  //}
  //
  //function showInfo(data, tabletop) {
  //  console.log(data);
  //  dataLength = data.length;
  //  for (i=0; i<dataLength; i++) {
  //      $("#test").append (
  //          "<p>" + data[i].title + "</p>"
  //      )
  //  }
  //  
  //}

$(document).ready(function()  {
    getPortfolio();
})
var portfolioHtml = [];
function getPortfolio() {
    $.getJSON('data/data.json', function(data) {
        $.each(data, function (i, data) {
                       
                       if (i % 3 === 0){
                        portfolioHtml += "<div class='row'>";
                        appendPortfolio(data);
                       }
                        else if (i % 3 === 2) {
                            appendPortfolio(data);
                            portfolioHtml += "</div>";
                        }
                        else {
                        appendPortfolio(data);
                       }
                       
                    });
            $("#portfolio-container").append(portfolioHtml);
        })
}

function appendPortfolio(data) {
    portfolioHtml += "<div class='portfolio-box col-md-4'>";
    portfolioHtml += "<a class='img-link' href='" + data.link + "'>"
    portfolioHtml += "<img class='portfolio-img' src='" + data.image + "' alt='" + data.title + "'></a>";
    portfolioHtml += "<h3 class='img-title'>" + data.title + "</h3>";
    portfolioHtml += "<a class='site-link' href='" + data.link + "'> Visit site" + "</a>";
    portfolioHtml += "<a class='repo-link' href='" + data.repo + "'> Visit repo" + "</a>";
    portfolioHtml += "<p class='skills'>Skills: " + data.skills + "</p>";
    portfolioHtml += "<p>" + data.description + "</p></div>";
}