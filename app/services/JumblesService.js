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


}

export const jumblesService = new JumblesService()