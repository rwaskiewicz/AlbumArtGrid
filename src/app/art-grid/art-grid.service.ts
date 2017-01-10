import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AlbumFull } from '../dto/album-full';

@Injectable()
export class ArtGridService {
  constructor(private http: Http) { }

  getAlbum(): Observable<AlbumFull> {
    return this.http.get('app/stub-data/stub-album-full.json')
      .map((response: Response) => <AlbumFull>response.json()['items'])
      .do(data => console.log('Album: ' + JSON.stringify(data)));
  }
}
