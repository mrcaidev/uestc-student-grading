[...document.querySelectorAll("input[type='hidden']")]
  .filter(item => item.id.includes("starNum"))
  .forEach(item => (item.value = "5"));
document
  .querySelectorAll("input[type='checkbox']")
  .forEach(item => (item.checked = true));
document.querySelector("#evaText").textContent = "教学态度好，教学内容吸引人";

try {
  document.querySelector("input[value='下一步']").click();
} catch {
  document.querySelector("input[value='确认']").click();
}
