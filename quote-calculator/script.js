let houseContainer = document.querySelectorAll(".house-container");

let input = document.querySelectorAll("input[type='radio']");

let roofContainer = document.querySelectorAll(".roof-container");

let floorNumber = document.querySelectorAll(".floor-number");

let addressInput = document.querySelector(".address-input");

let startBar = document.querySelector(".bar.start");
let midBar = document.querySelector(".bar.middle");
let finishBar = document.querySelector(".bar.finish");

let backArrow = document.getElementById("back-arrow");

houseContainer.forEach((house) => {
  house.addEventListener("click", () => {
    houseContainer.forEach((otherHouse) => {
      if (otherHouse !== house && otherHouse.classList.contains("active")) {
        otherHouse.classList.remove("active");
      }
    });
    house.classList.toggle("active");
    house.firstElementChild.firstElementChild.checked = "true";

    roofContainer.forEach((roof) => {
      roof.addEventListener("click", () => {
        roofContainer.forEach((roof) => {
          roof.style.display = "none";
          floorNumber.forEach((floor) => {
            floor.style.display = "block";
            midBar.style.display = "block";

            header.innerHTML = `<span>How many floors</span> does your house have?`;

            floor.addEventListener("click", () => {
              floorNumber.forEach((floor) => {
                floor.style.display = "none";
                finishBar.style.display = "block";
                addressInput.style.display = "block";
                header.innerHTML = `<span>Please</span> enter your address`;
              });
            });
          });
        });
      });
    });
  });
});


// adds a click event to the continue button that removes the house display and adds the roof number display

const btn = document.querySelector(".outer-container button");
const header = document.getElementById("header");

btn.addEventListener("click", () => {
  houseContainer.forEach((house) => {
    house.style.display = "none";
    header.innerHTML = `<span>How many roof faces</span> do you want your solar panels installed on?</span>`;
  });
  roofContainer.forEach((roof) => {
    roof.style.display = "block";
  });
  btn.style.display = "none";
  startBar.style.display = "block";
  backArrow.style.display = "block";
});

backArrow.addEventListener("click", () => {
  roofContainer.forEach((roof) => {
    if (roof.style.display === "block") {
      roof.style.display = "none";

      btn.style.display = "block";
      startBar.style.display = "none";
      backArrow.style.display = "none";

      houseContainer.forEach((house) => {
        house.style.display = "block";
        header.innerHTML = `<span>Which of these</span> best describes your house?</h1>`;
      });
    }
  });

  houseContainer.forEach((house) => {
    house.addEventListener("click", () => {
      house.classList.add("active");
    });
  });

  floorNumber.forEach((floor) => {
    if (floor.style.display === "block") {
      floor.style.display = "none";
      midBar.style.display = "none";
      header.innerHTML = `<span>How many roof faces</span> do you want your solar panels installed on?`;

      roofContainer.forEach((roof) => {
        roof.style.display = "block";
      });
    }
  });

  if (addressInput.style.display === "block") {
    addressInput.style.display = "none";
    finishBar.style.display = "none";
    header.innerHTML = `<span>How many floors</span> does your house have?`;

    floorNumber.forEach((floor) => {
      floor.style.display = "block";
    });

    houseContainer.forEach((house) => {
      house.style.display = "none";
    });
  }
});



// below is the script that controls the display of the chatbox icon

const chatBotIcon = document.getElementById("chat-bot-icon");
const messenger = document.getElementById("messenger-container");

chatBotIcon.addEventListener("click", () => {
  messenger.classList.toggle("active");
    if(messenger.classList.contains("active")){
        chatBotIcon.style.fontSize = "2rem"
    } else {
        chatBotIcon.style.fontSize = "5rem"
    }
});





const chatSubmitButton = document.getElementById("submit");
const closeChatButton = document.getElementById("close")

chatSubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let fullName = document.getElementById("full-name")
    let email = document.getElementById("email-input")
    console.log(fullName.value)
    console.log(email.value)

})
