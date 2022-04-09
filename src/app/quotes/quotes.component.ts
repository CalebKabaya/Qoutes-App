import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,'Caleb M Kabaya','Whatever you do – give it 100%','Martin L. King',0,0),
    new Quote(2,'Caleb M Kabaya','Facetime before you meet up','James K.',1,0),
    new Quote(3,'Caleb M Kabaya','Take a break from dating when exhausted','Elizabeth Olsen',0,0)
  ]
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }
  arr: number[]=this.quotes.map(quote=>quote.upvotes)
  highest=Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
