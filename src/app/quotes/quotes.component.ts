
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  // title: 'Quotes';
  quotes: Quotes[] = [
    new Quotes(1, 'Henry David Thoreau', 'Go confidently in the direction of your dreams, Live the life you have imagined', 'Esther', new Date(2021, 4, 22), 67, 5),
    new Quotes(2, 'Mae West', 'You only live once, but if you do it right, once is enough', 'Marion', new Date(2018, 7, 22),220,30),
    new Quotes(3, 'Mother Teresa', 'In this life we cannot do great things. We can only do small things with great love.', 'Lucy', new Date(2021, 8, 22),167,89),
    new Quotes(4, 'Tony Robbins', 'The only impossible journey is the one you never begin', 'Stacey', new Date(2021, 7, 22),57,89),
    new Quotes(5, 'Maya Angelou', 'You will face many defeats in life, but never let yourself be defeated', 'Esther', new Date(2018, 7, 10),56,76),
    new Quotes(6, 'Abraham Lincoln', 'In the end, it is not the years in your life that count.It is the life in your years', 'Brenda', new Date(2020, 6, 22),303,56),
  ];

  toggleDetails(index:any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  deleteQuote(isComplete:any, index:any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
      if (toDelete) {
        this.quotes.slice(index,1)
      }
    }
  }

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
