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


  /** Checkbox */
  const svgMarkup = `
<svg class="w-[15px] h-[12px] absolute top-[6px] left-[5px]" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0.75L3.49997 6L0.75 3.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  let span_svg = document.createElement("span")
  span_svg.classList.add("hidden")
  span_svg.innerHTML += svgMarkup
  let label = document.createElement("label")
  label.classList.add("relative")
 

  let check = document.createElement("input")
  check.type = "checkbox"
  check.classList.add("check")
  
  
  label.addEventListener("change", () => {
    span_svg.classList.toggle("hidden")
    span.classList.toggle("line-through")
    span.classList.toggle("text-gray-500")
  })

  const btn_remove =  document.createElement("button")
  const img_remove =  document.createElement("img")
  img_remove.src = "assets/cancel_40dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg"
  btn_remove.appendChild(img_remove);
  btn_remove.classList.add("delete")

  btn_remove.addEventListener("click", () => {
    li_list.remove()
  })
   label.appendChild(span_svg)
  label.appendChild(check)
  li_list.appendChild(label)
  li_list.appendChild(span)
  li_list.appendChild(btn_remove)


  ul_todo.appendChild(li_list)

  input.value = " "

})