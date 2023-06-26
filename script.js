

const ratingBox = document.getElementById("rating-star");
const ratingResult = document.getElementById("rating-result");
const ratingOutoff = document.getElementById("rating-outoff");

ratingResult.style.opacity = "0";
document.getElementById("submit").disabled = true;

function rating(e) {
  const toggleID = e.target.title;
  ratingOutoff.innerHTML = toggleID;
  
  const selected = document.querySelector('input[name="star-check"]:checked');
  document.getElementById("submit").disabled = !selected;
}

function model(e) {
  const toggleID = e.target.title;
  ratingBox.style.display = "none";
  ratingResult.style.opacity = "1";
  ratingResult.style.zIndex = "1";  ratingResult.style.zIndex = "1";
}
