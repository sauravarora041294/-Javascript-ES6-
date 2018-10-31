import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new Headers({'Content-Type': 'application/json' })
};

@Injectable()

export class AjaxService {

  constructor( public http: HttpClient ) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }

  public getUserById(id): Observable<any> {
    return this.http.get('http://localhost:3000/' + id);
  }

  public createUser(body): Observable<any> {
    return this.http.post('http://localhost:3000/', body);
  }

  public deleteUser(userId: number): Observable<any> {
    return this.http.delete('http://localhost:3000/' + userId);
  }

  public updateUser(userId, body): Observable<any> {
    return this.http.put('http://localhost:3000/' + userId, body);
  }
}
