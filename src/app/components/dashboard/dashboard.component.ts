import { Component, OnInit } from '@angular/core';
import { ItuneAppleService } from '../../services/itune-apple.service';
import { Feeds } from '../../services/feeds';
import { Users } from '../../services/users';
import { Artist } from '../../services/artist';


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
  
  feeds: Feeds;
  results: Artist[];
  users: Users[]

  constructor(private ituneService: ItuneAppleService) { }

  ngOnInit() {
  this.getFeeds();
  }

  getFeeds(): void {
    this.ituneService.getFeeds()
    .subscribe (
      feeds=>{
       console.log(feeds.feed.results);
     return  this.results = feeds.feed.results;
       })
    }

    ngDoCheck(){
      if(this.results==null){
        this.ituneService.getFeedFromJson()
        .subscribe (
          feeds=>{
           console.log(feeds.feed.results);
         return  this.results = feeds.feed.results;
           })
      }

    }
    
  

  getUsers(): void {
  //  this.ituneService.getUsers();
     
  }

}


