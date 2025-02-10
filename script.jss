// script.js

function goToNextPage() {
    document.getElementById('nextPage1').style.display = 'block';
    document.getElementById('image').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
}

function goToNextPage2() {
    window.location.href = "nextpage.html";
}

function showGif() {
    document.getElementById('gifContainer').style.display = 'block';
}
