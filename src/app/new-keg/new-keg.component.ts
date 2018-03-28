import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();
  submitForm(name: string, label: string, price: number, alcohol: number, volume: number) {
    let newKeg: Keg = new Keg(name, label, price, alcohol, volume);
    console.log(newKeg);
    this.sendKeg.emit(newKeg);
  }
}
