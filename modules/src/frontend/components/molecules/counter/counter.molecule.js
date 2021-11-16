import { stopBubbling } from '../../../common/scripts/functions/stopBubbling';

export default class Counter {
  constructor(molecule, pageParams) {
    this.moleculeParams = {
      molecule,
      pageParams,
    };

    this.init();
  }

  bumpCounter() {
    this.currentVal = parseInt(this.counterOutput.innerHTML, 10);
    this.newVal = this.currentVal + 1;
    this.counterOutput.innerHTML = this.newVal;
  }

  setupEventListeners() {
    this.counterButton.addEventListener('click', (event) => {
      stopBubbling(event);
      this.bumpCounter();
    });
  }

  setupDOMReferences() {
    this.counterButton = document.querySelector('.counter__button');
    this.counterOutput = document.querySelector('.counter__output');
  }

  init() {
    console.log(this.moleculeParams);
    this.setupDOMReferences();
    this.setupEventListeners();
  }
}
