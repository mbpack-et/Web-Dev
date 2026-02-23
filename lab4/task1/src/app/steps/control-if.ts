import {Component} from '@angular/core';

@Component({
  selector: 'app-control-if',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class ControlIf {
  isServerRunning = true;
}
