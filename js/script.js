var formSwitch = document.querySelector(".housing-search-switch");
var form = document.querySelector(".housing-search-form");
var fieldDateArrival = form.querySelector("input[name=date-arrival]");
var fieldDateDeparture = form.querySelector("input[name=date-departure]");

var isStorageSupported = true;
var dateArrival = "";
var dateDeparture = "";

try {
  dateArrival = localStorage.getItem("dateArrival");
  dateDeparture = localStorage.getItem("dateDeparture");
} catch (err) {
  isStorageSupported = false;
}

formSwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("housing-search-form-js-toggle");
  if (!form.classList.contains("housing-search-form-js-toggle")) {
    fieldDateArrival.focus();

    if (dateArrival) {
      fieldDateArrival.value = dateArrival;
    }
    if (dateDeparture) {
      fieldDateDeparture.value = dateDeparture;
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (isStorageSupported) {
    if (fieldDateArrival.value) {
      localStorage.setItem("dateArrival", fieldDateArrival.value);
    }
    if (fieldDateDeparture.value) {
      localStorage.setItem("dateDeparture", fieldDateDeparture.value);
    }
  }
});
