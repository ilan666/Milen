// Structural directive example

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Defining the directive
@Directive({
  selector: '[appExample]',
})

// Giving it a class
export class ExampleDirective {
  // Setting input of data to work on (This is an example)
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // Defining configuration properties of HTML file config
  // Passing the HTML Template Reference And View Container Reference
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
