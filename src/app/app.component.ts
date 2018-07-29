import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Post } from './post.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isMenuOpened = false;

  title = 'Gybels Photo';
  private post = new Post();

  constructor(private http: Http) {
    this.post.id = 1;
    this.post.description = 'Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii ' +
      'adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet ' +
      'minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam' +
      'viri et inopes' +
      'quam opulenti et calamitosi quam ii qui putentur beati.';
    this.post.titre = 'Le chaton';
    this.post.url = 'src/ressources/img/HUG_6032-1.jpg'; //HUG_6032-1.jpg - MAR_5586.JPG
    this.post.date = new Date();
    this.post.auteur = 'Hugo'
    this.getData();
  }

  private getData() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe( data => {
      console.log(data);
    });
  }

  public closeNav() {
    this.isMenuOpened = false;
  }
  public openNav() {
    this.isMenuOpened = true;
  }
  public isoppened() {
    if (this.isMenuOpened) {
      return '--active';
    } else {
      return '';
    }
  }
}
