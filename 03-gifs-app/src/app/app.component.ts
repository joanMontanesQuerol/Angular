import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { GifsModule } from './gifs/gifs.module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule ,RouterOutlet, SharedModule, GifsModule, HttpClientModule]
})
export class AppComponent {
  title = 'gifs-app';
}
