import {Component} from 'angular2/core';
import {SrtOArrayPipe} from './srtOArray.pipe';

export class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	template: 
		`
	<h1>{{title}}</h1>
	<h2>My Heroes</h2>
	<ul class="heroes">
	<li *ngFor="#hero of heroes | srtOArray "
	[class.selected]="hero === selectedHero"
	(click)="onSelect(hero)">
	<span class="badge">{{hero.id}}</span> {{hero.name}}
	</li>
	</ul>

	<div *ngIf="selectedHero">
	<h2>{{selectedHero.name}} details!</h2>
	<div>
	<label>id: </label>
	<input [(ngModel)]="selectedHero.id" placeholder="id"/>
	</div>
	<div>
	<label>name: </label>
	<input [(ngModel)]="selectedHero.name" placeholder="name"/>
	</div>
	</div>
	`,
	pipes: [SrtOArrayPipe]
})

export class AppComponent { 

	public heroes = HEROES;
	selectedHero: Hero;
	title = "Hallo Welt!";

	hero: Hero ={
		id: 1,
		name: "Hicham"
	};
	currentHero: function(){


	};
	onSelect(hero: Hero){
		this.selectedHero = hero;
	}
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];

