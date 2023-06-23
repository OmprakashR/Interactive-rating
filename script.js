let ratingBox = document.getElementById("rating-star");
let ratingResult = document.getElementById("rating-result");
let ratingOutoff = document.getElementById("rating-outoff");
ratingResult.style.display = " none";
document.getElementById("submit").disabled = true;
function rating(e) {
  let toggleID = document.getElementById(e.target.id).title;
  document.getElementById("rating-outoff").innerHTML = toggleID;
  var selected = document.querySelector('input[name="star-check"]:checked');
  if (selected) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}
function model(e) {
  let toggleID = document.getElementById(e.target.id).title;
  ratingBox.style.display = "none";
  ratingResult.style.display = "flex";
}
