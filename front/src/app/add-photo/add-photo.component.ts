import { Component, OnInit } from '@angular/core';
import {Post} from '../domain/post.class';
import {AddPhotoService} from './add-photo.component.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public selectedFile: File;
  public selectedFileName: string;
  public isFileSelected = false;
  public uploadPost: Post;
  private addPhotoService: AddPhotoService;

  constructor(addPhotoService: AddPhotoService) {
    this.uploadPost = new Post(null, null, null, null, 'user');
    this.addPhotoService = addPhotoService;
  }

  ngOnInit() {
  }

  public onFileChanged(event) {
    this.selectedFileName = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (eventUrl) => {
      const target: any = eventUrl.target;
      this.selectedFile = target.result;
    };
  }

  public goToStepTwo() {
    this.isFileSelected = true;
  }

  public uploadPicture() {
    this.uploadPost.dateCreation = new Date();
    console.log(this.uploadPost);
    this.addPhotoService.uploadPost(this.uploadPost).subscribe( data => {
      console.log(data);
      this.addPhotoService.updloadImage(this.selectedFile).subscribe(data2 => {
        console.log(data2);
      });
    });
  }
}
