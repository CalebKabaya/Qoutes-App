import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
import { LikebuttonsComponent } from '../likebuttons/likebuttons.component';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,'Caleb M Kabaya','Whatever you do – give it 100%','Martin L. King',0,0),
    new Quote(2,'Caleb M Kabaya','Facetime before you meet up','James K.',0,0),
    new Quote(3,'Caleb M Kabaya','Take a break from dating when exhausted','Elizabeth Olsen',0,0)
  ]
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }
  // upVotes(upvotes:any){
  //   let upvotesLength = this.quotes.length;
  //   upvotes.id = upvotesLength++;
  //   // goal.completeDate = new Date(goal.completeDate)
  //   this.quotes.push(upvotes)
  // }

  // @Output() isComplete = new EventEmitter<boolean>();

  // qouteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  // deleteQuote(isComplete:any, index:any){
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

  //     if (toDelete){
  //       this.quotes.splice(index,1)
  //     }
  //   }
  // }
  deleteQuote(i:any) {
    this.quotes.splice(i, 1)
  }
  // upvotes:number=0
  // downvotes:number=0

  // upvotesClick() {
  //   this.upvotes++;
  // }
  // downvotesClick() {
  //   this.downvotes--;
  // }
  
  arr: number[]=this.quotes.map(quote=>quote.upvotes)
  highest=Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}

