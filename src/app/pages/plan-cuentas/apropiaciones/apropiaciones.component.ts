import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../../@core/data/models/rubro';

@Component({
  selector: 'apropiaciones',
  templateUrl: './apropiaciones.component.html',
  styleUrls: ['./apropiaciones.component.scss']
})
export class ApropiacionesComponent implements OnInit {
  rubroSeleccionado : any;
  apropiacionAprobada : boolean;
  validado=false;
  constructor() {
    this.rubroSeleccionado = {
      Codigo: '',
      Nombre: '',
      };
   }

  ngOnInit() {
  }

  receiveMessage($event) {
    console.log($event);
    this.rubroSeleccionado = <Rubro>$event

    console.log(this.rubroSeleccionado);
  }

  aprobarApropiacion(){
    this.apropiacionAprobada = true;
  }


  onClose(){
    this.apropiacionAprobada = false;
  }
}
