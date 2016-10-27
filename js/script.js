var emailName = "kwboyd95";
var domainName = "gmail.com";
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
    $("#resume").click(function(){
        $("#about-container").hide();
        $("#works-container").hide();
        $("#resume-container").fadeIn("fast");
    })
    document.getElementById("email").innerHTML = "Email: " + emailName + "@" + domainName;
})
var portfolioHtml = [];
function getPortfolio() {
    $.getJSON('data/data.json', function(data) {
        $.each(data, function (i, data) {
                    portfolioHtml += "<div class='portfolio-box col-sm-6 col-xl-4'>";
                    portfolioHtml += "<a class='img-link' href='" + data.link + "'>"
                    portfolioHtml += "<div class='portfolio-img-box'> <img class='portfolio-img' src='" + data.image + "' alt='" + data.title + "'>";
                    portfolioHtml += "<h3 class='img-title'>" + data.title + "</h3></a></div>";
                    portfolioHtml += "<div class='link-box'><a class='site-link live' href='" + data.link + "'> VISIT SITE" + "</a>";
                    portfolioHtml += "<a class='site-link repo' href='" + data.repo + "'> VISIT REPO" + "</a></div>";
                    portfolioHtml += "<p class='skills'>Skills: " + data.skills + "</p>";
                    portfolioHtml += "<p class='description'>" + data.description + "</p></div>";
                    });
            $("#works-container").append(portfolioHtml);
        })
}

