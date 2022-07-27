import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor(){}
   
  ngOnInit() {}

  
  scrollToTop() {
    setTimeout(() => window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }),100);
  }


}
