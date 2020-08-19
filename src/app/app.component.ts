import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase-auth-project';

  constructor(private loginService: AuthService) {}

  ngOnInit() {
    this.loginService.autoLogin();
  }
}
