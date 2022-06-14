document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("new-task-description");
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit" ,(e) =>{
    e.preventDefault()
    submitForm(input.value)
    //console.log(input.value)
  })
});

const submitForm = (value) =>{
  const li = document.createElement("li");
  const ul = document.getElementById("tasks");
  //li.textContent = value;
  const p = document.createElement("p");
  const btn = document.createElement("button");
  p.textContent = `${value}  `;
  btn.textContent = " X ";
  btn.style.color = "red";
  p.appendChild(btn);
  li.appendChild(p)
  ul.appendChild(li);
  btn.addEventListener("click", () => btn.parentNode.parentNode.remove())

}