import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() showMenu: boolean;
  @Output() closeMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public isOpened() {
      if (this.showMenu) {
        return '--active';
      } else {
        return '';
      }
    }

  public closeMenu() {
    this.closeMenuEmitter.emit();
  }

}
