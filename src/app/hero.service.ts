import { Injectable }   from '@angular/core';
import { Hero }         from './hero';
import { HEROES }       from './mock-heroes';
    
@Injectable()
//Constructor - creates an object of heroes
export class HeroService{
    getHeroes(): Promise<Hero[]> {                   // stub method ( stub = method to handle known interface)
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve=> {
            //Stimulate server delay of 2 seconds
            setTimeout(() => resolve(this.getHeroes()),2000)
        });
    }
}