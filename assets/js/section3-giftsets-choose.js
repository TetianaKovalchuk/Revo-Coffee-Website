var giftsetsChoiceButtons = document.querySelectorAll(
  ".section3-giftsets-list-item-button"
);
var giftsetsChoiceButtonsJq = $(".section3-giftsets-list-item-button");
var giftsetsActiveChoice = 0;
var buttonsDisabled = false;
var giftsetChoicesInfo = {
  0: {
    price: 285,
    icon: "assets/img/section3/giftset1Img.png",
    //   когда применять, надо к имени добавлять giftset " "
    name: "Vietnamese Filtered Coffee",
    description:
      "The perfect gift for coffee lovers. The coffee beans are carefully selected by Revo, roasted and ground according to technology and know-how derived from renowned artisans and with the love and passion of coffee makers... creating pure cups of coffee exclusively for you.",
    nutType: "Fine Robusta Blend",
    height: "700 - 800",
  },
  1: {
    price: 319,
    icon: "assets/img/section3/giftset2Img.png",
    name: "Lovely Day",
    description:
      "The perfect gift for lovers. The coffee beans are carefully selected by Revo, roasted and ground according to technology and know-how derived from renowned artisans and with the love and passion of coffee makers... creating pure cups of coffee exclusively for you.",
    nutType: "Cacao beans",
    height: "900 - 1000",
  },
  2: {
    price: 190,
    icon: "assets/img/section3/giftset3Img.png",
    name: "Natural Culture Drink",
    description:
      "The perfect gift for coffee lovers. The beans are carefully selected by Revo, roasted and ground according to technology and know-how derived from renowned artisans and with the love and passion of coffee makers... creating pure cups of coffee exclusively for you.",
    nutType: "Natural Coffee Beans",
    height: "300 - 400",
  },
};

var updateCurrentChoice = function () {
  if (buttonsDisabled == false) {
    buttonsDisabled = true;

    document.querySelector(
      ".section3-giftsets-info-price"
    ).textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].price}.000$`;
    document
      .querySelector(".section3-giftsets-info-price")
      .classList.add("section3-infos-animation-top");

    document.querySelector(
      ".section3-giftsets-img"
    ).src = `${giftsetChoicesInfo[giftsetsActiveChoice].icon}`;
    document
      .querySelector(".section3-giftsets-img")
      .classList.add("section3-infos-animation-left");

    document.querySelector(
      ".section3-giftsets-info-name"
    ).textContent = `Giftset "${giftsetChoicesInfo[giftsetsActiveChoice].name}"`;
    document
      .querySelector(".section3-giftsets-info-name")
      .classList.add("section3-infos-animation-right");

    document.querySelector(
      ".section3-giftsets-info-desc"
    ).textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].description}`;
    document
      .querySelector(".section3-giftsets-info-desc")
      .classList.add("section3-infos-animation-right");

    document
      .querySelectorAll(".section3-giftsets-info-species-item")[0]
      .classList.add("section3-infos-animation-left");
    document
      .querySelectorAll(".section3-giftsets-info-species-item")[1]
      .classList.add("section3-infos-animation-left");

    document.querySelectorAll(
      ".section3-giftsets-info-species-item-info-value"
    )[0].textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].nutType}`;
    document
      .querySelectorAll(".section3-giftsets-info-species-item-info-value")[0]
      .classList.add("section3-infos-animation-bottom");

    document.querySelectorAll(
      ".section3-giftsets-info-species-item-info-value"
    )[1].textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].height}m`;
    document
      .querySelectorAll(".section3-giftsets-info-species-item-info-value")[1]
      .classList.add("section3-infos-animation-bottom");
    // добавить анимации для каждого из элементов которые меняються, когда они меняються чтобы происходила анимация слайда, думаю, это можно сделать применив к ним animation
    setTimeout(() => {
      document
        .querySelector(".section3-giftsets-info-price")
        .classList.remove("section3-infos-animation-top");
      document
        .querySelector(".section3-giftsets-img")
        .classList.remove("section3-infos-animation-left");
      document
        .querySelector(".section3-giftsets-info-name")
        .classList.remove("section3-infos-animation-right");
      document
        .querySelector(".section3-giftsets-info-desc")
        .classList.remove("section3-infos-animation-right");
      document
        .querySelectorAll(".section3-giftsets-info-species-item")[0]
        .classList.remove("section3-infos-animation-left");
      document
        .querySelectorAll(".section3-giftsets-info-species-item")[1]
        .classList.remove("section3-infos-animation-left");
      document
        .querySelectorAll(".section3-giftsets-info-species-item-info-value")[0]
        .classList.remove("section3-infos-animation-bottom");
      document
        .querySelectorAll(".section3-giftsets-info-species-item-info-value")[1]
        .classList.remove("section3-infos-animation-bottom");
      buttonsDisabled = false;
    }, 1500);
  }
};

var giftsetChoosen = function (number) {
  if (buttonsDisabled == false) {
    giftsetsActiveChoice = number - 1;
    console.log(number);
    if (
      giftsetsChoiceButtons[giftsetsActiveChoice].classList.contains(
        "section3-giftsets-list-item-button-active"
      ) == false
    ) {
      console.log(`condition worked, ${giftsetsActiveChoice}`);
      giftsetsChoiceButtonsJq.each(function () {
        $(this).removeClass("section3-giftsets-list-item-button-active");
        console.log(`removing the classes for every, ${number}, ${$(this)}`);
      });
      giftsetsChoiceButtons[giftsetsActiveChoice].classList.add(
        "section3-giftsets-list-item-button-active"
      );
    }
  }

  updateCurrentChoice();
};

var giftsetBuyNow = function (number) {
  console.log(number);
};

// надо сделать функцию апдейта информации про выбранный вид

updateCurrentChoice();
