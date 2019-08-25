import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  passwordString: string = '';
  title = 'sitoMatrimonio';
  TOKEN = 'super-secret-token';
  isLocked = true;
  @ViewChild('passwordInput') passwordInput;


  ngOnInit() {
    this.isLocked = !Boolean(localStorage.getItem(this.TOKEN));
  }

  submitPassword(event) {
    // if you get here, well done. You found out the password. :P Not a very secure one, I know.
    if (this.checkPassword(event)) {
      this.pwdOk();
    }
  }

  enterPasswordInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const pwd = this.passwordInput.nativeElement.value;
      if (this.checkPassword(pwd)) {
        this.pwdOk();
      } else {
        alert('password errata, spiacente');
      }
    }
  }

  private checkPassword(password: string): boolean {
    return password.replace(/\s/g , '').toUpperCase() === 'cocitoap2'.toUpperCase();
  }

  private pwdOk() {
    this.isLocked = false;
    localStorage.setItem(this.TOKEN, 'true');
  }
}
