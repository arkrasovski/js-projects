const container = document.querySelector(".container");

async function getLinkToImage() {
  const url =
    "https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17";
  const res = await fetch(url);
  const data = await res.json();
  container.style.cssText = `background-image: url("${data.urls.regular}");`;
  console.log(data.urls.regular);
}
getLinkToImage();

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
    if (this.parentElement.classList.contains("is-active")) {
      document.querySelector(
        ".select"
      ).style.cssText = `border-radius: 5px 5px 0 0;`;
    } else {
      document.querySelector(".select").style.cssText = `border-radius: 5px;`;
    }
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();
