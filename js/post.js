"use strict"
import {cardData} from "./utils/database.js"



window.addEventListener(
    "DOMContentLoaded",()=>{
        const convertStringToNumber = (data) => {
            return Number(data);
        };

        const onClickButtonLogin =()=>{
            window.alert("Opção indisponivel no momento!");
        };

        const cardId = convertStringToNumber(
            window
            .localStorage
            .getItem("cardIdString")
        );
        
        const buttonLogin =(
            window
                .document
                .querySelector("[data-login]")
        );
        
        const createCard = (data) =>{
            const template = (
                window
                .document
                .querySelector("[data-template-post-description]")
                .content 
            );
            const cardItem = (
                template
                    .querySelector("[data-post]")
                    .cloneNode(true)
            );

            cardItem
                    .querySelector("[data-post-title]")
                    .textContent = data.title;
            cardItem
                    .querySelector("[data-post-header-img]")
                    .src = data.banner.src;
            cardItem
                    .querySelector("[data-post-header-img]")
                    .alt = data.banner.alt;

            cardItem
                    .querySelector("[data-post-date-time]")
                    .textContent = (
                        `${data.date_time.date} - ${data.date_time.time}`
                    );
                    
            cardItem
                    .querySelector("[data-post-views]")
                    .textContent = data.views;

            cardItem
                    .querySelector("[data-post-text]")
                    .textContent = data.description;

                



            return(cardItem);
        };

        buttonLogin.addEventListener(
            "click", onClickButtonLogin
        );

        cardData.forEach(
            
            (data)=>{
                const id = data.id;

                    if(id === cardId){

                         const newCard = (
                             createCard(data)
                         );

                         const mainCantainer = (
                            window.document.querySelector("[data-main-container]")
                         );
                         mainCantainer
                            .appendChild(newCard);
                    }
            }
        );
    }
)