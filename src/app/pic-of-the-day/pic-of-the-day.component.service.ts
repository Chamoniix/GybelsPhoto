import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PicOfTheDayService {

  constructor(private http: HttpClient) {

  }

  public loadPicOfTheDay() {
    // return this.http.get('http://localhost:8080/api/post/1');
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}
