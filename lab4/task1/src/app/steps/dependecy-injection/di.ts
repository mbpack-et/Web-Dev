import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-di',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class Di {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
