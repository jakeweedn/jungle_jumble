import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Jumble } from "../models/Jumble.js";

export class JumblesController {
    constructor() {

        this.drawJumbles()
        this.drawActiveJumble()
        AppState.on('jumbles', this.drawJumbles)
        AppState.on('activeJumble', this.drawActiveJumble, this)

        jumblesService.loadJumblesFromLocal()






    }

    drawJumbles() {

        let jumbleListingContent = '';
        AppState.jumbles.forEach(jumble => {
            jumbleListingContent += jumble.listTemplate
        })

        const jumbleListingElem = document.getElementById('jumble-listings')
        jumbleListingElem.innerHTML = jumbleListingContent
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
        this.drawTimeElasped()



    }

    submitJumble() {

        event.preventDefault()
        let form = event.target

        console.log('🌴')

        const jumbleData = getFormData(form)
        console.log("Jumble data from form", jumbleData)

        jumblesService.createJumble(jumbleData)

        //@ts-ignore
        form.reset()






    }

    selectActiveJumble(jumbleId) {

        console.log('🍌', jumbleId);
        jumblesService.selectActiveJumble(jumbleId)


    }

    saveActiveJumble() {

        event.preventDefault()
        console.log('🥬');

        let form = event.target
        console.log('🎯', form);
        let formData = getFormData(form)
        console.log('✏️', formData)

        jumblesService.saveActiveJumble(formData)

        //@ts-ignore
        form.reset()



    }

    drawTimeElasped() {

        //observer above?
        const timeElaspedElement = document.getElementById('time-elasped')
        const activeJumble = AppState.activeJumble
        if (!activeJumble) { return }

        if (activeJumble.timeElapsed) {

            timeElaspedElement.innerHTML = activeJumble.timeElaspedTemplate
        }



    }

}