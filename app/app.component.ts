//<div *ngFor="#hero of heroes | srtOArray " class="grid-item" [ngGridItem]="{'dragHandle': '.badge'}">
import {Component} from 'angular2/core';
import {SrtOArrayPipe} from './srtOArray.pipe';
//import {Dragula} from 'ng2-dragula/ng2-dragula';
//import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { NgGrid, NgGridItem } from 'angular2-grid';

export class json {
	id: number;
	name: string;
	top: number;
	left: number;
	width: number;
	height: number;
}

export class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	template: 
		`
	<div class="container">
	<div class="wrapper">
	<h1>UnitB - Modules</h1>
	<h1>{{title}}</h1>
	<h2>Most important Persons</h2>
	</div>
	<ul class="heroes grid" [ngGrid]="{'resizeable': false, 'margins':[5, 10],'row_height': 50,'min_height':50}">
	<div *ngFor="#hero of heroes | srtOArray " [ngGridItem]="{'dragHandle': '.badge'}">
	<li
	[class.selected]="hero === selectedHero"
	(click)="onSelect(hero)">
	<span class="badge">{{hero.id}}</span> {{hero.name}}
	</li>
	</div>
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
	<div class="row">
	<div class="col-md-3">
	<button class="btn btn-default"> Add Column </button>
	</div>
	<div class="col-md-3">
	<button class="btn btn-default" (click)="hello()"> Evaluate </button>
	</div>
	<div class="col-md-3">
	<button class="btn btn-default" (click)="json()">Get Json! </button>
	</div>
	<div class="col-md-3">
	<h1> Not yet evaluated... </h1>
	</div>
	</div>
	<div class="json">
	{{jsontext}}
	</div>
	`,
	directives: [NgGrid, NgGridItem]
	pipes: [SrtOArrayPipe]
})

export class AppComponent { 

	public heroes = HEROES;
	selectedHero: Hero;
	title = "Anklicken zum bearbeiten";
	public jsontext: json=JSON.stringify(JSONUS);

	hero: Hero ={
		id: 1,
		name: "Hicham"
	};
	onSelect(hero: Hero){
		this.selectedHero = hero;
	},
	hello(){
		console.log("Hallo Welt");
	},
	json(){
		var a = JSON.stringify(JSONUS);
		var x = document.getElementsByClassName("grid-item");
		var i;
	  var b = x[0].childNodes;
/*
		console.log("das ist nur x");
		console.log(x);
		console.log("das ist x[0] mit getAttributes");
		console.log(x[0].getAttribute("style"));
		console.log("das ist x[0] mit children");
		console.log(x[0].children);
		console.log("das ist x[1] mit childnodes");
		console.log(x[2].childNodes);
		console.log("b array");
		console.log(b[1]);*/
		console.log(x[0].getAttribute("style"));
		console.log(b[1].firstElementChild.innerHTML);
		console.log(b[1].lastChild.textContent);

			for(i=0; i < 10; i++)
		{
		}
	});
}
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Florian Dorrer" },
	{ "id": 12, "name": "Norbert Bader" },
	{ "id": 13, "name": "Bogu" },
	{ "id": 14, "name": "Michael Pretz" },
	{ "id": 15, "name": "Felix" },
	{ "id": 17, "name": "Angelika" },
	{ "id": 42, "name": "Hulk" },
	{ "id": 18, "name": "Spiderman" },
	{ "id": 19, "name": "Mr. T" },
	{ "id": 20, "name": "Hans Peter" }
];

var JSONUS: json[] = [

	{ "id": 11, "name": "Florian Dorrer","top":32,"left":32,"width":32,"height":32 },
	{ "id": 12, "name": "Norbert Bader","top":32,"left":32,"width":32,"height":32  },
	{ "id": 13, "name": "Bogu","top":32,"left":32,"width":32,"height":32  },
	{ "id": 14, "name": "Michael Pretz","top":32,"left":32,"width":32,"height":32  },
	{ "id": 15, "name": "Felix","top":32,"left":32,"width":32,"height":32  },
	{ "id": 17, "name": "Angelika","top":32,"left":32,"width":32,"height":32  },
	{ "id": 42, "name": "Hulk","top":32,"left":32,"width":32,"height":32  },
	{ "id": 18, "name": "Spiderman","top":32,"left":32,"width":32,"height":32  },
	{ "id": 19, "name": "Mr. T","top":32,"left":32,"width":32,"height":32  },
	{ "id": 20, "name": "Hans Peter","top":32,"left":32,"width":32,"height":32  }

];

