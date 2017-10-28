import './scss/main.scss';
import {testModule} from './secondaryModule.js';

testModule.printMessage('this is what I am printing');
testModule.logAnything('this is what I am printing');
testModule.saySomething();
testModule.logAnything('logging anything');
testModule.anotherModule();
testModule.composeChange()