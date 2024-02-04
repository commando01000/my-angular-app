import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { CategoryComponent } from './category/category.component';
import { LaptopComponent } from './Laptop/Laptop.component';
import { MobileComponent } from './Mobile/Mobile.component';
import { MoviesComponent } from './Movies/Movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full',
      },
      {
        path: 'Laptop',
        component: LaptopComponent,
      },
      {
        path: 'Mobile',
        component: MobileComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
