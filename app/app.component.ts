//<div *ngFor="#hero of heroes | srtOArray " class="grid-item" [ngGridItem]="{'dragHandle': '.badge'}">
import {Component} from 'angular2/core';
import {SrtOArrayPipe} from './srtOArray.pipe';
//import {Dragula} from 'ng2-dragula/ng2-dragula';
//import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { NgGrid, NgGridItem } from 'angular2-grid';

export class json {
	id: number;
	name: string;
	attr: number[];
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
	<div id="json">
	{{jsontext}}
	</div>
	`,
	directives: [NgGrid, NgGridItem],
	pipes: [SrtOArrayPipe]
})

export class AppComponent { 

	public heroes = HEROES;
	selectedHero: Hero;
	title = "Anklicken zum bearbeiten";
	public jsontext: string=JSON.stringify(JSONUS);

	hero: Hero ={
		id: 1,
		name: "Hicham"
	};
	onSelect(hero: Hero){
		this.selectedHero = hero;
	};
	hello(){
		console.log("Hallo Welt");
	};
	json(){
		var a = JSON.stringify(JSONUS);
		var x = document.getElementsByClassName("grid-item");
		var i;
	  var b;
	  var str;
	  var ging;
	  var splittedarray;
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
	 console.log(x.length);
	 //var str = x[0].getAttribute("style");
	 //var ging =  str.replace(/[^;/\d]/g, '');
	 //var splittedarray = ging.split(";").filter(Boolean);

		//console.log(splittedarray);
		////console.log(x[0].getAttribute("style"));
		//console.log(b[1].firstElementChild.innerHTML);
		//console.log(b[1].lastChild.textContent);
for (i=0; i<9; i++){
		b= x[i].childNodes;
	  str = x[i].getAttribute("style");
	  ging =  str.replace(/[^;/\d]/g, '');
	  splittedarray = ging.split(";").filter(Boolean);
		console.log(b[1].firstElementChild.innerHTML);
		console.log(b[1].lastChild.textContent);
		console.log(splittedarray);
		
document.getElementById("json").innerHTML = document.getElementById("json").innerHTML + b[1].firstElementChild.innerHTML + b[1].lastChild.textContent + splittedarray;
}
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

	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },
	{ "id": 11, "name": "Florian Dorrer", "attr": [12,523,3,32] },

];

