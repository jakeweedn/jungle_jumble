import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";

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

    selectActiveJumble(jumbleId) {

        console.log('🍌', jumbleId);
        jumblesService.selectActiveJumble(jumbleId)

    }

}