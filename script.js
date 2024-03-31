
// pfp change
var currentPictureIndex = 0;

function changeProfilePicture() {
    var pictures = ["pfp/pfp.jpg", "pfp/pfp1.jpg", "pfp/pfp2.jpg"];
    var profilePicture = document.getElementById("profile-picture").getElementsByTagName("img")[0];

    currentPictureIndex = (currentPictureIndex + 1) % pictures.length;
    profilePicture.src = pictures[currentPictureIndex];
    profilePicture.alt = "Profilbild";
}

document.addEventListener("DOMContentLoaded", function() {
    var profilePicture = document.getElementById("profile-picture").getElementsByTagName("img")[0];
    profilePicture.addEventListener("click", changeProfilePicture);
});


// Post like

function reSize(element) {
    if (!element.classList.contains("liked")) {
        element.querySelector("img").style.transform = "scale(1.1)";
    }
}

function resetSize(element) {
    element.querySelector("img").style.transform = "scale(1)";
}

