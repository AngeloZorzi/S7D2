let counterValue = parseInt(sessionStorage.getItem("counter")) || 0;

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
  sessionStorage.setItem("counter", counterValue);
}

setInterval(() => {
  counterValue++;
  updateCounter();
}, 1000);
