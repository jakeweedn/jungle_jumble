import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { loadState, saveState } from "../utils/Store.js";



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

        this.saveJumblesToLocal()





    }

    createJumble(data) {

        console.log("data in the service", data)
        const newJumble = new Jumble(data)

        AppState.jumbles.push(newJumble)
        console.log('Jumbles after adding new jumble', AppState.jumbles)

        this.saveJumblesToLocal()


    }




    startGame() {

        const activeJumble = AppState.activeJumble
        const currentDate = new Date()

        activeJumble.startTime = currentDate
        // const seconds = currentDate.getSeconds(); //better way to get seconds?
        console.log('🍕', activeJumble)


    }

    endGame() {

        const activeJumble = AppState.activeJumble
        const currentDate = new Date()

        activeJumble.endTime = currentDate
        // const seconds = currentDate.getSeconds(); //better way to get seconds?

        // console.log('🍔', activeJumble, seconds)


        // const timeElapsed = activeJumble.endTime - activeJumble.startTime

        console.log('time elapsed', activeJumble.timeElapsed)

        if (AppState.activeJumble.fastestTime > activeJumble.timeElapsed) {
            AppState.activeJumble.fastestTime = activeJumble.timeElapsed


            //Convert timeElasped from milliseconds to seconds: 
            // let seconds = timeElapsed / 1000
            // console.log('new fastest time', seconds, 'seconds');
        }

        AppState.emit('jumbles')
        AppState.emit('activeJumble')

        //Get time elapsed



    }

    saveJumblesToLocal() {

        console.log('saving jumbles')
        let jumbles = AppState.jumbles
        saveState('jumbles', jumbles)



    }

    loadJumblesFromLocal() {

        let jumbles = loadState('jumbles', [Jumble])
        console.log('loaded data🌹', jumbles)
        AppState.jumbles = jumbles
    }

    //dont put emojis for save and load!! 



}

export const jumblesService = new JumblesService()