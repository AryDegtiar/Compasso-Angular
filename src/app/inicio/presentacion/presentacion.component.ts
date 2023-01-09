import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentacionComponent implements OnInit{

    constructor() { }

    ngOnInit() {
      var AOS = require('aos');
      AOS.init();
    }

}
