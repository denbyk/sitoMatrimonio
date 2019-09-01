import { Component, OnInit } from '@angular/core';

interface Professionals {
  description: string;
  logoClass: string;
}

@Component({
  selector: 'app-after-marriage',
  templateUrl: './after-marriage.component.html',
  styleUrls: ['./after-marriage.component.scss']
})
export class AfterMarriageComponent implements OnInit {

  professionals: Professionals[] = [
    {
      logoClass: 'fiori',
      description: 'descrizione fiori'
    },{
      logoClass: 'foto',
      description: 'descrizioni foto'
    },{
      logoClass: 'cibo',
      description: 'descrizioni cibo'
    },{
      logoClass: 'musica',
      description: 'descrizione musica'
    },{
      logoClass: 'inviti',
      description: 'descrizione inviti'
    }
  ];

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
