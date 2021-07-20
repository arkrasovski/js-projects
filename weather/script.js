const container = document.querySelector(".container");
const ChangeBackground = document.querySelector(
  ".left_btns button:first-child"
);
let turn = 1;
const retr = document.querySelector(".icon-loop2");
async function getLinkToImage() {
  rotateLoop();
  const url =
    "https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17";
  const res = await fetch(url);
  const data = await res.json();
  container.style.cssText = `background-image: url("${data.urls.regular}");`;
}
getLinkToImage();

function rotateLoop() {
  retr.style.cssText = `transform: rotate(${turn}turn);`;
  turn += 1;
}

ChangeBackground.addEventListener("click", getLinkToImage);

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
    document.querySelector(".select").style.cssText = `border-radius: 5px;`;
  }
};

select();

const latitude = document.querySelector(".latit");
const longitude = document.querySelector(".longt");
const location1 = document.querySelector(".location");
const datePanel = document.querySelector(".date");
const nextSlides = document.querySelectorAll(".next .weekday");
const nextDegs = document.querySelectorAll(".next .weekdeg");
const todayDeg = document.querySelector(".today .degrees");
const infoSpans = document.querySelectorAll(".info span");
const farenBtn = document.querySelector(".faren");
const celsBtn = document.querySelector(".cels");
const input = document.querySelector('input[type="text"]');
const submit = document.querySelector('button[type="submit"]');

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
}

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

let cityLocation;

