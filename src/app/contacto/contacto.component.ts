import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    var AOS = require('aos');
    AOS.init();
  }

}
