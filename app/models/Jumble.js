import { generateId } from "../utils/GenerateId.js";

export class Jumble {

  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.body = data.body || '';

    this.fastestTime = Infinity;
    this.startTime = null
    this.endTime = null;

  }









  get listTemplate() {

    return `
        <li>
          <p>
            ${this.name} - (${this.fastestTime == Infinity ? 'Not Started' : this.fastestTime}) ${this.fastestTime == Infinity ? '' : 'seconds'}
          </p> 

          <button class ="w-25" onclick = "app.jumblesController.selectActiveJumble('${this.id}')"> Start </button>
        </li>
        
        
        `


  }

  get activeJumbleTemplate() {

    return `
      <article class="card w-100">
        <div class="card-body">
          <h2>${this.name}</h2>
          <p> ${this.body}</p>


          <form onsubmit="app.jumblesController.saveActiveJumble()">

            <textarea id="jumble-body" name="body" class="form-control jumble-body" placeholder="Start typing here!"></textarea>
            <button class="btn btn-teal mt-2"> Save 🛟 </button>

          </form>
        </div>
      </article>

      `
  }


  get timeElapsed() {

    if (!this.endTime || !this.startTime) { return 0 }
    console.log("TE", this.endTime - this.startTime)
    return ((this.endTime - this.startTime) / 1000)
  }




  get timeElaspedTemplate() {


    return `


      <h2> Time Elasped:</h2 >

        <p> ${this.timeElapsed} seconds </p>



    `
  }
}