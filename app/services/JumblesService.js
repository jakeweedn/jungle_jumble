import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";



class JumblesService {

    selectActiveJumble(jumbleId) {

        console.log('🐈', jumbleId);
        let selectedJumble = AppState.jumbles.find((jumble) => jumble.id == jumbleId)
        console.log('👍', selectedJumble);

        AppState.activeJumble = selectedJumble
        console.log('💰', AppState.activeJumble)
    }

    saveActiveJumble(updatedData) {

        const activeJumble = AppState.activeJumble




        if (updatedData.body !== activeJumble.body) {
            console.log('Input not correct', activeJumble, updatedData.body)
            return
        }
        else {
            this.saveJumblesToLocal()



        }



    }

    saveJumblesToLocal() {


    }

}

export const jumblesService = new JumblesService()