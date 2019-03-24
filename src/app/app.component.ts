import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sitoMatrimonio';
  isLocked = true;

  submitPassword(password: string) {
    if (password === 'a') {
      alert('password giusta');
    }
  }
}