function GetGeo() {
  const country = {
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    WF: "Wallis and Futuna",
    BL: "Saint Barthelemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BT: "Bhutan",
    JM: "Jamaica",
    BV: "Bouvet Island",
    BW: "Botswana",
    WS: "Samoa",
    BQ: "Bonaire, Saint Eustatius and Saba ",
    BR: "Brazil",
    BS: "Bahamas",
    JE: "Jersey",
    BY: "Belarus",
    BZ: "Belize",
    RU: "Russia",
    RW: "Rwanda",
    RS: "Serbia",
    TL: "East Timor",
    RE: "Reunion",
    TM: "Turkmenistan",
    TJ: "Tajikistan",
    RO: "Romania",
    TK: "Tokelau",
    GW: "Guinea-Bissau",
    GU: "Guam",
    GT: "Guatemala",
    GS: "South Georgia and the South Sandwich Islands",
    GR: "Greece",
    GQ: "Equatorial Guinea",
    GP: "Guadeloupe",
    JP: "Japan",
    GY: "Guyana",
    GG: "Guernsey",
    GF: "French Guiana",
    GE: "Georgia",
    GD: "Grenada",
    GB: "United Kingdom",
    GA: "Gabon",
    SV: "El Salvador",
    GN: "Guinea",
    GM: "Gambia",
    GL: "Greenland",
    GI: "Gibraltar",
    GH: "Ghana",
    OM: "Oman",
    TN: "Tunisia",
    JO: "Jordan",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    HK: "Hong Kong",
    HN: "Honduras",
    HM: "Heard Island and McDonald Islands",
    VE: "Venezuela",
    PR: "Puerto Rico",
    PS: "Palestinian Territory",
    PW: "Palau",
    PT: "Portugal",
    SJ: "Svalbard and Jan Mayen",
    PY: "Paraguay",
    IQ: "Iraq",
    PA: "Panama",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PE: "Peru",
    PK: "Pakistan",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    ZM: "Zambia",
    EH: "Western Sahara",
    EE: "Estonia",
    EG: "Egypt",
    ZA: "South Africa",
    EC: "Ecuador",
    IT: "Italy",
    VN: "Vietnam",
    SB: "Solomon Islands",
    ET: "Ethiopia",
    SO: "Somalia",
    ZW: "Zimbabwe",
    SA: "Saudi Arabia",
    ES: "Spain",
    ER: "Eritrea",
    ME: "Montenegro",
    MD: "Moldova",
    MG: "Madagascar",
    MF: "Saint Martin",
    MA: "Morocco",
    MC: "Monaco",
    UZ: "Uzbekistan",
    MM: "Myanmar",
    ML: "Mali",
    MO: "Macao",
    MN: "Mongolia",
    MH: "Marshall Islands",
    MK: "Macedonia",
    MU: "Mauritius",
    MT: "Malta",
    MW: "Malawi",
    MV: "Maldives",
    MQ: "Martinique",
    MP: "Northern Mariana Islands",
    MS: "Montserrat",
    MR: "Mauritania",
    IM: "Isle of Man",
    UG: "Uganda",
    TZ: "Tanzania",
    MY: "Malaysia",
    MX: "Mexico",
    IL: "Israel",
    FR: "France",
    IO: "British Indian Ocean Territory",
    SH: "Saint Helena",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NA: "Namibia",
    VU: "Vanuatu",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NZ: "New Zealand",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    CK: "Cook Islands",
    XK: "Kosovo",
    CI: "Ivory Coast",
    CH: "Switzerland",
    CO: "Colombia",
    CN: "China",
    CM: "Cameroon",
    CL: "Chile",
    CC: "Cocos Islands",
    CA: "Canada",
    CG: "Republic of the Congo",
    CF: "Central African Republic",
    CD: "Democratic Republic of the Congo",
    CZ: "Czech Republic",
    CY: "Cyprus",
    CX: "Christmas Island",
    CR: "Costa Rica",
    CW: "Curacao",
    CV: "Cape Verde",
    CU: "Cuba",
    SZ: "Swaziland",
    SY: "Syria",
    SX: "Sint Maarten",
    KG: "Kyrgyzstan",
    KE: "Kenya",
    SS: "South Sudan",
    SR: "Suriname",
    KI: "Kiribati",
    KH: "Cambodia",
    KN: "Saint Kitts and Nevis",
    KM: "Comoros",
    ST: "Sao Tome and Principe",
    SK: "Slovakia",
    KR: "South Korea",
    SI: "Slovenia",
    KP: "North Korea",
    KW: "Kuwait",
    SN: "Senegal",
    SM: "San Marino",
    SL: "Sierra Leone",
    SC: "Seychelles",
    KZ: "Kazakhstan",
    KY: "Cayman Islands",
    SG: "Singapore",
    SE: "Sweden",
    SD: "Sudan",
    DO: "Dominican Republic",
    DM: "Dominica",
    DJ: "Djibouti",
    DK: "Denmark",
    VG: "British Virgin Islands",
    DE: "Germany",
    YE: "Yemen",
    DZ: "Algeria",
    US: "United States",
    UY: "Uruguay",
    YT: "Mayotte",
    UM: "United States Minor Outlying Islands",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LA: "Laos",
    TV: "Tuvalu",
    TW: "Taiwan",
    TT: "Trinidad and Tobago",
    TR: "Turkey",
    LK: "Sri Lanka",
    LI: "Liechtenstein",
    LV: "Latvia",
    TO: "Tonga",
    LT: "Lithuania",
    LU: "Luxembourg",
    LR: "Liberia",
    LS: "Lesotho",
    TH: "Thailand",
    TF: "French Southern Territories",
    TG: "Togo",
    TD: "Chad",
    TC: "Turks and Caicos Islands",
    LY: "Libya",
    VA: "Vatican",
    VC: "Saint Vincent and the Grenadines",
    AE: "United Arab Emirates",
    AD: "Andorra",
    AG: "Antigua and Barbuda",
    AF: "Afghanistan",
    AI: "Anguilla",
    VI: "U.S. Virgin Islands",
    IS: "Iceland",
    IR: "Iran",
    AM: "Armenia",
    AL: "Albania",
    AO: "Angola",
    AQ: "Antarctica",
    AS: "American Samoa",
    AR: "Argentina",
    AU: "Australia",
    AT: "Austria",
    AW: "Aruba",
    IN: "India",
    AX: "Aland Islands",
    AZ: "Azerbaijan",
    IE: "Ireland",
    ID: "Indonesia",
    UA: "Ukraine",
    QA: "Qatar",
    MZ: "Mozambique",
  };
  fetch("https://ipinfo.io/json?token=441aae3002c36f")
    .then((response) => response.json())
    .then((jsonResponse) => {
      const longLat = jsonResponse.loc.split(",");
      if (!localStorage.getItem("cityName")) {
        latitude.innerHTML = `Latitude: ${
          (longLat[0] * 100) % 10 === 0
            ? Math.floor(longLat[0] * 100) / 100 + "0"
            : Math.floor(longLat[0] * 100) / 100
        }`;
        longitude.innerHTML = `Longitude: ${
          (longLat[1] * 100) % 10 === 0
            ? Math.floor(longLat[1] * 100) / 100 + "0"
            : Math.floor(longLat[1] * 100) / 100
        }`;
      }

      if (localStorage.getItem("cityName")) {
        location1.innerHTML = getCoords(localStorage.getItem("cityName"));
      } else {
        location1.innerHTML = `${jsonResponse.city}, ${
          country[jsonResponse.country]
        }`;
      }

      if (localStorage.getItem("cityName")) {
        getWeather(localStorage.getItem("cityName"));
        setInterval(() => {
          getWeather(localStorage.getItem("cityName"));
        }, 10800000);
      } else {
        getWeather(jsonResponse.city);
        setInterval(() => {
          getWeather(jsonResponse.city);
        }, 10800000);
      }
      createMap(longLat[1], longLat[0]);
      cityLocation = jsonResponse.city;
    });
}
GetGeo();

