import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { select } from '@ngrx/store';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Nombre : string;
  Codigo : string;
}

@Component({
  selector: 'arbol-rubros',
  templateUrl: './arbol-rubros.component.html',
  styleUrls: ['./arbol-rubros.component.scss']
})
export class ArbolRubrosComponent{
  @Output() rubroSeleccionado = new EventEmitter();
  customColumn = 'Codigo';
  defaultColumns = [ 'Nombre'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  
  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) { 
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  onSelect(selectedItem: any) {
    console.log("Rubro Seleccionado es: ", selectedItem.data); 
    this.rubroSeleccionado.emit(selectedItem.data);

   }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Codigo: '1', Nombre: 'Rubro Padre'},
      children: [
        { data: { Codigo: '1-1', Nombre: 'Rubro Hijo 1' } },
        { data: { Codigo: '1-2', Nombre: 'Rubro Hijo 2' } },
        {
          data: { Codigo: '1-3', Nombre: 'Rubro Hijo 3' },
          children: [
            { data: { Codigo: '1-3-1', Nombre: 'Rubro Hijo 31' } },
            { data: { Codigo: '1-3-2', Nombre: 'Rubro Hijo 32' } },
            { data: { Codigo: '1-3-3', Nombre: 'Rubro Hijo 33' } },
          ],
        },
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
      ],
    },
    {
      data: { Codigo: 'Projects', Nombre: '1.8 MB' },
      children: [
        {
          data: { Codigo: 'Projects', Nombre: '1.8 MB' },
          children: [
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
          ],
        },
        {
          data: { Codigo: 'Projects', Nombre: '1.8 MB' },
          children: [
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
          ],
        },
      ],
    },
    {
      data: { Codigo: 'Projects', Nombre: '1.8 MB'},
      children: [
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}


@Component({
  selector: 'nb-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }

}