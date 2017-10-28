import {tertiaryModule} from './tertiaryModule.js'

export const testModule = {
	printMessage: message => console.log("From pringMessage: " + message),
	logAnything: message => console.log("From log anything: " + message),
  saySomething: tertiaryModule.saySomething,
  anotherModule: tertiaryModule.doWhatever,
  composeChange: tertiaryModule.oneMoreTest
}