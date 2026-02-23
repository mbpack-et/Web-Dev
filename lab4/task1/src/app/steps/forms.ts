import {Component} from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">Favorite Framework:</label>
  `,
  imports: [],
})
export class Forms {
  username = 'youngTech';
  favoriteFramework = '';
}
