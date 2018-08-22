import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    hero: Hero = {
        id: 1,
        name: 'windstrom',
    }
    selectHero: Hero = {
        id: 1,
        name: 'windstrom',
    }
    onSelect(hero: Hero): void {
        this.selectHero = hero;
    }

    constructor() { }

    ngOnInit() {
    }
}
