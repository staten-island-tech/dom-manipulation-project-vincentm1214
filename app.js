const form=document.querySelector("#form")
console.log

const DOMSelectors = {
    form:document.querySelector("#form"),
    first:document.querySelector(".full-name"),
    // h2s:document.querySelectorAll("h2"),
    question:document.querySelector(".question"),
    link:document.querySelector(".link")
    //select the textbox
    //select ALL the h2s in one property

};

DOMSelectors.form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value
    );
    Document
    .querySelector(".container")
    .insertAdjacentHTML()
});

