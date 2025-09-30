import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  /** @type {Jumble[]} */
  jumbles = [

    new Jumble({

      name: "Jumble 🦍",
      body: "This is a body of text.",


    }),

    new Jumble({

      name: "Jumble 🦧",
      body: "This is another line of text.",


    }),

    new Jumble({

      name: "Jumble 🐒",
      body: "This is a third line of text.",



    }),

  ]

  /** @type {Jumble} */
  activeJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())