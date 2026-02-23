import {Component, input} from '@angular/core';

@Component({
  selector: 'app-input-props',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class InputProps {
  readonly name = input<string>();
}
