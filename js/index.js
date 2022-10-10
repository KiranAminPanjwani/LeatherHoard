// required document elements
let searchBtn = document.querySelector("#search-button");
let searchModal = document.querySelector("#searchModal");
let searchBox = document.querySelector(".searchBox");
let searchInput = searchBox.querySelector("#searchInput");
let suggBox = searchBox.querySelector(".suggestionBox");

// open search box on click
let seachClickCounter = 2;
searchBtn.onclick = () => {
  searchInput.setAttribute(
    "placeholder",
    `Recent : ${getData("recentSearch")}`
  );
  if (seachClickCounter % 2 == 0) {
    searchBox.classList.add("searchBox-active");
  } else {
    searchBox.classList.remove("searchBox-active");
  }
  seachClickCounter++;
};

//ge typed data in the search input
searchInput.onkeyup = (e) => {
  let searchKey = e.target.value;
  // / if search key is present
  if (searchKey.length) {
    let arr = [];
    // put search value into array and make it lowercase
    arr = suggestions.filter((data) => {
      // convert everything to lower case
      let lowerSearchKey = searchKey.toLocaleLowerCase();
      let loweCaseData = data.toLocaleLowerCase();
      // only pass value which mach the search key
      let suggPresent = loweCaseData.startsWith(lowerSearchKey);
      return suggPresent;
    });
    // wrap data with li tags
    arr = arr.map((toConvertData) => {
      return `<li>${toConvertData}</li>`;
    });
    // show data on suggestion box
    showSuggestions(arr);
    suggBox.classList.add("suggestionBox-active");

    //sectict data from suggestion box to input
    let allDynamicList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allDynamicList.length; i++) {
      allDynamicList[i].setAttribute("onclick", "select(this)");
    }
  }
  // / else search key is empty
  else {
    suggBox.classList.remove("suggestionBox-active");
  }
};

// function to select the suggestion to input
function select(ele) {
  let selection = ele.textContent;
  saveData(selection);
  //........... what will the selection do (imp: have to update after every changeing searchSuggestion)..........
  switch (selection) {
    // thses urls are taken with respect to the index page
    case "Leather Bag - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Leather Bagpack - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Leather Cap - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Leather Purse - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Products Page": {
      window.location.href = "./html/products.html";
      break;
    }
    case "About Page": {
      window.location.href = "#about";
      break;
    }
    case "Contributors": {
      window.location.href = "#about";
      break;
    }
    case "Testimonials": {
      window.location.href = "";
      break;
    }
    case "Customer Review": {
      window.location.href = "";
      break;
    }
    case "Contact Us": {
      window.location.href = "#ContactUs";
      break;
    }
    case "How to contact for issue": {
      window.location.href = "#ContactUs";
      break;
    }
    case "How to repote a issue": {
      window.location.href = "#ContactUs";
      break;
    }
    case "Cap - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Bagpack - Product": {
      window.location.href = "./html/products.html";
      break;
    }
    case "Purse - Procduct": {
      window.location.href = "./html/products.html";
      break;
    }
  }
  suggBox.classList.remove("suggestionBox-active");
}

//function to show the suggestion data
function showSuggestions(arr) {
  let arrData;
  if (!arr.length) {
    let inputValue = searchInput.value;
    arrData = "<li>" + inputValue + " - not found 🙁</li>";
  } else {
    //join the arry
    arrData = arr.join("");
  }
  // pass arr to suggestion box
  suggBox.innerHTML = arrData;
}
function saveData(data) {
  localStorage.setItem("recentSearch", `${data}`);
}
function getData() {
  return localStorage.getItem("recentSearch");
}

// scroll feature in javascript




let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}