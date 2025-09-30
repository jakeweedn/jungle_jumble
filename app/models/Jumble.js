import { generateId } from "../utils/GenerateId.js";

export class Jumble {

    constructor(data) {
        this.id = generateId();
        this.name = data.name;
        this.body = data.body;

        this.fastestTime = null;
        this.startTime = null;
        this.endTime = null;

    }

    get listTemplate() {

        return `<li> ${this.name} </li>
        <button class ="w-25" onclick = "app.jumblesController.selectActiveJumble('${this.id}')"> Start </button>
        
        
        `


    }

    get activeJumbleTemplate() {

        return
    }
}