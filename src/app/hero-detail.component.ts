import { Component } from "@angular/core"
import { Hero }       from './hero'

@Component({
    selector: 'hero-detail',  // CSS selector name - matches the element tag that identifies this component within a parent component
    template: `
                <div *ngIf  = "hero">
                <h2>{{hero.name}} details!</h2>
                <div><label>id:</label>{{hero.id}}    </div>
                <div>
                  <label>name:</label>
                  <input [(ngModel)] = "hero.name" placeholder = "name">
                  <div> Role      -  {{hero.role}}    </div>  
                  <div> Nemesis   -  {{hero.nemesis}} </div>   
                </div>
              </div>
    
    `

})

export class HeroDetailComponent {
   
  hero: Hero;

}