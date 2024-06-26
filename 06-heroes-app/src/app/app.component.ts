import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,

    RouterOutlet,
    SharedModule,
    MaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-heroes-app';

  constructor(private authService:AuthService){}

  ngOnInit(): void{
    this.authService.checkAuthentication().subscribe(
    () => {
      console.log('checkAuthentication');
    }
    );
  }
}
