import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector    : 'p-lista',
  templateUrl : './lista.component.html',
  styleUrls   : []
})
export class ListaComponent implements OnInit {

	items: Item[] = [
		new Item('Schenitzerl', 'Very tasty'),
		new Item('Tacos', 'Yummy delicious mexican tacos!')
	];

	@Output() itemSeleccionadoEvent = new EventEmitter<Item>();

	constructor() { }

	ngOnInit() {
	}

	itemSeleccionado(item: Item) {
		console.log(item);
		this.itemSeleccionadoEvent.emit(item);
	}  

	mouseOverEvent(event) {
		console.log(event);
	}

}
