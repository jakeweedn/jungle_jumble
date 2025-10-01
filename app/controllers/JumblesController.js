import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";

export class JumblesController {
    constructor() {

        this.drawJumbles()
        this.drawActiveJumble
        AppState.on('jumbles', this.drawJumbles)
        AppState.on('activeJumble', this.drawActiveJumble)


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

    drawActiveJumble() {

        const activeJumbleElement = document.getElementById("active-jumble")
        const activeJumble = AppState.activeJumble
        if (activeJumble != null) {

            activeJumbleElement.innerHTML = activeJumble.activeJumbleTemplate

        } else {
            activeJumbleElement.innerHTML = `
                <div class = "card text-secondary p-4">
                    <h2> Please Select a Jumble to get started </h2>
                </div> 
            
                `
        }



    }

}