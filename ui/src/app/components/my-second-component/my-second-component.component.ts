import { Component, OnInit } from '@angular/core';

import { EchoService } from '../../services/echo.service';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {

  message = '';

  constructor(private echoService: EchoService) {
  }

  ngOnInit() {
    this.message = this.echoService.echo('Testing, testing... 1-2-3.');
  }
}
