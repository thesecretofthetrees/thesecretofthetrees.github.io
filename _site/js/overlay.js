function on(el) {
  console.log(el);
  document.getElementById("overlay").style.display = "block";
  document.getElementById("text").src = el;
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
