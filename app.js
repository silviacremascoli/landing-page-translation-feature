const languageSelect = document.querySelector("#language-select");
const translatedText = document.querySelector("#translated-text");
const wordInput = document.querySelector("#search-input");
const search = document.querySelector(".translate-btn");

wordInput.addEventListener("change", (event) => {
  let input = event.target.value;
  if (!input) {
    translatedText = "";
  } else {
    return input;
  }
});

languageSelect.addEventListener("change", (event) => {
  if (event && event.target.value.length < 12) {
    const language = event.target.value;
    return language;
  }
});

search.addEventListener("click", (event) => {
  event.preventDefault();
  let text = wordInput.value,
    translateTo = languageSelect.value;
  if (!text) return;
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${translateTo}`;
  axios
    .get(apiUrl)
    .then((response) => {
      translatedText.innerHTML = response.data.responseData.translatedText;
    })
    .catch((error) => console.log(error.toJSON()));
});

AOS.init({ duration: 1500 });
