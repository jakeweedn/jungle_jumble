import { generateId } from "../utils/GenerateId.js";

export class Jumble {

  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.body = data.body || '';

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

    return `
        <article class="card">
      <div class="card-body">
        <h2>${this.name}</h2>
        <p> ${this.body}</p>

        <form onsubmit = "app.jumblesController.saveActiveJumble()">

          <textarea id="jumble-body" name="body" class="form-control jumble-body" placeholder = "Start typing here!"></textarea>
          <button class="btn btn-teal mt-2"> Save 🛟 </button>

        </form>
      </div>
      </article>
        
        `
  }
}