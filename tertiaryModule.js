export const tertiaryModule = {
	saySomething: message => console.log("From tertiary modules"),
  doWhatever: () => console.log("Anything is possible"),
  oneMoreTest: () => {
    const el = '<p>A framework for dynamic ES6 and SASS development</p>';
    const h1 = document.querySelector('h1');
    h1.insertAdjacentHTML('afterend', el);
  }
}