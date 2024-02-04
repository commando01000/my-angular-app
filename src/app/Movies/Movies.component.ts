import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../Movies.service';

@Component({
  selector: 'app-Movies',
  templateUrl: './Movies.component.html',
  styleUrls: ['./Movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(moviesService:MoviesService) {
      moviesService.getAllMovies().subscribe({
        next:(data)=>{
          console.log(data);
        },
        error:(error)=>{
          console.log("an error occured");
          
        },
        complete:()=>{console.log("Completed");
        }
      })
   }

  ngOnInit() {
  }

}
