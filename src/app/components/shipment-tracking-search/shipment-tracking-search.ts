import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shipment-tracking-search',
  imports: [],
  templateUrl: './shipment-tracking-search.html',
  styleUrl: './shipment-tracking-search.scss',
})
export class ShipmentTrackingSearch {
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }
}
