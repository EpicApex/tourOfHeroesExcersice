//Not a module error
import { NgModule     }         from '@angular/core';
//Angular related components that can be declared under NgModule-declarations
import { BrowserModule}         from '@angular/platform-browser';
import { FormsModule  }         from '@angular/forms';

//AppComponent related components
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
    //NgModule -here- => Not a module error
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
