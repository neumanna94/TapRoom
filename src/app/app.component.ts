import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Microbrewery'; //Title property of app.component.html
  masterKegList: Keg[] = [
    new Keg("One", "BrandOne", 50, .2, 10),
    new Keg("Two", "BrandTwo", 100, .4, 20)
  ];
  addKeg(newKeg: Keg) {
    console.log("AddKeg run");
    this.masterKegList.push(newKeg);
  }
}
