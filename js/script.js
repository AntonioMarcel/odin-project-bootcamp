const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days;

  // ADD CONDITIONAL HERE
  if (select.value === "January" || select.value === "March" || select.value === "May" || select.value === "July" || select.value === "August" || select.value === "October" || select.value === "December") {
    days = 31;
  } else if (select.value === "February") {
    days = 28;
  } else {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
