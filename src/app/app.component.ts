import { Component } from '@angular/core';

import { Hero } from './hero';
import { Item } from './lista/item';

@Component({
  selector: 'p-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes = HEROES;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	// Adicionales	
	itemSeleccionado: Item;
	onClicked(value: string): void {
		alert(value);
	}
	receiveEvent(event): void {
		console.log('Copy event from app');
		console.info(event);
	}
	tomaItemSeleccionado(event): void {
		this.itemSeleccionado = event;
	}
}

const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];
