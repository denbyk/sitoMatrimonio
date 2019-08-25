import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-marriage',
  templateUrl: './after-marriage.component.html',
  styleUrls: ['./after-marriage.component.scss']
})
export class AfterMarriageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  openAlbumPage(choice) {
    switch (choice) {
      case 'google':
        window.open('https://photos.app.goo.gl/dU8GHLZc73WKXJYS9');
        break;
      case 'joy':
        window.open('https://joyphotographers.pixieset.com/elisaanddaniele/');
        break;
      default:
        break;
    }
  }

}
