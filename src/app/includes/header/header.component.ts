import { Component, OnInit } from '@angular/core';
import { DesignUtilityServiceService } from 'src/app/services/design-utility-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemCount: number = 0;

  constructor(private _du: DesignUtilityServiceService) {
    this._du.itemCount.subscribe(data => this.itemCount = data)
  }

  ngOnInit(): void {
  }

}
