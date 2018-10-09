import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';

@Injectable()
export class PicOfTheDayService {

  private readonly URL = 'http://localhost:8080/api/image';

  constructor(private http: HttpClient) {

  }

  public loadPicOfTheDay() {
    // return this.http.get('http://localhost:8080/api/post/1');
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public getPicOfTheDayBlob(): Observable<Blob> {
    return this.http
      .get(`${this.URL}`, {
        responseType: 'blob'
      });
  }
}
