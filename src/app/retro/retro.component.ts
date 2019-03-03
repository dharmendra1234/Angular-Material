import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import { Comment } from "./../model/comment";

@Component({
  selector: "app-retro",
  templateUrl: "./retro.component.html",
  styleUrls: ["./retro.component.scss"]
})
export class RetroComponent implements OnInit {
  constructor() {}

  @ViewChild('comment_wentwell') redel:ElementRef;
  @ViewChild('comment') redel1:ElementRef;
  @ViewChild('comment_need') redel2:ElementRef;
  comment_wentwell : "";
  comment: '';
  comment_need: '';

  ngOnInit() {
    
  }
 




  doneVote = 4;

  //todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  //done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  wentWell = [
    new Comment(1, "Get up", 1, "WENT_WELL"),
    new Comment(2, "Brush teeth", 2, "WENT_WELL"),
    new Comment(3, "Take a shower", 3, "WENT_WELL"),
    new Comment(4, "check e-mail", 4, "WENT_WELL"),
    new Comment(5, "walk dog", 5, "WENT_WELL")
  ];

  needToBeImproved = [
    new Comment(1, "Get to work", 1, "NEED_TO_BE_IMPROVED"),
    new Comment(2, "Pick up groceries", 2, "NEED_TO_BE_IMPROVED"),
    new Comment(3, "Go home", 3, "NEED_TO_BE_IMPROVED"),
    new Comment(4, "Fail sleep", 4, "NEED_TO_BE_IMPROVED")
  ];

  actionItems = [
    new Comment(1, "Create a CR for the release", 1, "ACTION_ITEMS"),
    new Comment(2, "For a release, align all stackholders", 2, "ACTION_ITEMS")
  ];

  //private comment: Comment;

  private id: number;

  private comments: Array<Comment> [];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log( event.container.data)
    } else {


      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  
    }
  }

  onVote(comm: Comment) {
    console.log(comm.commentType);
    if (comm.commentType == "WENT_WELL") {

      this.wentWell.filter(
        wentWellComment => {
        if (wentWellComment.id === comm.id) {
          wentWellComment.vote = wentWellComment.vote + 1;
        }
      });

    } else if (comm.commentType == "ACTION_ITEMS") {

      this.actionItems.filter(
        actionItem => {
        if (actionItem.id === comm.id) {
          actionItem.vote = actionItem.vote + 1;
        }
      });

    } else if (comm.commentType == "NEED_TO_BE_IMPROVED") {

      this.needToBeImproved.filter(
        needToBe => {
        if (needToBe.id === comm.id) {
          needToBe.vote = needToBe.vote + 1;
        }
      });
    }
  }

  addComment(comm: string, commetType: string) {

    if(comm!=''){
    if (commetType == "WENT_WELL") {

      this.id = Math.max(...this.wentWell.map(d => d.id)) + 1;
      this.wentWell.push(new Comment(this.id, comm, 0, commetType));
      this.comment_wentwell = '';

    } else if (commetType == "ACTION_ITEMS") {

      this.id = Math.max(...this.actionItems.map(d => d.id)) + 1;
      this.actionItems.push(new Comment(this.id, comm, 0, commetType));

      this.comment='';

    } else if (commetType == "NEED_TO_BE_IMPROVED") {

      this.id = Math.max(...this.needToBeImproved.map(d => d.id)) + 1;
      this.needToBeImproved.push(new Comment(this.id, comm, 0, commetType));
      this.comment_need = '';
    }
  }
  
  }

  deleteComment(comment: string) {
    comment = "";
  }

 
}
