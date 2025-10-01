import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { saveState } from "../utils/Store.js";



class JumblesService {

    selectActiveJumble(jumbleId) {

        console.log('🐈', jumbleId);
        let selectedJumble = AppState.jumbles.find((jumble) => jumble.id == jumbleId)
        console.log('👍', selectedJumble);

        AppState.activeJumble = selectedJumble
        console.log('💰', AppState.activeJumble)

        this.startGame()

        //start clock, startGame()
    }

    saveActiveJumble(updatedData) {

        const activeJumble = AppState.activeJumble




        if (updatedData.body !== activeJumble.body) {
            console.log('Input not correct', activeJumble, updatedData.body)
            return
        }
        else {
            console.log('Input correct')
            // this.saveJumblesToLocal()


            this.endGame()
            //stop clock, endGame()



        }



    }

    saveJumblesToLocal() {

        console.log('saving jumbles')
        let jumbles = AppState.jumbles
        saveState('jumbles', jumbles)




    }

    startGame() {

        const activeJumble = AppState.activeJumble
        const currentDate = new Date()

        activeJumble.startTime = currentDate
        // const seconds = currentDate.getSeconds(); //better way to get seconds?
        // console.log('🍕', activeJumble)


    }

    endGame() {

        const activeJumble = AppState.activeJumble
        const currentDate = new Date()

        activeJumble.endTime = currentDate
        const seconds = currentDate.getSeconds(); //better way to get seconds?

        console.log('🍔', activeJumble, seconds)


        const timeElapsed = activeJumble.endTime - activeJumble.startTime

        console.log('time elapsed', timeElapsed)

        if (AppState.activeJumble.fastestTime > timeElapsed) {
            AppState.activeJumble.fastestTime = timeElapsed
        }

        AppState.emit('jumbles')

        //Get time elapsed



    }
}

export const jumblesService = new JumblesService()