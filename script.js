const form = document.querySelector("form");
const allTasks = document.getElementById("allTasks");
const input = document.querySelector("input");


form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const newTask = `
  <div class="task">
        <div class="left">
          <span class="icon icon-star"></span>
        </div>
        <p class="taskName">${input.value}</p>
        <div class="right">
          <span class="icon icon-bin"></span>
          <span class="icon icon-sad"></span>
        </div>
      </div>
  `

allTasks.innerHTML += newTask;
input.value = "";

});
