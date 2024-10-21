import"./chunk-2R6CW7ES.js";var o={basic:"Cuando invoque <code>CreateAndOpenSheet</code>, utilice una <code>IList&lt;Column&gt;</code> como segundo par\xE1metro. Cada elemento representa una \xFAnica columna. S\xF3lo se utilizan los valores de <code>CustomWidth</code>, <code>Width</code> y <code>Hidden</code>.",width:"<code>Width</code> representa el ancho de la columna en caracteres (La misma unidad que muestra Excel cuando se redimensiona una columna).",CustomWidth:"<code>CustomWidth</code> permite el uso de <code>Width</code>.",Hidden:"<code>Hidden</code> oculta la columna."},d={basic:"<code>CreateAndOpenSheet</code> acepta como tercer par\xE1metro una variable de tipo <code>SheetStateValues</code>.",Visible:'<code>SheetStateValues.Visible</code> (predeterminado): La hoja se marca como "visible"',Hidden:"<code>SheetStateValues.Hidden</code>: Se oculta la hoja",VeryHidden:"<code>SheetStateValues.VeryHidden</code>: Se oculta la hoja y no puede mostrarse desde la interfaz de Excel"},r={basic:"Para unir un rango de celdas (mientras la hoja est\xE1 abierta), use <code>MergeCells</code> con el rango deseado."},n={basic:"Primero se deben crear los elementos que definen un estilo (fuente (font), relleno (fill), borde (border) y, opcionalmente, formato num\xE9rico (numbering format)).",insert:"Luego, se puede crear una nueva lista de estilos para insertar los estilos creados. Recuerde darle nombre a los estilos.",useName:"Cuando cree una nueva instancia de <code>BigExcelWriter</code>, use el resultado de llamar a <code>GetStylesheet</code> como el par\xE1metro <code>stylesheet</code>. Luego, cuando escriba una celda, puede usar el nombre indicado anteriormente para darle formato.",note:{p1:`Si est\xE1 planeando usar <a href='{{aHrefLink}}'>{{projects.BigExcelCreator.Conditional Formatting}}</a>, tambi\xE9n debe crear aqu\xED los "estilos diferenciales" (differential styles). Para hacerlo, siga las mismas instrucciones indicadas m\xE1s arriba, reemplazando <code>NewStyle</code> por <code>NewDifferentialStyle</code>.`,p2:"Todos los par\xE1metros de <code>NewDifferentialStyle</code> son opcionales, excepto <code>name</code>. De los par\xE1metros opcionales, al menos uno debe estar presente."}},c={basic:'Para agregar una nota (anteriormente conocidas como "comentario") en una celda, mientras la hoja se encuentra abierta, utilice el m\xE9todo <code>Comment</code>.'},l={basic:"Para agregar un autofiltro, utilice <code>AddAutofilter</code> mientras se encuentra en una hoja."},i={ColumnFormatting:o,HideSheet:d,MergeCells:r,Styling:n,Comments:c,Autofilter:l,"Conditional Formatting":{basic:"Para crear formato condicional, debe definir los estilos diferenciales (Differential styles) (ver <a href='{{aHrefLink}}'>Styling</a>)",note:{"On every case below":"Para todas las opciones, lo siguiente aplica",Reference:"<code>reference</code> \u21D2 El rango de celdas a las que se les aplicar\xE1 el formato condicional",Format:"<code>format</code> \u21D2 El Id del estilo diferencial. Obt\xE9ngalo utilizando <code>GetIndexDifferentialByName</code> luego de crearlo con <code>NewDifferentialStyle</code>"},Formula:{title:"F\xF3rmula",basic:"Para definir el formato condicional mediante el uso de una f\xF3rmila, use <code>AddConditionalFormattingFormula(string reference, string formula, int format)</code>.",formula:'<code>formula</code> define la expresi\xF3n a usar. Use un rango fijo con <code>$</code> para anclar la referencia a una celda. Evite usar <code>$</code> para hacer que la referencia "camine" con el rango. Esto es \xFAtil cuando se desea referenciar posiciones relativas a la celda a formatear.'},"Cell Is":{title:"Valor de una celda (Cell Is)",basic:"De formato a una celda en base a su contenido usando <code>AddConditionalFormattingCellIs</code>",Operator:"<code>Operator</code> define c\xF3mo comparar valores.",value:"<code>value</code> define el valor con el que se comparar\xE1 la celda.",value2:"<code>value2</code> si el operador requiere 2 n\xFAmeros (ej: <code>Between</code> (entre) y <code>NotBetween</code> (no entre)), el segundo valor va ac\xE1."},"Duplicated Values":{title:"Valores Duplicados (Duplicated Values)",basic:"De formato a los valores duplicados usando <code>AddConditionalFormattingDuplicatedValues</code>"}}};export{l as Autofilter,o as ColumnFormatting,c as Comments,d as HideSheet,r as MergeCells,n as Styling,i as default};
