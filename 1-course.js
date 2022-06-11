const fiveStarsNum = 4;
const items = [...document.querySelectorAll("input[type='hidden']")].filter(
  item => item.id.includes("starNum")
);
items.slice(0, fiveStarsNum).forEach(item => (item.value = "5"));
items.slice(fiveStarsNum).forEach(item => (item.value = "4"));
document.querySelector("input[value='下一步']").click();
