
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