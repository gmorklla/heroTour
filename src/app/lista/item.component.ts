import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
	selector    : 'p-item',
	templateUrl : './item.component.html',
	styles      : []
})
export class ItemComponent {

	@Input() item: Item;

	constructor() { }

	ngOnInit() {
	}

}
