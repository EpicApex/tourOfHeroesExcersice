import { Injectable }   from '@angular/core'
import { Hero }         from './hero' 
import { HEROES }       from './mock-heroes'

@Injectable()
export class HeroService{

    getHeroes(): Hero[] {                   // stub method ( stub = method to handle known interface)
        return HEROES;
    }
}