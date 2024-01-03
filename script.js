const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");

for (let select of dropdown) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;
  console.log(amtValue);
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amount.value = "1";
  }
});
