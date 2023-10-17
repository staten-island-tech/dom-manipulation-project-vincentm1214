const DOMSelectors = {
    form:document.querySelector("#form"),
    first:document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"),
    last:document.querySelector(".last-name"),
    //select the textbox
    //select ALL the h2s in one property
    b
};

DOMSelectors.form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value
    );
});