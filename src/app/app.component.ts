import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  visibility = true;
  logs = [];
  n = 0;
  onToggle() {
    this.logs.push(++this.n);
    this.visibility = !this.visibility;
  }
}
