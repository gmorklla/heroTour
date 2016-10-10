import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Item } from './lista/item';
import  { HeroService } from './hero-service.service';

@Component({
  selector    : 'p-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css'],
  providers   : [HeroService]

})
export class AppComponent implements OnInit {

	constructor(private heroService: HeroService) { }

	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}	

	// Adicionales	
	itemSeleccionado: Item;
	onClicked(value: string): void {
		alert(value);
	}
	receiveEvent(event): void {
		console.log('Copy event from app');
		console.info(event.target.value);
	}
	tomaItemSeleccionado(event): void {
		this.itemSeleccionado = event;
	}
}