function createMap(lat, long) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJrcmFzb3Zza2kiLCJhIjoiY2tyODNrZzM2MDh3cTJ6cDg2a3IxZ3AwYyJ9.j7vqD2BeSEBEH7J7NMRwVA";
  var map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [lat, long], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
}

function getTime(timezone) {
  let date = new Date(
    new Date().toLocaleString("en-US", { timeZone: timezone })
  );
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDate();

  let month = date.getMonth();
  let weekday = date.getDay();

  weekday = chooseWeekDay(weekday);
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  datePanel.innerHTML = `${weekday} ${day} ${month} ${
    (hours < 10 ? "0" : "") + hours
  }:${(minutes < 10 ? "0" : "") + minutes}:${
    (seconds < 10 ? "0" : "") + seconds
  }`;
  weekday = date.getDay();
  if (weekday <= 7) {
    weekday++;
  } else {
    weekday = 1;
  }

  nextSlides.forEach((next) => {
    if (weekday <= 7) {
      next.innerHTML = `${chooseWeekDay(weekday++)}`;
    } else {
      weekday = 1;
      next.innerHTML = `${chooseWeekDay(weekday++)}`;
    }
  });
}

let timerId = setInterval(getTime, 1000);

function chooseWeekDay(weekday) {
  switch (weekday) {
    case 1:
      weekday = "Mon";
      break;
    case 2:
      weekday = "Tue";
      break;
    case 3:
      weekday = "Wen";
      break;
    case 4:
      weekday = "Thu";
      break;
    case 5:
      weekday = "Fri";
      break;
    case 6:
      weekday = "Sat";

      break;
    case 0:
      weekday = "Sun";
      break;
  }
  return weekday;
}

