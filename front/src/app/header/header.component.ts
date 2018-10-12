import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showMenu = false;
  public nightShift = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  switchTheme() {
    this.nightShift = !this.nightShift;
  }

}
