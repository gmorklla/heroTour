import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'p-evento',
  template: `
    <button (click)="clickeado()">Click me</button>
    <input type="text" value="Do Copy Action To See" (copy)="eventEmitCopy($event)" class="event-emitter-copy-component-style"/>
  `,
  styles: []
})
export class EventoComponent {
	@Output() clicked = new EventEmitter<string>();
	@Output() eventEmitterCopy = new EventEmitter();

	clickeado() {
		this.clicked.emit('It works!');
	}

    eventEmitCopy(event) {
        this.eventEmitterCopy.emit(event);
    }	
}
