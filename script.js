document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-fluid");
  const imgContainer = document.querySelector(".img-container");
  const hbdContainer = document.querySelector(".hbd");
  const images = [
    "https://i.ibb.co/272YpYv/gilocavnatl-min-min.jpg",
    "https://i.ibb.co/Fxpz5WQ/min-min.jpg",
    "https://i.ibb.co/8BQmyGX/scary-min-min.jpg",
    "./imgs/gold-coochie.gif",
    "https://i.ibb.co/zPVGmhh/emonatl.jpg",
    "./imgs/cutienatl.gif",
    "https://i.ibb.co/P5YkxTP/how-to-hack-club-penguin-min.jpg",
    "https://i.ibb.co/R4LDrLY/DSC01170-min.jpg",
    "https://i.ibb.co/3mXPdnm/arabNatl.jpg",
    "https://i.ibb.co/v4QxtVJ/arab2.jpg",
    "https://i.ibb.co/Sn6hk17/DSC01179-min.jpg",
    "https://i.ibb.co/Jc1XkWQ/arab3-min.jpg",
    "./imgs/ezgif.com-optimize (2).gif",
  ];

  const hbdVid =
    "https://i.gifer.com/origin/94/9453bb10dcc37daf75abcf3fea141fc8_w200.gif";
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

  container.addEventListener("click", function () {
    changeImage();
  });

  changeImage();

  // Image download function
  // const imageUrls = [
  //   "https://i.ibb.co/Km4HF3H/image.jpg",
  //   "https://i.ibb.co/r63ty0R/emonatl.jpg",
  //   "https://i.ibb.co/pysQLGm/gilocavnatl.jpg",
  //   "https://i.ibb.co/1TDgQvT/scary.jpg",
  //   "https://i.ibb.co/h8zL88m/turrtl.jpg",
  // ];

  // function downloadImage(url) {
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = url.split("/").pop();
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  // const downloadButton = document.querySelector(".download");
  // downloadButton.addEventListener("click", function () {
  //   imageUrls.forEach(function (url) {
  //     downloadImage(url);
  //   });
  // });
});
