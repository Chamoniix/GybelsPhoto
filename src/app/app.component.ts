import { Component } from '@angular/core';
import { Post } from './post.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Gybels Photo';
  private post = new Post();

  constructor() {
    this.post.id = 1;
    this.post.description = 'Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam viri et inopes quam opulenti et calamitosi quam ii qui putentur beati.';
    this.post.titre = 'Le chaton';
    this.post.url = 'src/ressources/img/MAR_5586.JPG';
    this.post.date = new Date();
  }


}
