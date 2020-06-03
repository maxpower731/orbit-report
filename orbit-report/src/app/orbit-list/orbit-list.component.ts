import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../Satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

//

export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];
  zebraRow: boolean;

  constructor() {
    this.zebraRow = false;
  }

  ngOnInit(): void {

  }

  sort(column: string): void {
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      if(a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

  zebraRowFunction(): boolean {
    this.zebraRow = !this.zebraRow;
    return this.zebraRow;
  }


}
