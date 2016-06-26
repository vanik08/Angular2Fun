import { Component } from '@angular/core';

const num: Number = 2;

export class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    { id: 22, name: 'Reaper' },
    { id: 23, name: 'Soldier 76' },
    { id: 24, name: 'Genji' },
    { id: 25, name: 'Hanso' },
];

const HEROES2 = HEROES.slice(0);

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular ${num} App</h1>
        <h2>{{hero.name}} details!</h2>
        <li *ngFor="let hero of heroes">{{hero.id}} - {{hero.name}}</li>
        <div *ngFor="let hero of heroes">
             <input [(ngModel)]="hero.name" (keydown)="onChange(hero.name)" placeholder="name" />
        </div>
        <button (click)="onReset()">Reset</button>
        <input [(ngModel)]="newHero" placeholder="new hero name" />
        <button (click)="onAdd(newHero)">Add</button>
    `
})

export class AppComponent { 
    title = 'Tour of heros';
    heroes = HEROES;
    newHero = '';
    oldHeroes = this.heroes.map((hero) => Object.assign({}, hero));
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    onChange(...args) {
        console.log('change!', args);
        // this.oldHeroes = this.heroes.slice(0);
    }
    onReset() {
        this.heroes = this.oldHeroes.map((hero) => Object.assign({}, hero));
    }
    onAdd() {
        const id = this.heroes[this.heroes.length - 1].id + 1;
        this.heroes.push(new Hero(id, this.newHero));
    }
}