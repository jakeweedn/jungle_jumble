import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  /** @type {Jumble[]} */
  jumbles = [

    new Jumble({

      name: "Jumble Easy🐒",
      body: "Can you type this short sentence?",


    }),

    new Jumble({

      name: "Jumble Medium 🦍",
      body: `If the automobile had followed the same development cycle as the computer,
       a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, 
       killing everyone inside. `

    }),

    new Jumble({

      name: "Jumble Hard 🦧",
      body: `Fifty years of programming language research, and we end up with C++?
       Measuring programming progress by lines of code is like measuring aircraft building progress by weight. 
      There’s an old story about the person who wished his computer were as easy to use as his telephone. 
      That wish has come true, since I no longer know how to use my telephone.
      Controlling complexity is the essence of computer programming.`



    }),

  ]

  /** @type {Jumble} */
  activeJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())