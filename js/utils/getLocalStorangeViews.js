import { clickData } from "./getLocalStorangeclickData.js";


export const getLocalStorageViews = (id) => {
    return(
         clickData[id]=== undefined ? 0 : clickData[id]

        );

};

