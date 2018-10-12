import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Post} from '../domain/post.class';

@Injectable()
export class PicOfTheDayService {

  private readonly URL = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {

  }

  public getPostOfTheDay(): Observable<any> {
    return this.http.get(this.URL + '/post');
  }

  public getPicBlobByPost(post: Post): Observable<Blob> {
    return this.http
      .get(`${this.URL + '/image/' + post.id}`, {
        responseType: 'blob'
      });
  }
}
