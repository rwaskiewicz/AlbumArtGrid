import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AlbumFull } from '../dto/album-full';

@Injectable()
export class ArtGridService {
  constructor(private http: Http) { }

  // TODO: Cleanup
  getAlbum(): Observable<AlbumFull[]> {
    return this.http.get('src/app/stub-data/stub-album-full.json')
      .map((response: Response) => {
        return response.json()['items'].map((item) => {
          return item.album;
        });
      })
      //.do((response) => console.log(response))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
