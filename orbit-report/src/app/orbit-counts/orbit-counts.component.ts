import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../Satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  satelliteTypes: string[];
  satObj: object;

  constructor() {

  }

  ngOnInit(): void {

  }

  buildSatObj(): void {
    this.satObj = {};
    this.satelliteTypes = [];
    console.log('buildSatObj ran');
    this.satellites.forEach(element => {
      if (!this.satelliteTypes.includes(element.type)) {
        this.satelliteTypes.push(element.type);
      }

      if (this.satObj[element.type] === undefined) {
        this.satObj[element.type] = 1;
      } else {
        this.satObj[element.type]++;
      }
    });
  }

  // buildSatelliteTypes(): void {
  //   this.satelliteTypes = [];
  //     this.satellites.forEach(element => {
  //       if (!this.satelliteTypes.includes(element.type)) {
  //         this.satelliteTypes.push(element.type);
  //       }
  //   });
  // }

  // countFunction(type: string): number {
  //   let count = 0;
  //   this.satellites.forEach(element => {
  //     if(element.type.toLowerCase() === type.toLowerCase()){
  //       count++;
  //     }
  //   });
  //   return count;
  // }

}
