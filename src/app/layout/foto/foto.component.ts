import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {
  sharedAlbumLink = 'https://photos.app.goo.gl/dU8GHLZc73WKXJYS9';

  constructor() { }

  ngOnInit() {
  }

  openAlbumPage() {
    window.open(this.sharedAlbumLink);
  }
}
