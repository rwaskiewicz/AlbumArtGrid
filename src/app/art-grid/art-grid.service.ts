import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AlbumFull } from '../dto/album-full';

@Injectable()
export class ArtGridService {
  allAlbums: AlbumFull[];

  constructor(private http: Http) { }

  // TODO: Cleanup
  getAlbum() {
    return this.http.get('src/app/stub-data/stub-album-full.json')
      .map((response: Response) => {
        return response.json()['items'].map((item) => {
          return item.album;
        });
      })
      .do((albums: AlbumFull[]) => {
        this.allAlbums = this.shuffleAlbums(albums);
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  private shuffleAlbums(albums: AlbumFull[]) {
    for (let currentIndex = albums.length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      const valuePlaceholder = albums[currentIndex];

      albums[currentIndex] = albums[randomIndex];
      albums[randomIndex] = valuePlaceholder;
    }
    return albums;
  }

  // TODO: WIP/ Note that is a public method!
  public getNextAlbum(): AlbumFull {
    const nextAlbum: AlbumFull = this.allAlbums.shift();
    this.allAlbums.push(nextAlbum);
    return nextAlbum;
  }
}
