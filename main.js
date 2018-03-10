var list = document.querySelector("ul");
var buttonAdd = document.querySelector("button");
var submitButton = document.createElement("button");
buttonAdd.addEventListener("click", function () {
    var input = document.createElement("input");
    var inputValue = input.value;
    submitButton.classList.add("sub")
    submitButton.textContent = "Dodaj";
    document.body.appendChild(input);
    document.body.removeChild(buttonAdd);
    document.body.appendChild(submitButton);

})
submitButton.addEventListener("click", function () {
    var inputValue = document.querySelector("input").value
    var newItem = "<a href='#'>" + inputValue + "</a>"
    var newLi = document.createElement("li");
    list.appendChild(newLi);
    newLi.innerHTML = newItem;
    var li = document.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
            list.removeChild(this);

        })
    }


})
