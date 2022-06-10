document
  .querySelectorAll("input[type='radio'][value='0']")
  .forEach(item => (item.checked = true));
document.querySelector("#sub").click();
