import {Component} from '@angular/core';

@Component({
  selector: 'app-updating',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
})
export class Updating {
  city = 'San Francisco';
}