const icons = {
  Clouds: `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style="enable-background:new 0 0 60.7 40;" xml:space="preserve">
    <g id="Cloud_1">
      <g id="White_cloud_1">
        <path id="XMLID_2_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
        <circle id="XMLID_3_" class="white" cx="17.4" cy="22.8" r="9.3"/>
        <circle id="XMLID_4_" class="white" cx="34.5" cy="21.1" r="15.6"/>
        <animateTransform attributeName="transform"
          attributeType="XML"
          dur="6s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="translate"
          values="0;5;0"
          calcMode="linear">
        </animateTransform>
      </g>
      <g id="Gray_cloud_1">
        <path id="XMLID_6_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
        <circle id="XMLID_7_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
        <animateTransform attributeName="transform"
          attributeType="XML"
          dur="6s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="translate"
          values="0;-3;0"
          calcMode="linear">
        </animateTransform>
      </g>
    </g>
  </svg>

`,
  Rain: `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 60" style="enable-background:new 0 0 55.1 49.5;" xml:space="preserve">
  <g id="Cloud_2">
    <g id="Rain_2">
      <path id="rain_2_left" class="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"></path>
      <path id="rain_2_mid" class="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"></path>
      <path id="rain_2_right" class="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"></path>
      <animateTransform attributeName="transform"
        attributeType="XML"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="translate"
        values="0 0;0 10"
        calcMode="linear">
      </animateTransform>
      <animate attributeType="CSS"
      attributeName="opacity"
      attributeType="XML"
      dur="1s"
      keyTimes="0;1"
      repeatCount="indefinite"
      values="1;0"
      calcMode="linear"/>
    </g>
    <g id="White_cloud_2">
      <path id="XMLID_14_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
      <circle id="XMLID_13_" class="white" cx="17.4" cy="17.3" r="9.3"/>
      <circle id="XMLID_10_" class="white" cx="34.5" cy="15.6" r="15.6"/>
    </g>
  </g>
</svg>
`,
  Clear: `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44.9 44.9" style="enable-background:new 0 0 44.9 44.9;" xml:space="preserve" height="50%" width="100%">
  <g id="Sun">
    <circle id="XMLID_61_" class="yellow" cx="22.4" cy="22.6" r="11"/>
    <g>
      <path id="XMLID_60_" class="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z"/>
      <path id="XMLID_59_" class="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z"/>
      <path id="XMLID_58_" class="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z"/>
      <path id="XMLID_57_" class="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z"/>
      <path id="XMLID_56_" class="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z"/>
      <path id="XMLID_55_" class="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z"/>
      <path id="XMLID_54_" class="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z"/>
      <path id="XMLID_53_" class="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z"/>
      <animate attributeType="CSS"
        attributeName="opacity"
        attributeType="XML"
        dur="0.5s"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="1;0.6;1"
        calcMode="linear"/>
    </g>
  </g>
</svg>
`,
  Snow: ` 
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 52.5" style="enable-background:new 0 0 55.1 52.5;" xml:space="preserve">
  <g id="Cloud_7">
    <g id="White_cloud_7">
      <path id="XMLID_8_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
      <circle id="XMLID_5_" class="white" cx="17.4" cy="17.3" r="9.3"/>
      <circle id="XMLID_1_" class="white" cx="34.5" cy="15.6" r="15.6"/>
    </g>
    <circle class="white" cx="37" cy="43.5" r="3">
      <animateTransform attributeName="transform"
        attributeType="XML"
        dur="1.5s"
        keyTimes="0;0.33;0.66;1"
        repeatCount="indefinite"
        type="translate"
        values="1 -2;3 2; 1 4; 2 6"
        calcMode="linear">
      </animateTransform>
    </circle>
    <circle class="white" cx="27" cy="43.5" r="3">
      <animateTransform attributeName="transform"
        attributeType="XML"
        dur="1.5s"
        keyTimes="0;0.33;0.66;1"
        repeatCount="indefinite"
        type="translate"
        values="1 -2;3 2; 1 4; 2 6"
        calcMode="linear">
      </animateTransform>
    </circle>
    <circle class="white" cx="17" cy="43.5" r="3">
      <animateTransform attributeName="transform"
        attributeType="XML"
        dur="1.5s"
        keyTimes="0;0.33;0.66;1"
        repeatCount="indefinite"
        type="translate"
        values="1 -2;3 2; 1 4; 2 6"
        calcMode="linear">
      </animateTransform>
    </circle>
  </g>
</svg>
`,
};

