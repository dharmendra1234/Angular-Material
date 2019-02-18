import { Component, OnInit } from '@angular/core';
import { ItuneAppleService } from 'src/app/services/itune-apple.service';
import Feed from 'src/app/services/feed';
import { Users } from 'src/app/services/users';

@Component({
  selector: 'components/dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  cards = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
  
  heroes: Feed[];
  users: Users[]

  constructor(private heroService: ItuneAppleService) { }

  ngOnInit() {
   // this.getHeroes();
   this.getUsers();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getUsers(): void {
    this.heroService.getUsers();
     
  }

}


