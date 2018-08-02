import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu = new EventEmitter<boolean>();

  public nightShift = false;

  constructor() { }

  ngOnInit() {
  }

  oppenedMenu() {
    this.openMenu.emit(true);
  }

  switchTheme() {
    this.nightShift = !this.nightShift;
  }

}
