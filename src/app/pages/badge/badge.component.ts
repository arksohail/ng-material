import { Component, OnInit } from '@angular/core';
import { DesignUtilityServiceService } from 'src/app/services/design-utility-service.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  isHidden: boolean = false;
  hidden: boolean = false;
  itemCount: number = 0;

  constructor(private _du: DesignUtilityServiceService) {
    this._du.itemCount.subscribe(data => this.itemCount = data);
   }

  ngOnInit(): void {
  }

  addItemCount() {
    this._du.addItemCount();
  }
  
  removeItemCount() {
    if (this.itemCount) {
      this._du.removeItemCart();
    }
  }

}
