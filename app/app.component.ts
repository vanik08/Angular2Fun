import { Component } from '@angular/core';

const num: Number = 2;

export class Hero {
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
    `
})

export class AppComponent { 
    title = 'Tour of heros';
    heroes = HEROES;
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
}