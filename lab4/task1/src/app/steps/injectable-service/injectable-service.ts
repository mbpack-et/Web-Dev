import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-injectable-service',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class InjectableService {
  carService = inject(CarService);
}
