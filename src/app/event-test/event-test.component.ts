import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})

export class EventTestComponent implements OnInit {
  countClicks = 0;
  constructor() { }

  ngOnInit(){}

  addClicks(){
    this.countClicks++;
  }

  removeClicks(){
    this.countClicks--;
  }
}
