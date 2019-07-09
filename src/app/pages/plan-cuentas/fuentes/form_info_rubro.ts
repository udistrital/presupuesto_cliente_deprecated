export let FORM_INFO_RUBRO = {
    
    tipo_formulario: 'mini',
   
    alertas: true,
    modelo: 'RubroHijo',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'ValorFuente',
            label_i18n: 'Valor Fuente',
            placeholder_i18n: '$',
            requerido: true,
            tipo: 'number',
            prefix: {
                value: '',
            }
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'CodigoFuente',
            label_i18n: 'Codigo Fuente',
            placeholder_i18n: 'Codigo de Fuente de Financiamiento',
            requerido: true,
            pattern: '^[1-9]{1,9}',
            tipo: 'number',
            prefix: {
                value: '',
            }
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'NombreFuente',
            label_i18n: 'Nombre Fuente',
            placeholder_i18n: 'Nombre de Fuente de Financiamiento',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Descripcion',
            label_i18n: 'Descripcion',
            placeholder_i18n: 'Descripcion',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroDoc',
            label_i18n: 'Número Documento',
            placeholder_i18n: '',
            requerido: true,
            tipo: 'number',
            prefix: {
                value: '',
            }
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoDocumento',
            label_i18n: 'Tipo Documento',
            placeholder_i18n: 'Tipo Documento',
            requerido: true,
            tipo: 'TipoDocumento',
            key: 'Valor',
            opciones: [
                {Valor: "ACTA"},
                {Valor: "RESOLUCION"},
                {Valor: "CONTRATO"}
            ],
        },        
        {
            etiqueta: 'mat-date',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'FechaDocumento',
            label_i18n: 'Fecha Documento',
            placeholder_i18n: 'Fecha Documento',
            requerido: true,
        },        
    ],
}