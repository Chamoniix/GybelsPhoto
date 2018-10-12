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
  public postOfTheDay: Post;
  public pictureOfTheDay;

  constructor(public picOfTheDayService: PicOfTheDayService) {
    this.picOfTheDayService.getPostOfTheDay().subscribe( postData => {
      this.postOfTheDay = postData;
      this.picOfTheDayService.getPicBlobByPost(this.postOfTheDay).subscribe( pictureData => {
        this.initialisePictureOfTheDayFromBlob(pictureData);
      });
    });
  }

  ngOnInit() {
  }

  public closeNav() {
    this.isMenuOpened = false;
  }
  public openNav() {
    this.isMenuOpened = true;
  }

  public navigateTo(route: string) {
  }

  public initialisePictureOfTheDayFromBlob(imageBlob: Blob) {
    const reader = new FileReader();
    let image;
    reader.addEventListener('load', () => {
      image = reader.result;
      this.pictureOfTheDay = image;
    }, false);
    if (imageBlob) {
      reader.readAsDataURL(imageBlob);
    }
  }
}
