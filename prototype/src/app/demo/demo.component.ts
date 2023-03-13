import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  unFocus(focusEvent: FocusEvent): false {
    document.documentElement.focus();
    focusEvent.preventDefault();
    return false;
  }
  unSubmit(submitEvent: SubmitEvent): false {
    submitEvent.preventDefault();
    return false;
  }
  unEvent(event: Event): false {
    event.preventDefault();
    return false;
  }
}
