import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';

@Injectable()
export class PicOfTheDayService {

  private readonly URL = 'https://media.licdn.com/dms/image/C4D03AQG0ET1PmnqhLw/profile-displayphoto-shrink_200_200' +
    '/0?e=1544659200&v=beta&t=ajMB5xemWdVxnWiTFmgnD7E3jBpVflngK4btUZ6OL7Y';

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
