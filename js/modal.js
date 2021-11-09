var modal = document.getElementById("myModal");
var btn = document.getElementById("reg");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var loginModal = document.getElementById("loginModal");
var btnLog = document.getElementById("log");
var spanTwo = document.getElementsByClassName("close")[0];

btnLog.onclick = function() {
    loginModal.style.display = "block";
}
spanTwo.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
}

