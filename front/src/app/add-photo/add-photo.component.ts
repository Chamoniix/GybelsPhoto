import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public selectedFile: File;
  public selectedFileName: string;

  constructor() { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    this.selectedFileName = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (eventUrl) => {
      this.selectedFile = eventUrl.target.result;
    };
  }

  public onUpload() {
    console.log(this.selectedFile);
  }

}
