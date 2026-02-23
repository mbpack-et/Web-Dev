import {Component} from '@angular/core';

@Component({
  selector: 'app-event-handling',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class EventHandling {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
