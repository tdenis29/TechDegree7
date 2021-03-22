// Alert 

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }});

// Get the modal
let modal = document.getElementById("myModal");

let bell = document.getElementById("bell-icon");

var span = document.getElementsByClassName("close")[0];

bell.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}
// Messager 
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to: ${user.value}`);
  }
  });

  // Autocomplete 

  let arr = ["Victoria Chambers", "Harry Potter", "Dan Oliver", "Dawn Wood","Dale Byrd", "Albus Dumbledore", "Elendil"]
  let inp = document.getElementById("userField")
  function autoComplete(inp, arr){
    var currentFocus; 
  }

  inp.addEventListener("input", function(e){
    var a, b, i, val = this.value;
    closeAllLists();
    if(!val) {
      return false;
    }
    currentFocus = -1;

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++){
      if (arr[i].substr(0, val.length).toUpperCase()== val.toUpperCase()){
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0,val.length) + "<strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener('click',function (e){
          inp.value = this.getElementsByTagName("input")[1].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

// FIX THIS

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });

  
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});



// Local Storage 

const localStorage = window.localStorage;
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const timeZoneList = document.getElementById('timeZone');
let checkbox1 = document.getElementById('emailToggle');
let checkbox2 = document.getElementById('privateMode');
let currentArea = document.getElementById('timeZone'); 
// on save click get DOM elements then SET value of checkboxes and select menu.

save.addEventListener('click', () => {
  if(checkbox1.checked) {
    localStorage.setItem('checkbox1', "true");
    console.log(checkbox1); 
  } else {
    localStorage.setItem('checkbox1', 'false')
  }
  
  if( checkbox2.checked) {
    localStorage.setItem('checkbox2', "true"); 
    console.log(checkbox2)
  }  else {
    localStorage.setItem('checkbox2', 'false')
  }
localStorage.setItem('localization', currentArea.value);
});

function load() {
  if (localStorage.getItem('checkbox1') === "true") {
    checkbox1.checked = true;
  }
  if (localStorage.getItem('checkbox2') === "true") {
    checkbox2.checked = true;
  }
  if ( localStorage.getItem('localization')) {
    timeZoneList.value = localStorage.getItem('localization'); 
  }
 
}
load();
// clear settings on cancel click
cancel.addEventListener('click', () => {
  localStorage.clear();
})










// emailToggle.addEventListener('checked', () => {
// getVal();
// })

// privateMode.addEventListener('checked', () => {
//   getVal();
// })

// function getVal() {
//     checkedOne = JSON.parse(localStorage.getItem(""));
//     document.getElementById("emailToggle").checked = checkedOne;
//     checkedTwo = JSON.parse(localStorage.getItem(""));
//     document.getElementById("privateMode").checked = checkedTwo;
// }

// function save() {	
//   if(checkedOne === 'checked'){
//     localStorage.setItem("emailToggle", checkbox.checked);
// }
// if(privateMode === 'checked'){
//     localStorage.setItem("privateMode", checkbox.checked);
// }
//     localStorage.setItem('localization', currentArea);     
// }
// function clearSave() {
// localStorage.clear();
// }

// function loadSettings() {
// if ( localStorage.getItem('localization')) {
//   timeZoneList.value = localStorage.getItem('localization'); 
// }
// }
// const timeZoneList = document.getElementById('timeZone');

// timeZoneList.addEventListener('change', (event) => {
//    currentArea = event.target.value;
// });


