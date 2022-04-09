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
  constructor() { }

  ngOnInit(): void {
  }

}
