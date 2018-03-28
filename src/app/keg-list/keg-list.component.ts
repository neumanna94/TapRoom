import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
//https://stackoverflow.com/questions/39302871/filter-and-sort-a-javascript-array
@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByInput: string = "alpha";

  editButtonClicked(kegToEdit: Keg) {
    console.log(kegToEdit);
    this.clickSender.emit(kegToEdit);

  }
  onChange(optionFromMenu) {
    this.filterByInput = optionFromMenu;
    console.log(this.filterByInput);
  }
}
