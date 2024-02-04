import { FormsModule } from '@angular/forms';
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
import { CategoryComponent } from './category/category.component';
import { LaptopComponent } from './Laptop/Laptop.component';
import { MobileComponent } from './Mobile/Mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './Movies/Movies.component';
@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    CategoryComponent,
    LaptopComponent,
    MobileComponent,
      MoviesComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
