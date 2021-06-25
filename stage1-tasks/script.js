const prev = document.querySelector(".slider-btn--prev");
const next = document.querySelector(".slider-btn--next");
const videoBoxes = document.querySelectorAll(
  ".slider .slider-wrapper .slider-slide"
);
const sliderLine = document.querySelector(".slider .slider-wrapper");

let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * videoBoxes.length + "px";
  videoBoxes.forEach((item) => {
    item.style.width = width + "px";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

next.addEventListener("click", function () {
  count++;
  if (count >= videoBoxes.length) {
    count = 0;
  }
  rollSlider();
});
prev.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = videoBoxes.length - 1;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

//музычка
const musicBtns = document.querySelectorAll(".audio-toggle");
const volumeControllers = document.querySelectorAll(".playlist-item input");

let isPlayed = false;
musicBtns.forEach((btn) => {
  btn.addEventListener("click", playMusic);
});

function playMusic(e) {
  const music = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`
  );
  if (!music) {
    return;
  }

  if (!isPlayed) {
    music.play();
    isPlayed = true;
  } else {
    music.pause();
    isPlayed = false;
  }
}

volumeControllers.forEach((volumeController) => {
  volumeController.value = 50;
  volumeController.volume = 0.5;
  volumeController.addEventListener("input", (e) => {
    const music = document.querySelector(
      `audio[data-key="${e.target.dataset.key}"]`
    );
    music.volume = volumeController.value / 100;
  });
});

function changeVolume(e) {
  const music = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`
  );
  music.volume = volumeController.value;
  //   if (videoEl.volume == 0)
  //     document.getElementById("volume_stop").src =
  //       "images/icons8-no-audio-50.png";
  //   else
  //     document.getElementById("volume_stop").src = "images/icons8-voice-50.png";
}
const city = document.querySelector(".weather-form input");

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".weather-temperature");
const weatherDescription = document.querySelector(".weather-appearance");

async function getWeather(location = "Минск") {
  console.log(location);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&appid=908cbce7632f9448c8d3793a333a9085&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  return false;
}

function setCity(event) {
  if (event.code === "Enter") {
    getWeather(city.value);
    localStorage.setItem("cityName", city.value);
    event.preventDefault();
  }
}
document.addEventListener("DOMContentLoaded", getWeather());
city.addEventListener("keypress", setCity);

// window.addEventListener("beforeunload", () => {
//   localStorage.setItem("cityName", city.value);
// });
// window.addEventListener("beforeunload", () => {
//   if (localStorage.getItem("cityName")) {
//     const city1 = localStorage.getItem("cityName");
//     console.log(city1);
//     getWeather(city1);
//   }
// });
window.onload = function () {
  if (localStorage.getItem("cityName")) {
    const city1 = localStorage.getItem("cityName");
    console.log(city1);
    getWeather(city1);
  }
};
