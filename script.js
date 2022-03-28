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

// Change Icons!
const heart = `<span class="icon icon-heart"></span>`;

allTasks.addEventListener("click", (eo) =>{
  eo.preventDefault();

  switch (eo.target.className){
    case "icon icon-star":
      eo.target.classList.add("fullOpacity");
      allTasks.prepend(eo.target.parentElement);
      break;
      case "icon icon-star fullOpacity":
        eo.target.classList.remove("fullOpacity");
        // allTasks.prepend(eo.target.parentElement);
        break;
    case "icon icon-bin":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon icon-sad":
      eo.target.classList.add("icon-heart");
      eo.target.classList.remove("icon-sad");
      eo.target.parentElement.parentElement.querySelector("p").classList.add("checked");
      break;
    case "icon icon-heart":
      eo.target.classList.add("icon-sad");
      eo.target.classList.remove("icon-heart");
      eo.target.parentElement.parentElement.querySelector("p").classList.remove("checked");

      break;
  }

})
