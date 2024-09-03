import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityServiceService {
  itemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  addItemCount() {
    this.itemCount.next(this.itemCount.value + 1);
  }
  removeItemCart() {
    this.itemCount.next(this.itemCount.value - 1);
  }
}
