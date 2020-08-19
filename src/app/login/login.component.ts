import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSignIn() {
    this.authService.signInWithGoogle().then((result) => {
      this.authService.setAuthStatus(true);
      localStorage.setItem('authenticated', String(true));
      this.router.navigate(['/']);
    });
  }
}
