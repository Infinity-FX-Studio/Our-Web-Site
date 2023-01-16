navigation = document.getElementById("navigation");
header = document.getElementById("header");
backgroundVideo = document.getElementById("backgroundVideo");

function changeNavigation() {
  navigation.classList.toggle("visible");
  header.classList.toggle("open");
  backgroundVideo.classList.toggle("fixed")
}
