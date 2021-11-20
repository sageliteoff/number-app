let button = document.getElementById("searchbtn");
let searchBox = document.getElementById("searchbox");
let result = document.getElementById("result");
let num = document.getElementById("num");

button.addEventListener("click", function (e) {
  fetch(`http://numbersapi.com/${searchBox.value}?json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      num.innerText = data.number;
      result.innerText = data.text;
    });
});
