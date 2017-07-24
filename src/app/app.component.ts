import { Component } from '@angular/core';


export class Hero {

  id:       number;
  name:     string;
  role:     string;
  nemesis:  string;
  
}

const HEROES: Hero[] = [
  { id: 1, name: 'Genji',       role: 'Offense ', nemesis: 'Mei / Symettra / McCree / Winston '},
  { id: 2, name: 'McCree',      role: 'Offense ', nemesis: 'Mostly balanced (#Care from D.V.A / Winston / RoadHoag / Zarya'},
  { id: 3, name: 'Phara',       role: 'Offense ', nemesis: 'Soldier / McCree / D.V.A'},
  { id: 4, name: 'Soldier 76',  role: 'Offense' , nemesis: 'Mostly balanced (#Care from McCree / Symmetra / Sombra '},
  { id: 5, name: 'Reaper',      role: 'Offense' , nemesis: 'D.V.A / McCree '},
  { id: 6, name: 'Sombra',      role: 'Offense' , nemesis: 'D.V.A / McCree / Soldier 76 / Winston '},
  { id: 7, name: 'Tracer',      role: 'Offense' , nemesis: 'D.V.A / McCree / RoadHoag / Soldier'},
  { id: 8, name: 'DoomFist',    role: 'Offense' , nemesis: ' N/A '}
  
];



@Component({
  selector: 'app-root',
  template: `
              <h1> {{title}} </h1>                                        \n
              <h2> Magical creatures  </h2>                               \n
              <ul class="heroes">
                <li *ngFor="let hero of heroes" 
                [class.selected]="hero === selectedHero" 
                (click)="onSelect(hero)">
                  <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
              </ul>
              
              <div *ngIf="selectedHero">
              <h2>{{selectedHero.name}} details!</h2>
              <div><label>id: </label>{{selectedHero.id}}                 </div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name">
                  <div> Role      -  {{selectedHero.role}}                   </div>  
                  <div> Nemesis   -  {{selectedHero.nemesis}}                </div>   
                </div>
              </div>

            `,
  styles:     [`
                  .selected {
                    background-color: #CFD8DC !important;
                    color: white;
                  }
                  .heroes {
                    margin: 0 0 2em 0;
                    list-style-type: none;
                    padding: 0;
                    width: 15em;
                   
                  }
                  .heroes li {
                    cursor: pointer;
                    position: relative;
                    left: 0;
                    background-color: #EEE;
                    margin: .5em;
                    padding: .3em 0;
                    height: 1.6em;
                    border-radius: 4px;
                  }
                  .heroes li.selected:hover {
                    background-color: #BBD8DC !important;
                    color: white;
                  }
                  .heroes li:hover {
                    color: #607D8B;
                    background-color: #DDD;
                    left: .1em;
                  }
                  .heroes .text {
                    
                    position: relative;
                    top: -3px;
                  }
                  .heroes .badge {
                    display: inline-block;
                    font-size: small;
                    color: white;
                    padding: 0.8em 0.7em 0 0.7em;
                    background-color: #607D8B;
                    line-height: 0.75em;
                    position: relative;
                    left: -1px;
                    top: -4px;
                    height: 1.8em;
                    margin-right: 1.6em;
                    border-radius: 100px 0 0 100px;
                  }

                  .test {
                      display: flex;
                      align-items: left;
                      justify-content: left; 
                      height: 100%; 
                     }

                `]
                  
              })




export class AppComponent {
  title  = 'Activision - Blizzard - Overwatch playground';
  heroes = HEROES;
  selectedHero: Hero;

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }