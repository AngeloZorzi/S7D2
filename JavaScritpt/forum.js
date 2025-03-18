const savedNameDiv = document.getElementById("savedName");
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const form = document.getElementById("nameForm");
const names = [];
function displaySavedName() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    savedNameDiv.textContent = `👤 Nome salvato: ${savedName}`;
    savedNameDiv.classList.remove("d-none");
  } else {
    savedNameDiv.classList.add("d-none");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    names.push(name);
    console.log(names);
    nameInput.value = "";
    displaySavedName();
  } else {
    alert("Inserisci un nome prima di salvare.");
  }
});

removeBtn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  displaySavedName();
});

displaySavedName();
