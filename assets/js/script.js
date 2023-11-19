window.onload = () => {
  document
    .getElementsByClassName("profile-img")[0]
    .addEventListener("click", function () {
      var img = this;

      setTimeout(function () {
        img.src = "../assets/img/profilo1.jpg";
        img.style.opacity = 1;
      }, 500);
    });
};
