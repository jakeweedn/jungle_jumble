import { ExampleController } from './controllers/ExampleController.js';
import { JumblesController } from './controllers/JumblesController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  jumblesController = new JumblesController()


}

window['app'] = new App()


