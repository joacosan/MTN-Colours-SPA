import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  rutas: string[] = ['Graffiti & Fine Art', 'Caps','PRO','Edicion Limitada' ];
  constructor() { }

  ngOnInit(): void {
  }

}
