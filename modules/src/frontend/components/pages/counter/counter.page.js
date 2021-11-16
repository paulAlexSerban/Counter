import './counter.page.scss';

import _GenericTemplate from '../../templates/generic/generic.template';

class CounterPage {
  constructor(page) {
    this.pageParams = {
      pageNode: page,
      pageTitle: page.dataset.jsPage,
    };

    this.init();
  }

  setupTemplate() {
    this.GenericTemplate = new _GenericTemplate(this.pageParams);
  }

  init() {
    this.setupTemplate();
  }
}

document.querySelectorAll('[data-js-page="Counter"]').forEach((page) => {
  const counterPage = new CounterPage(page);
  return counterPage;
});
