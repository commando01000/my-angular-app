import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { FooterComponent } from './Footer/Footer.component';
import { SimbaComponent } from './Simba/Simba.component';

@NgModule({
  declarations: [							
    AppComponent,
      HomeComponent,
      AboutComponent,
      ContactComponent,
      NavbarComponent,
      NotFoundComponent,
      FooterComponent,
      SimbaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
