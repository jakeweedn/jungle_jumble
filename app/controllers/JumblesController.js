import { AppState } from "../AppState.js";

export class JumblesController {
    constructor() {

        this.drawJumbles()


    }

    drawJumbles() {

        let jumbleListingContent = '';
        AppState.jumbles.forEach(jumble => {
            jumbleListingContent += jumble.listTemplate
        })

        const jumbleListingElem = document.getElementById('jumble-listings')
        jumbleListingElem.innerHTML = jumbleListingContent
    }

}