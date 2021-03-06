import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { on, action } from '@glimmer/modifier';

class MyComponent extends Component {
  @tracked count = 1;

  @action increment(): void {
    this.count++;
  }
}

setComponentTemplate(
  createTemplate(
    { on },
    `<p>You have clicked the button {{this.count}} times.</p>
     <button {{on "click" this.increment}}>Click</button>
    `
  ),
  MyComponent
);

export default MyComponent;
