import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { ProductComponent }     from './product.component';
import { ProductDetailComponent }  from './product-detail.component';
import { LoginFormComponent }     from './login-form.component';




import { HeroService }          from './hero.service';
import { ProductService }          from './product.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    ProductComponent,
    ProductDetailComponent,
    LoginFormComponent 
  ],
  providers: [ HeroService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
