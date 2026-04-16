using BigExcelCreator;
using BigExcelCreator.ClassAttributes;
using BigExcelCreator.Enums;
using System.Collections.Generic;
using System.IO;

// Definir en la clase Product los atributos para configurar la generación de la hoja de Excel.
public class Product
{
    [ExcelColumnOrder(0)]
    [ExcelColumnName("Product Id")]
    [ExcelColumnType(CellDataType.Number)]
    [ExcelColumnWidth(10)]
    public int Id { get; set; }

    [ExcelColumnOrder(1)]
    [ExcelColumnName("Product Name")]
    [ExcelColumnType(CellDataType.Text)]
    [ExcelColumnWidth(25)]
    public string Name { get; set; } = string.Empty;

    [ExcelColumnOrder(3)]
    [ExcelColumnName("Stock")]
    [ExcelColumnType(CellDataType.Number)]
    [ExcelColumnWidth(12)]
    public int Stock { get; set; }

    [ExcelColumnOrder(4)]
    [ExcelColumnName("Price")]
    [ExcelColumnType(CellDataType.Number)]
    [ExcelColumnWidth(12)]
    public decimal Price { get; set; }

    // Propiedad ignorada, no se incluirá en la hoja de Excel.
    [ExcelIgnore]
    public string InternalCode { get; set; } = string.Empty;
}

// Crear una lista de objetos con los datos a escribir en la hoja.
var data = new List<Product>
{
    new Product { Id = 1, Name = "Bolígrafo", Stock = 250, Price = 1.25m, InternalCode = "PEN-001" },
    new Product { Id = 2, Name = "Cuaderno", Stock = 120, Price = 4.50m, InternalCode = "NB-014" },
    new Product { Id = 3, Name = "Lámpara", Stock = 45, Price = 18.75m, InternalCode = "DL-007" },
};

using MemoryStream stream = new();
using (BigExcelWriter excel = new(stream))
{
    // Crea una nueva hoja a partir de la lista de objetos usando los atributos en la clase.
    excel.CreateSheetFromObject(data, "Products");

    // o, si querés especificar opciones adicionales, puedes usar, por ejemplo, la sobrecarga:
    excel.CreateSheetFromObject(data, "Products", useSharedStringsOnTextData: false, addAutoFilterOnFirstColumn: true);
}
