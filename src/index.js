import "./styles/style.css";

// Date

let todaysDate = new Date();
let dd = String(todaysDate.getDate()).padStart(2, "0");
let mm = String(todaysDate.getMonth() + 1).padStart(2, "0");
let yyyy = todaysDate.getFullYear();

todaysDate = yyyy + "-" + mm + "-" + dd;
console.log(todaysDate);
// Div elements
const today = document.querySelector(".today");
const allDates = document.querySelector(".all-dates");
const rightContainer = document.querySelector(".right");
const formContainer = document.getElementById("form-container");
const ulList = document.getElementById("project-name-left");
const ulListAllDates = document.getElementById("project-name-left-all-dates");

// Card Divs
const right = document.getElementsByClassName(".right");
const cardTitle = document.getElementById("title");
const cardDate = document.getElementById("date");
const cardPriority = document.getElementById("priority");

// Buttons
const submitProjectBtn = document.querySelector("#submit-list");
const addProjectBtn = document.querySelector("#add-project");

// Form values
let title = document.getElementById("title-input");
let date = document.getElementById("form-date");
let priority = document.getElementById("priority-rank");
let submitButton = document.querySelector("#submit-list");

let list = [];

class List {
  constructor(title, date, priority) {
    this.title = title;
    this.date = date;
    this.priority = priority;
  }
}

function createProject(title, date) {
  console.log(todaysDate);
  console.log(date);
  if (todaysDate !== date) {
    let project = document.createElement("li");
    let clickableLink = document.createElement("a");
    clickableLink.innerHTML = title;
    project.appendChild(clickableLink);
    ulListAllDates.appendChild(project);
  } else {
    let project = document.createElement("li");
    let clickableLink = document.createElement("a");
    clickableLink.innerHTML = "Today";
    project.appendChild(clickableLink);
    ulList.appendChild(project);
  }
}

submitButton.addEventListener("click", (e) => {
  let newList = new List(title.value, date.value, priority.value);

  list.push(newList);
  cardTitle.textContent = title.value;
  cardDate.textContent = date.value;
  cardPriority.textContent = `Priority: ${priority.value}`;
  console.log(date.value);
  createProject(title.value, date.value);

  e.preventDefault();
});
