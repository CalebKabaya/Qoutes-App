import { Component, EventEmitter, OnInit, Output,Directive,Pipe } from '@angular/core';
import { Quote } from '../quote';
import { LikebuttonsComponent } from '../likebuttons/likebuttons.component';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,'Caleb M Kabaya','Whatever you do – give it 100%','Martin L. King',0,0,new Date()),
    new Quote(2,'Caleb M Kabaya','Facetime before you meet up','James K.',6,0,new Date(2020,3,14)),
    new Quote(3,'Caleb M Kabaya','Take a break from dating when exhausted','Elizabeth Olsen',0,0,new Date(2020,3,14))
  ]
  addNewQuote(quotes:any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quotes)
    
  }
  
  deleteQuote(i:any) {
    this.quotes.splice(i, 1)
  }
 

  arr: number[]=this.quotes.map(quote=>quote.numberOfUpvotes)
  highest=Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}

