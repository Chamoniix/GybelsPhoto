import { Component, OnInit } from '@angular/core';
import {Post} from '../domain/post.class';
import {PicOfTheDayService} from './pic-of-the-day.component.service';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.css']
})
export class PicOfTheDayComponent implements OnInit {

  public isMenuOpened = false;
  public post = new Post();
  public imageToShow;
  public selectedFile: File;

  constructor(public picOfTheDayService: PicOfTheDayService) {
    this.post.id = 1;
    this.post.description = 'Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii ' +
      'adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet ' +
      'minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam' +
      'viri et inopes' +
      'quam opulenti et calamitosi quam ii qui putentur beati.';
    this.post.titre = 'Titre';
    this.post.url = 'src/ressources/img/wallhaven-680441.jpg'; // HUG_6032-1.jpg - MAR_5586.JPG wallhaven-680441.jpg
    this.post.date_creation = new Date();
    this.post.auteur = 'Hugo';
  }

  ngOnInit() {
    this.picOfTheDayService.loadPicOfTheDay().subscribe( data => {
      console.log(data);
    });
  }

  public closeNav() {
    this.isMenuOpened = false;
  }
  public openNav() {
    this.isMenuOpened = true;
  }

  public navigateTo(route: string) {
  }

  public getImage() {
    this.picOfTheDayService.getPicOfTheDayBlob().subscribe( data => {
      this.createImageFromBlob(data);
    });
  }

  public createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  public onUpload() {
    console.log(this.selectedFile);
  }

}
