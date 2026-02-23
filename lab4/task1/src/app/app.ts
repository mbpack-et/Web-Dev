import { Component } from '@angular/core';
import { Introduction } from './steps/introduction';
import { Anatomy } from './steps/anatomy';
import { Updating } from './steps/updating';
import { Composition } from './steps/composition';
import { ControlIf } from './steps/control-if';
import { ControlFor } from './steps/control-for';
import { PropertyBinding } from './steps/property-binding';
import { EventHandling } from './steps/event-handling';
import { InputProps } from './steps/input-props';
import { OutputProps } from './steps/output-props';
import { DeferrableViews } from './steps/deferrable-views';
import { OptimizingImages } from './steps/optimizing-images';
import { Forms } from './steps/forms';
import { FormControlValue } from './steps/form-control-value';
import { ReactiveForms } from './steps/reactive-forms';
import { ValidatingForms } from './steps/validating-forms';
import { Pipes } from './steps/pipes';
import { FormattingDataWithPipes } from './steps/formatting-data-with-pipes';
import { CreateAPipe } from './steps/create-a-pipe/create-a-pipe';
import { InjectableService } from './steps/injectable-service/injectable-service';
import { Di } from './steps/dependecy-injection/di';
import { EnablingRouting } from './steps/enabling-routing/enabling-routing';

@Component({
  selector: 'app-root',
  imports: [
    Introduction, Anatomy, Updating, Composition,
    ControlIf, ControlFor, PropertyBinding, EventHandling,
    InputProps, OutputProps, DeferrableViews, OptimizingImages,
    Forms, FormControlValue, ReactiveForms, ValidatingForms,
    Pipes, FormattingDataWithPipes, CreateAPipe,
    InjectableService, Di, EnablingRouting,
  ],
  templateUrl: './app.html',
})
export class App {
  steps = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'anatomy', title: 'Anatomy of a Component' },
    { id: 'updating', title: 'Updating the component' },
    { id: 'composition', title: 'Component composition' },
    { id: 'control-if', title: 'Control flow - @if' },
    { id: 'control-for', title: 'Control flow - @for' },
    { id: 'property-binding', title: 'Property Binding' },
    { id: 'event-handling', title: 'Event handling' },
    { id: 'input-props', title: 'Component input properties' },
    { id: 'output-props', title: 'Component output properties' },
    { id: 'deferrable-views', title: 'Deferrable views' },
    { id: 'optimizing-images', title: 'Optimizing images' },
    { id: 'forms', title: 'Forms' },
    { id: 'form-control-value', title: 'Form Control Value' },
    { id: 'reactive-forms', title: 'Reactive forms' },
    { id: 'validating-forms', title: 'Validating forms' },
    { id: 'pipes', title: 'Pipes' },
    { id: 'formatting-data-with-pipes', title: 'Formatting Data with Pipes' },
    { id: 'create-a-pipe', title: 'Create a Pipe' },
    { id: 'injectable-service', title: 'Injectable Service' },
    { id: 'di', title: 'Dependency Injection' },
    { id: 'enabling-routing', title: 'Enabling routing' },
  ];

  currentStep: string | null = null;

  select(id: string) {
    this.currentStep = id;
  }

  back() {
    this.currentStep = null;
  }
}