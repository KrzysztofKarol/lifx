import { Component } from '@angular/core';
import { TokenComponent } from './token';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TokenComponent],
})
export class AppComponent {
}
