const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".input-box");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressLevel = document.querySelector(".progress-level");
const progressLabel = document.querySelector(".progress-label");
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false,
  },
  second: {
    name: "",
    completed: false,
  },
  third: {
    name: "",
    completed: false,
  },
};
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
const allQuotes = [
  "Raise The Bar By completing The Goals",
  "Well begun is half done!",
  "half done! , keep going!",
  "Whoa! You just completed all the goals , time for chill :D",
];

progressLevel.style.width = `${
  (completedGoalsCount / inputFields.length) * 100
}%`;
progressLevel.firstElementChild.innerText = `${completedGoalsCount} / ${inputFields.length} completed`;
progressLabel.innerText = allQuotes[completedGoalsCount];

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    });
    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle("completed");
      const inputID = checkBox.nextElementSibling.id;
      allGoals[inputID].completed = !allGoals[inputID].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressLevel.style.width = `${
        (completedGoalsCount / inputFields.length) * 100
      }%`;
      progressLevel.firstElementChild.innerText = `${completedGoalsCount} / ${inputFields.length} completed`;
      progressLabel.innerText = allQuotes[completedGoalsCount];
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});
inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });
  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }
    allGoals[input.id].name = input.value;

    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
