let inputText = document.querySelector(".inputText");
let button = document.querySelector('#translate');
let output = document.querySelector(".translatedText");
const url = "https://api.funtranslations.com/translate/dothraki.json";

const translate =()=>{
  console.log(inputText.value)

  fetch(`${url}?text=${inputText.value}`)
    .then((responce) => responce.json())
    .then((data) => {output.innerHTML = data.contents.translated})
    .catch(err=>console.log(err.message))

}
button.addEventListener('click', translate)