async function getWeather(location = cityLocation) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=ua&units=metric&APPID=2849a388050fed5faf7c5e021a44c7c2`;
  const res = await fetch(url);
  const data = await res.json();
  if (localStorage.getItem("Fareng")) {
    todayDeg.innerHTML = `${Math.round(
      (data.list[0].main.temp * 9) / 5 + 32
    )}&deg`;
    farenBtn.classList.add("deg-active");
  } else {
    todayDeg.innerHTML = `${Math.round(data.list[0].main.temp)}&deg`;
    celsBtn.classList.add("deg-active");
    farenBtn.classList.remove("deg-active");
  }
  infoSpans.forEach((infospan, index) => {
    switch (index) {
      case 0:
        infospan.innerHTML = `overcast feels like: ${Math.round(
          data.list[0].main.feels_like
        )}&deg`;
        break;
      case 1:
        infospan.innerHTML = `wind: ${data.list[0].wind.speed} m/s`;
        break;
      case 2:
        infospan.innerHTML = `humidity: ${data.list[0].main.humidity}%`;
        break;
    }
  });
  nextDegs.forEach((next, index) => {
    if (localStorage.getItem("Fareng")) {
      next.innerHTML = `${Math.round(
        (data.list[++index].main.temp * 9) / 5 + 32
      )}&deg`;
    } else {
      next.innerHTML = `${Math.round(data.list[++index].main.temp)}&deg`;
    }
  });

  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    element.remove();
  });

  let element;

  switch (data.list[0].weather[0].main) {
    case "Clouds":
      createIcon(element, "Clouds", todayDeg);
      break;
    case "Rain":
      createIcon(element, "Rain", todayDeg);
      break;
    case "Clear":
      createIcon(element, "Clear", todayDeg);
      break;
    case "Snow":
      createIcon(element, "Snow", todayDeg);
      break;
  }

  nextDegs.forEach((next, index) => {
    switch (data.list[++index].weather[0].main) {
      case "Clouds":
        createIcon(element, "Clouds", next);

        break;
      case "Rain":
        createIcon(element, "Rain", next);
        break;
      case "Clear":
        createIcon(element, "Clear", next);
        break;
      case "Snow":
        createIcon(element, "Snow", next);
        break;
    }
  });

  return false;
}
function createIcon(element, name, parent) {
  element = document.createElement("div");
  element.classList.add("element");
  element.innerHTML = icons[name];
  parent.parentElement.append(element);
}

farenBtn.addEventListener("click", () => {
  if (!localStorage.getItem("Fareng")) {
    farenBtn.classList.toggle("deg-active");
    celsBtn.classList.toggle("deg-active");
  }

  changeMeasure(true);
});

celsBtn.addEventListener("click", () => {
  if (localStorage.getItem("Fareng")) {
    farenBtn.classList.toggle("deg-active");
    celsBtn.classList.toggle("deg-active");
  }
  changeMeasure(false);
});

function changeMeasure(faren) {
  if (faren) {
    localStorage.setItem("Fareng", true);
  } else {
    localStorage.removeItem("Fareng");
  }
  if (localStorage.getItem("cityName")) {
    getWeather(localStorage.getItem("cityName"));
  } else {
    getWeather();
  }
}

input.addEventListener("keypress", setCity);
submit.addEventListener("click", () => {
  if (input.value != "" && input.value.replace(/\s/g, "") != "") {
    getWeather(input.value);
    localStorage.setItem("cityName", input.value);
    event.preventDefault();
    getCoords(input.value);
    input.value = "";
  }
});

function setCity(event) {
  if (
    event.code === "Enter" &&
    input.value != "" &&
    input.value.replace(/\s/g, "") != ""
  ) {
    getWeather(input.value);
    localStorage.setItem("cityName", input.value);
    event.preventDefault();
    getCoords(input.value);
    input.value = "";
  }
}

let lat, lng;

function getCoords(location) {
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=cd613ca476f1423fa56396aa71db145c&pretty=1&no_annotations=1`
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      location1.innerHTML = jsonResponse.results[0].formatted;
      lat = jsonResponse.results[0].geometry.lat;
      latitude.innerHTML = `Latitude: ${
        (jsonResponse.results[0].geometry.lat * 100) % 10 === 0
          ? Math.floor(jsonResponse.results[0].geometry.lat * 100) / 100 + "0"
          : Math.floor(jsonResponse.results[0].geometry.lat * 100) / 100
      }`;
      lng = jsonResponse.results[0].geometry.lng;
      longitude.innerHTML = `Longitude: ${
        (jsonResponse.results[0].geometry.lng * 100) % 10 === 0
          ? Math.floor(jsonResponse.results[0].geometry.lng * 100) / 100 + "0"
          : Math.floor(jsonResponse.results[0].geometry.lng * 100) / 100
      }`;
      console.log(jsonResponse);
      createMap(lng, lat);
      getTimeZone(lat, lng);
    });
}

function getTimeZone(lat, lng) {
  fetch(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=DEX7IOQHW1M2&format=json&by=position&lat=${lat}&lng=${lng}`
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      getTime(jsonResponse.zoneName);
      clearInterval(timerId);
      timerId = setInterval(() => {
        getTime(jsonResponse.zoneName);
      }, 1000);
    });
}
