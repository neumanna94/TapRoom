import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  console.log("hi");
  title = 'Simple Microbrewery'; //Title property of app.component.html
  masterKegList: Keg[] = [
    new Keg("One", "BrandOne", 50, .2, 10),
    new Keg("Two", "BrandTwo", 100, .4, 20)
  ];
}
