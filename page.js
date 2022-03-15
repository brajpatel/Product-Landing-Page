let slideIndex = 1;
showImgs(slideIndex);

function plusImg(n) {
    showImgs(slideIndex += n);
}

function showImgs(n) {
    let i;
    let x = document.getElementsByClassName("images");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}