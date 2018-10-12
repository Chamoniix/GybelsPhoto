import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { MenuComponent } from './menu/menu.component';
import { KezakoComponent } from './kezako/kezako.component';
import { GalerieComponent } from './galerie/galerie.component';
import {HttpClientModule} from '@angular/common/http';
import {PicOfTheDayService} from "./pic-of-the-day/pic-of-the-day.component.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pic-of-the-day',
    pathMatch: 'full'
  },
  {
    path: 'pic-of-the-day',
    component: PicOfTheDayComponent
  },
  {
    path: 'add-photo',
    component: AddPhotoComponent
  },
  {
    path: 'kezako',
    component: KezakoComponent
  },
  {
    path: 'galerie',
    component: GalerieComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PicOfTheDayComponent,
    AddPhotoComponent,
    MenuComponent,
    KezakoComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppComponent, PicOfTheDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
