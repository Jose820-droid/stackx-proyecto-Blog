
"use strict";
import { cardData } from "./utils/database.js";
import { clickData } from "./utils/getLocalStorangeclickData.js";

const loadIndividualCard = (cardIdString) => {

    clickData[cardIdString]++;
    window
        .localStorage.setItem("clickData", JSON.stringify(clickData));

    window.location.assign("/post-description/post.html");


};

const createCard = (data) => {
    const _template = window.document.querySelector("[data-template]").content;



    const cardItem = _template
        .querySelector("[data-cards]")
        .cloneNode(true);

    cardItem.dataset.category = data.category
    cardItem.dataset.id = data.id;

    cardItem
        .querySelector("[data-card-img]")
        .classList
        .add("c-post-img");
    cardItem
        .querySelector("[data-card-img]")
        .src = data.banner.src;

    cardItem
        .querySelector("[data-card-img]")
        .alt = data.banner.alt;

    cardItem
        .querySelector("[data-card-category]")
        .textContent = data.display_category;

    cardItem
        .querySelector("[data-card-title]")
        .textContent = data.title;

    cardItem
        .querySelector("[data-card-date-time]")
        .textContent = `${data.date_time.date} - ${data.date_time.time}`;

    cardItem
        .querySelector("[data-card-views]")
        .textContent = data.views;

    cardItem
        .querySelector("[data-card-description]")
        .textContent = data.description;

    cardItem.addEventListener(
        "click", () => {
            const cardIdString = (
                cardItem.dataset.id
            );
            const cardIdNumber = (
                Number(cardIdString)
            );

            window
                .localStorage.setItem("cardIdString", cardIdString);

            switch (cardIdNumber) {

                case 1: {
                    loadIndividualCard(cardIdString);



                    break;
                };
                case 2: {
                    loadIndividualCard(cardIdNumber)
                    break;
                };

                case 3: {
                    loadIndividualCard(cardIdNumber)
                    break;
                };

                case 4: {
                    loadIndividualCard(cardIdNumber)
                    break;
                };

                default: {
                    break;
                };


            };
        }

    );



    return cardItem;
};

const  addAnRemoveclassActive=(target)=>{
    const allFilters=(
        window.document.querySelectorAll("[data-filter]")
    );
    allFilters.forEach(
        (category)=>category.classList.remove("c-active")
    );
    target.classList.add("c-active");
};

const showIndividualCard = (category) =>{
    const allCards = (
        window
         .document
         .querySelectorAll("[data-cards]")
    );

    allCards.forEach(
        (card)=>{
            if(card.dataset.category === category){
           card.style.display="block";
           return;
            }
            card.style.display="none";
        }
    );
};

//creacion de cards
window.addEventListener(
    "DOMContentLoaded", () => {
        cardData.map(
            (data) => {
                const newCard = createCard(data);

                const parentCards = window
                    .document
                    .querySelector("[data-container-cards]")

                parentCards.appendChild(newCard);

            }
        );
    }

);

//filtrando cards
window.addEventListener(
    "click", (event) => {
        const target = (
            event.target);

        const buttonLogin = (
            target.dataset.button
        );

        const filterCategory = (
            target.dataset.filter
        );

        const allCards = (
            window
                .document
                .querySelectorAll("[data-cards]")


        );

        const parenCard = (
            window
                .document
                .querySelector("[data-container-cards]")

        );
        

        if (buttonLogin === "login") {
            window.alert("opsão indisponble")
        };

        switch (filterCategory) {
            case "all-categories": {
                addAnRemoveclassActive(target);

                allCards.forEach(
                    (card)=>card.style.display="block"
                );
                parenCard.classList.remove("c-individual-card");
                break;
            };
            
            case "category-1": {
                addAnRemoveclassActive(target);
                showIndividualCard("category_1");
                parenCard.classList.add("c-individual-card");
                break;
            };
            
            case "category-2": {
                addAnRemoveclassActive(target);
                showIndividualCard("category_2");
                parenCard.classList.add("c-individual-card");
                break;
            };
            
            case "category-3": {
                addAnRemoveclassActive(target);
                showIndividualCard("category_3");
                parenCard.classList.add("c-individual-card");
                break;
            };
            
            case "category-4": {
                addAnRemoveclassActive(target);
                showIndividualCard("category_4");
                parenCard.classList.add("c-individual-card");
                break;
            };
            default: {
                break

            };
        };
        

    }

);

