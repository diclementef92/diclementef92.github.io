window.onload = () => {
  var counter = 0;
  const imgs = [
    "../assets/img/profilo2.jpg",
    "../assets/img/profilo3.jpg",
    "../assets/img/profilo1.jpg",
  ];
  document
    .getElementsByClassName("profile-img")[0]
    .addEventListener("click", function () {
      var img = this;
      if (counter < imgs.length) {
        img.src = imgs[counter];
        counter++;
      } else {
        counter = 0;
        img.src = imgs[counter];
        counter++;
      }
    });
};

socialLink = (e, social) => {
  console.log(social);
  if (social === "github") window.location = "https://github.com/diclementef92";
  if (social === "instagram")
    window.location = "https://www.instagram.com/clem_piru/";
  if (social === "linkedin")
    window.location = "https://www.linkedin.com/in/francesco-di-clemente";
};
