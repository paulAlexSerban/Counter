import Counter from '../../molecules/counter/counter.molecule';

export default class GenericTemplate {
  constructor(parentPageParams) {
    this.templateParams = {
      parentPageParams,
    };
    this.init();
  }

  setupMolecules() {
    document.querySelectorAll('[data-js-component="Counter"]').forEach((molecule) => {
      this.counter = new Counter(molecule, this.templateParams);
    });
  }

  init() {
    this.setupMolecules();
  }
}
