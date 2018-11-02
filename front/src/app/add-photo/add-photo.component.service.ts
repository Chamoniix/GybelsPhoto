import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Post} from '../domain/post.class';

@Injectable()
export class AddPhotoService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private readonly URL = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {
  }

  public uploadPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.URL + '/post', post, this.httpOptions);
  }

  public getPicBlobByPost(post: Post): Observable<Blob> {
    return this.http
      .get(`${this.URL + '/image/' + post.id}`, {
        responseType: 'blob'
      });
  }
}
