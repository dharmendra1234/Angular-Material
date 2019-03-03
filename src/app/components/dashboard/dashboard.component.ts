import { Component, OnInit } from "@angular/core";
import { ItuneAppleService } from "../../services/itune-apple.service";
import { Feeds } from "../../services/feeds";
import { Users } from "../../services/users";
import { Artist } from "../../services/artist";
import { AuthService } from "../../core/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "components/dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  cards = [
    { title: "Card 1", cols: 1, rows: 1 },
    { title: "Card 2", cols: 1, rows: 1 },
    { title: "Card 3", cols: 1, rows: 1 },
    { title: "Card 4", cols: 1, rows: 1 }
  ];

  feeds: Feeds;
  results: Artist[];
  users: Users[];

  constructor(
    private ituneService: ItuneAppleService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.ituneService.getDelayedValueObservable();
    this.getFeeds();
    this.onSubmit();
  }

  onSubmit() {
    //  console.log(form);
    this.authService.registerUser({
      // email: form.value.email,
      //password: form.value.password
      email: "test",
      password: "password"
    });
  }

  getFeeds(): void {
    this.ituneService.getFeeds().subscribe(feeds => {
      console.log(feeds.feed.results);
      return (this.results = feeds.feed.results);
    });
  }

  ngDoCheck() {
    if (this.results == null) {
      this.ituneService.getFeedFromJson().subscribe(feeds => {
        console.log(feeds.feed.results);
        return (this.results = feeds.feed.results);
      });
    }
  }
}
