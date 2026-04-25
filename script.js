const now = new Date();

const day = now.toLocaleDateString('fr-FR', { weekday: 'long' });
const date = now.getDate();
const month = now.toLocaleDateString('fr-FR', { month: 'long' });

const spansDate = document.getElementById("Date_Container")

//Day
const span_day = document.createElement("span")
span_day.textContent = day
//Date
const span_date = document.createElement("span")
span_date.textContent = date
//month
const span_month = document.createElement("span")
span_month.textContent = month

spansDate.appendChild(span_day)
spansDate.appendChild(span_date)
spansDate.appendChild(span_month)





const ul_todo = document.getElementById("list_todo")
let input = document.querySelector("input")
const btn_add = document.getElementById("add_todo")

btn_add.addEventListener("click", () => {

  let tache = input.value

  const li_list = document.createElement("li")
  li_list.classList.add("li-list")

  const span = document.createElement("span")
  span.textContent = tache

  const btn_remove =  document.createElement("button")
  const img_remove =  document.createElement("img")
  img_remove.src = "assets/cancel_40dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg"
  btn_remove.appendChild(img_remove);
  btn_remove.classList.add("delete")

  btn_remove.addEventListener("click", () => {
    li_list.remove()
  })

  li_list.appendChild(span)
  li_list.appendChild(btn_remove)


  ul_todo.appendChild(li_list)

  input.value = " "

})