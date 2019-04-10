import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sitoMatrimonio';
  isLocked = true;
  @ViewChild('passwordInput') passwordInput;


  ngOnInit() {
    this.isLocked = !Boolean(localStorage.getItem('token'));
  }

  submitPassword(password: string) {
    // if you get here, well done.
    if (password.toUpperCase() === 'cocitoap2'.toUpperCase()) {
      this.isLocked = false;
      localStorage.setItem('token', 'true');
    } else {
      alert('password errata, spiacente');
    }
  }

  enterPasswordInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.submitPassword(this.passwordInput.nativeElement.value);
    }
  }
}
