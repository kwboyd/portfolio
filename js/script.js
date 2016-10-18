
$(document).ready(function()  {
    getPortfolio();
    $("#works").click(function() {
        $("#works-container").show("fast");
        $("#about-container").hide("fast");
        $("#resume-container").hide("fast");
    });
    $("#about").click(function(){
        $("#works-container").hide("fast");
        $("#about-container").show("fast");
        $("#resume-container").hide("fast");
    })
    $("#contact").click(function(){
        $("#about-container").hide("fast");
        $("#works-container").hide("fast");
        $("#resume-container").show("fast");
    })
})
var portfolioHtml = [];
function getPortfolio() {
    $.getJSON('data/data.json', function(data) {
        $.each(data, function (i, data) {
                    portfolioHtml += "<div class='portfolio-box col-sm-6 col-xl-4'>";
                    portfolioHtml += "<a class='img-link' href='" + data.link + "'>"
                    portfolioHtml += "<div class='portfolio-img-box'> <img class='portfolio-img' src='" + data.image + "' alt='" + data.title + "'>";
                    portfolioHtml += "<h3 class='img-title'>" + data.title + "</h3></a>";
                    portfolioHtml += "<div id='link-box'><a class='site-link' id='live' href='" + data.link + "'> VISIT SITE" + "</a>";
                    portfolioHtml += "<a class='site-link' id='repo' href='" + data.repo + "'> VISIT REPO" + "</a></div></div>";
                    portfolioHtml += "<p class='skills'><strong>Skills:</strong> " + data.skills + "</p>";
                    portfolioHtml += "<p>" + data.description + "</p></div>";
                    });
            $("#works-container").append(portfolioHtml);
        })
}

