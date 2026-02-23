import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class Pipes {
  username = 'yOunGTECh';
}
