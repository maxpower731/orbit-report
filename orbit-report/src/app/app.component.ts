import { Component } from '@angular/core';
import { Satellite } from './Satellite'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  

  constructor() {
    this.sourceList = [];
    this.displayList = [];

    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
        const satellites = [];

        let fetchedSatellites = data.satellites;

        fetchedSatellites.forEach(element => {
          satellites.push(new Satellite(element.name, element.type, element.launchDate, element.orbitType, element.operational));
        });

        this.sourceList.push(...satellites);

        this.displayList = this.sourceList.slice();
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      let type = this.sourceList[i].type.toLowerCase();
      if (name.indexOf(searchTerm) >= 0 || type.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }

}
