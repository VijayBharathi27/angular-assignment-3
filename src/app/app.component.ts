import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  visibility = true;
  logs = [];
  onToggle() {
    this.logs.push(new Date());
    this.visibility = !this.visibility;
  }
}
