import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('menuTrigger') trigger!: MatMenuTrigger;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.triggerMenu();
    }, 5000);
  }

  triggerMenu() {
    this.trigger.openMenu();
  }

}
