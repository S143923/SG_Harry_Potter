// CAROUSEL
$(document).ready(function(){
    $('.wordcloud').carousel(
        {
            dist: 0,
            padding: 0,
            fullWidth: true,
            indicators: true,
            duration: 100,
        }
    );
});

// Or with jQuery

$(document).ready(function(){
    $('.tabs').tabs();
});

$(document).ready(function(){
    $('#cloud').carousel({indicators: false, numVisible:7});
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy({scrollOffset:1});
});


function selectBook(elem){
    print("changed", elem);
}

function toggleDegrees() {
    let remainingDegrees = document.getElementById("remainingDegreePlots");
    if (remainingDegrees.style.display === "none") {
        remainingDegrees.style.display = "block";
        $("#toggleDegreeBtn").html('Show less');
    } else {
        remainingDegrees.style.display = "none";
        $("#toggleDegreeBtn").html('Show more');
    }
}

