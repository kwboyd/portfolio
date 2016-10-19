
$(document).ready(function()  {
    getPortfolio();
    $("#works").click(function() {
        $("#works-container").fadeIn("fast");
        $("#about-container").hide();
        $("#resume-container").hide();
    });
    $("#about").click(function(){
        $("#works-container").hide();
        $("#about-container").fadeIn("fast");
        $("#resume-container").hide();
    })
    $("#contact").click(function(){
        $("#about-container").hide();
        $("#works-container").hide();
        $("#resume-container").fadeIn("fast");
    })
})
var portfolioHtml = [];
function getPortfolio() {
    $.getJSON('data/data.json', function(data) {
        $.each(data, function (i, data) {
                    portfolioHtml += "<div class='portfolio-box col-sm-6 col-xl-4'>";
                    portfolioHtml += "<a class='img-link' href='" + data.link + "'>"
                    portfolioHtml += "<div class='portfolio-img-box'> <img class='portfolio-img' src='" + data.image + "' alt='" + data.title + "'>";
                    portfolioHtml += "<h3 class='img-title'>" + data.title + "</h3></a></div>";
                    portfolioHtml += "<div id='link-box'><a class='site-link' id='live' href='" + data.link + "'> VISIT SITE" + "</a>";
                    portfolioHtml += "<a class='site-link' id='repo' href='" + data.repo + "'> VISIT REPO" + "</a></div>";
                    portfolioHtml += "<p class='skills'><strong>Skills: " + data.skills + "</strong></p>";
                    portfolioHtml += "<p>" + data.description + "</p></div>";
                    });
            $("#works-container").append(portfolioHtml);
        })
}

