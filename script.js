document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container-fluid");
    const imgContainer = document.querySelector(".img-container");
    const hbdContainer = document.querySelector(".hbd");
    const images = [
        "https://i.ibb.co/272YpYv/gilocavnatl-min-min.jpg",
        "https://i.ibb.co/Fxpz5WQ/min-min.jpg",
        "https://i.ibb.co/8BQmyGX/scary-min-min.jpg",
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
        imgTag.loading = "lazy";
        imgContainer.appendChild(imgTag);

        if (currentImageIndex === 0) {
            const hbdImgTag = document.createElement("img");
            hbdImgTag.src = hbdVid;
            hbdImgTag.alt = "HBD image";
            hbdImgTag.loading = "lazy";
            hbdContainer.appendChild(hbdImgTag);
        }

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    container.addEventListener("click", function() {
        changeImage();
    });

    changeImage();
});
