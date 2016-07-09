import { Component, OnInit } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { LocalStorage } from 'angular2-localstorage/WebStorage';

@Component({
  moduleId: module.id,
  selector: 'app-token',
  templateUrl: 'token.component.html',
  styleUrls: ['token.component.css'],
  directives: [MD_INPUT_DIRECTIVES],
})
export class TokenComponent implements OnInit {

  @LocalStorage() public token: string = '';

  constructor() {}

  ngOnInit() {
  }

}
