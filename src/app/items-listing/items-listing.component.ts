import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-items-listing',
  templateUrl: './items-listing.component.html',
  styleUrls: ['./items-listing.component.css']
})
export class ItemsListingComponent implements OnInit {
  @Input() pages: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
