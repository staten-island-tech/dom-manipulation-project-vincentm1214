const DOMSelectors = {
  form: document.querySelector("#form"),
  name: document.querySelector(".name"),
  description: document.querySelector(".descrip"),
  url: document.querySelector(".url"),
  card: document.querySelector("#card"),
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  card();
  clearfields();
  removebutton();
});

function card () {
  let a = DOMSelectors.name.value;
  let b = DOMSelectors.description.value;
  let c = DOMSelectors.url.value;
  DOMSelectors.card.insertAdjacentHTML("beforeend",
  `<div class="foods">
  <h3> name: ${a}</h3>
  <h3> descrip: ${b}</h3>
  <h3> url: ${c}</h3>
  <button class="delete">remove food</button>
  </div>`);
};
// DOMSelectors.card.insertAdjacentHTML(
//       "beforeend",
//       `<div class="display-card">
//       <h2>${foood.name.value}</h2>
//       <h3>${foood.description.value}</h3> 
//       <img class="display-img" src="${foood.url}" alt="">
//       <button class="remove-bn">Remove food</button> </div>`
//       );
//}


function clearfields () {
  DOMSelectors.name.value = "";
  DOMSelectors.description.value = "";
  DOMSelectors.url.value = "";
}


function removebutton () {
  let buttons = document.querySelectorAll(".remove-button");
  buttons.forEach((buttons)=>buttons.addEventListener("click", function (event) {
      buttons.parentElement.remove();
  })
);
}



