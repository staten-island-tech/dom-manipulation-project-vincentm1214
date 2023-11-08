const DOMSelectors = {
    submitForm: document.querySelector("form"),
    text: document.querySelector("#text"),
    box: document.getElementById("food"),
    input: document.querySelector(`text`),
    displaySection: document.getElementById("display"),
    Food: document.getElementById("title"),
    Description: document.getElementById("des"),
    URL: document.getElementById("url"),
  };
  
  
  
  
  function card(Food, Description, URL) {
    DOMSelectors.displaySection.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card">
      <h2 class="display-food">${Food}</h2>
      <h3 class="display-desc">${Description}</h3>
        <img class="display-img"
          src="${URL}"
        />
        <br>
        <button class="remove-btn">Remove Album</button>
        </br>
      </div>`
    );
  }
  
  
  function clear() {
    DOMSelectors.Food.value = "";
    DOMSelectors.Description.value = "";
    DOMSelectors.URL.value = "";
  }
  
  
  DOMSelectors.submitForm.addEventListener("submit", function (event) {
    let Food = DOMSelectors.Food.value;
    let Description = DOMSelectors.Description.value;
    let URL = DOMSelectors.URL.value;
    card(Food, Description, URL);
    event.preventDefault();
    clearfields();
  
  
  let removebtn = document.querySelectorAll(".remove-btn");
  
  
    removebtn.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.target.parentElement.remove();
      });
    });
  });
  