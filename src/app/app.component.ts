import { Component } from '@angular/core';


export class Hero {

  id:       number;
  name:     string;
  role:     string;
  nemesis:  string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
              <h1> {{title}} </h1> \n
              <h2> Hero Description SUP                                   </h2>  \n 
              <div><label> ID </label> {{hero.id}}                        </div> \n
              <div>
                    <label> Name   - </label> 
                    <input [(ngModel)]="hero.name" placeholder="name">
              </div>                                                             \n
              <div><label> Role - </label> {{hero.role}}                  </div> \n
              <div> {{hero.nemesis}} is its nemesis                       </div>
            `
  
})

export class AppComponent {
  
  title  = 'Tour Of Heroes';
  hero: Hero = {
    id:       1,
    name:     'Winston',
    role:     'DPS',
    nemesis:  'Reaper'
  };

}





