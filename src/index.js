// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectBox = document.querySelector("select");
selectBox.addEventListener('change', ()=> {
  const value = selectBox.options[selectBox.selectedIndex].value;
  localStorage.setItem("country", value);
})

