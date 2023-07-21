document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container-fluid");
    const imgContainer = document.querySelector(".img-container");
    const hbdContainer = document.querySelector(".hbd");
    const images = [
        "./imgs/gilocavnatl-min.jpg",
        "./imgs/ვარსკვლავთ-გოგონა-min.jpg",
        "./imgs/scary-min.jpg",
        "./imgs/gold-coochie.gif",
    ];

    const hbdVid = "https://i.gifer.com/origin/94/9453bb10dcc37daf75abcf3fea141fc8_w200.gif";
    let currentImageIndex = 0;

    function changeImage() {
        imgContainer.innerHTML = ""; // Clear the container
        hbdContainer.innerHTML = ""; // Clear the container

        const imgTag = document.createElement("img");
        imgTag.src = images[currentImageIndex];
        imgTag.alt = "natl bd 2023.img";
        imgContainer.appendChild(imgTag);

        if (currentImageIndex === 0) {
            const hbdImgTag = document.createElement("img");
            hbdImgTag.src = hbdVid;
            hbdImgTag.alt = "HBD image";
            hbdContainer.appendChild(hbdImgTag);
        }

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    container.addEventListener("click", function() {
        changeImage();
    });

    changeImage();
});
