import { Component, OnInit } from '@angular/core';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { PipeTransform, Pipe } from '@angular/core';

export let FORM_DEPENDENCIA_RUBRO = {
  titulo: 'DependenciaRubro',
  tipo_formulario: 'mini',
  btn: 'add-dependencia',
  alertas: true,
  modelo: 'DependenciaRubro',
  campos: [
    {
      etiqueta: 'select',
      claseGrid: 'col-6',
      nombre: 'dependencia',
      label: 'dependencia',
      placeholder: 'dependencia',
      requerido: true,
      tipo: 'Dependencia',
      key: 'Nombre',
      templateOptions: {
        change: (field, $event) => {
          console.log(field)
        }
      },
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-6',
      nombre: 'Valor',
      label: 'valor',
      placeholder: 'valor',
      requerido: true,
      tipo: 'number',
    },
  ],
}

@Component({
  selector: 'fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})

export class FuentesComponent implements OnInit {
  formInfoRubro: any;
  rubroSeleccionado: any;
  info_rubro: Rubro;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {}
  dependenciaSeleccionada: any;

  formDependenciarubro = FORM_DEPENDENCIA_RUBRO;

  constructor(private translate: TranslateService, private dependenciaHelper: DependenciaHelper) {
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
    this.dependenciaHelper.get().subscribe((res: any) => {
      console.info(res);
      this.formDependenciarubro.campos[0].opciones = res;
      this.dependencias = res;
    });
  }

  ngOnInit() { }

  validarForm(event) {
    console.info("event", event);
  }

  asignarDependencia($event: any, rubro: Rubro) {
    console.info()
    this.verificarAsignacionDependencia(rubro, this.dependencias[$event]);
  }
  
  verificarAsignacionDependencia(rubro: Rubro, dependenciaAsignada: any) {
    this.rubrosAsignados.filter((data) => {
      if (data === rubro) {
        console.log(data['Dependencias'])
        console.log(data['Dependencias'][0])
        for (let i = 0; i < data['Dependencias'].length; i++) {
          if (data['Dependencias'][i] === -1) {
            data['Dependencias'][i] = dependenciaAsignada;
          }
        }
      }
    });
  }

  agregarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter((data) => {
    (data === rubro ); data['Dependencias'].push(-1)
    });
  }

  receiveMessage($event) {
    if (this.rubrosAsignados.filter((data) => (data.Codigo === $event.Codigo)).length === 0) {
      $event['Dependencias'] = [-1];
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
    }
  }


  cleanForm() {}

  registrar() {
    console.log(this.rubrosAsignados);
  }

  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }

    // this.formDependenciarubro.btn = this.translate.instant('FUENTE_FINANCIAMIENTO.add-dependencia');
    // for(let i = 0; i < this.formDependenciarubro.campos.length; i++) {
    //   this.formDependenciarubro.campos[i].label = this.translate.instant('GLOBAL.'+this.formDependenciarubro.campos[i].label);
    //   this.formDependenciarubro.campos[i].placeholder = this.translate.instant('GLOBAL.'+ this.formDependenciarubro.campos[i].placeholder);
    // }
  }

}
