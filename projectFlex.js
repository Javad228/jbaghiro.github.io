var timeout;
var cancelled = false;
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}

document.getElementsByClassName("card")[0].onmouseenter = e => {
    cancelled = false;
    let slideIndex = 0;
    showSlides();
    function showSlides() {

        if (slideIndex > 5) {slideIndex = 0}
        let path ="url(controlled"+slideIndex+".png)";

        document.getElementsByClassName("card")[0].style.backgroundImage = path;
        document.getElementsByClassName("card")[0].style.backgroundRepeat = "no-repeat"
        document.getElementsByClassName("card")[0].style.backgroundPositionY = "50%";


        timeout = setTimeout(showSlides, 1200);
        slideIndex++;

    }

}

document.getElementsByClassName("card")[0].onmouseleave = e => {
    clearTimeout(timeout);
    document.getElementsByClassName("card")[0].style.backgroundImage = "none";
}

document.getElementsByClassName("card")[1].onmouseenter = e => {
    cancelled = false;
    let slideIndex = 0;
    showSlides();
    function showSlides() {

        if (slideIndex > 2) {slideIndex = 0}
        let path ="url(student"+slideIndex+".png)";

        document.getElementsByClassName("card")[1].style.backgroundImage = path;
        document.getElementsByClassName("card")[1].style.backgroundSize = "200% 110%";
        document.getElementsByClassName("card")[1].style.backgroundPositionX = "20%";
        timeout = setTimeout(showSlides, 1200);
        slideIndex++;

    }

}

document.getElementsByClassName("card")[1].onmouseleave = e => {
    // cancelled=true;
    clearTimeout(timeout);
    document.getElementsByClassName("card")[1].style.backgroundImage = "none";
}

document.getElementsByClassName("card")[3].onmouseenter = e => {
    cancelled = false;
    let slideIndex = 0;
    showSlides();
    function showSlides() {
        if (slideIndex > 4) {slideIndex = 0}
        let path ="url(unity"+slideIndex+".png)";

        document.getElementsByClassName("card")[3].style.backgroundImage = path;
        document.getElementsByClassName("card")[3].style.backgroundRepeat = "no-repeat"
        document.getElementsByClassName("card")[3].style.backgroundSize= "150%";
        document.getElementsByClassName("card")[3].style.backgroundPositionX = "50%";
        document.getElementsByClassName("card")[3].style.backgroundPositionY = "50%";

        // document.getElementsByClassName("card")[1].style.backgroundRepeat = "no-repeat";

        timeout = setTimeout(showSlides, 1200);
        slideIndex++;

    }

}

document.getElementsByClassName("card")[3].onmouseleave = e => {
    clearTimeout(timeout);
    document.getElementsByClassName("card")[3].style.backgroundImage = "none";
}



document.getElementsByClassName("card")[2].onmouseenter = e => {
    document.getElementsByClassName("card")[2].style.backgroundImage = "url(25231.png)";
    document.getElementsByClassName("card")[2].style.backgroundSize = "60% 70%"
    document.getElementsByClassName("card")[2].style.backgroundRepeat = "no-repeat"
    document.getElementsByClassName("card")[2].style.backgroundPositionX = "50%";
    document.getElementsByClassName("card")[2].style.backgroundPositionY = "50%";

}

document.getElementsByClassName("card")[2].onmouseleave = e => {
    document.getElementsByClassName("card")[2].style.backgroundImage = "none";
}