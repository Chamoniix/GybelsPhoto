import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public selectedFile: File;

  constructor() { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  public onUpload() {
    console.log(this.selectedFile);
  }

}
