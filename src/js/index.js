import Typed from "typed.js";

import "@img/Arduino.svg";
import "@img/Bethesda.svg";
import "@img/Fallout.svg";
import "@img/Loading.svg";
import "@img/Minecraft.svg";
import "@img/Person-250.jpg";

import "../scss/index.scss";

function imitateTyping() {
    let optionsName = {
        strings: ['artem'],
        typeSpeed: 100,
        showCursor: false,
    };
    new Typed('.typing-imitation-1', optionsName);
  
    let optionsSurname = {
        strings: ['Lomakin'],
        typeSpeed: 200,
    };
    new Typed('.typing-imitation-2', optionsSurname);
}

function fadeOutByTransitionPromised(element, animTime) {
    return new Promise((resolve, reject) => {
        element.style.transition = `opacity ${animTime}ms`;
        element.style.opacity = '0';
        element.addEventListener("transitionend", () => {
            element.style.display = 'none';
            resolve();
        })
    })  
}

function addStylesToProgressBars() {
    let subtextColor = window.getComputedStyle(document.querySelector(".subtext")).color;
    let logosColor = window.getComputedStyle(document.querySelector(".yes-no-container").querySelector("label")).color;
    
    let progressBarsLayouts = document.querySelectorAll(".progressbar-layout");
    for (let progressbarLayout of progressBarsLayouts) {
        let progressbar = progressbarLayout.querySelector(".progressbar");
        let percent = Number(progressbarLayout.querySelector(".progressbar-percentage").textContent.match(/\d+/)[0]);
        progressbar.style.background = `linear-gradient(to right, ${subtextColor} ${percent}%, ${logosColor} ${percent}%)`;
    }
}

function loadingScenario() {
    let onloader = document.getElementById('onloader');
    addStylesToProgressBars();
    fadeOutByTransitionPromised(onloader, 350)
    .then(imitateTyping);  
}
  
window.onload = () => {    
    setTimeout(loadingScenario, 500);  
};
