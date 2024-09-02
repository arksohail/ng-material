import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;
  radius:number = NaN;
  color = "";
  trigger = false;

  constructor() { }

  ngOnInit(): void {
  }

}
