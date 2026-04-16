using BigExcelCreator;
using BigExcelCreator.ClassAttributes;
using BigExcelCreator.Enums;
using System.Collections.Generic;
using System.IO;

// Define in the Product class the attributes to configure the Excel sheet generation.
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

    // Ignored property, it will not be included in the Excel sheet.
    [ExcelIgnore]
    public string InternalCode { get; set; } = string.Empty;
}

// Create a list of objects with the data to write in the sheet.
var data = new List<Product>
{
    new Product { Id = 1, Name = "Pen", Stock = 250, Price = 1.25m, InternalCode = "PEN-001" },
    new Product { Id = 2, Name = "Notebook", Stock = 120, Price = 4.50m, InternalCode = "NB-014" },
    new Product { Id = 3, Name = "Desk Lamp", Stock = 45, Price = 18.75m, InternalCode = "DL-007" },
};

using MemoryStream stream = new();
using (BigExcelWriter excel = new(stream))
{
    // Create a new sheet from the object list using the type's property attributes.
    excel.CreateSheetFromObject(data, "Products");

    // or, if you want to specify additional options, you can, for example use the overload:
    excel.CreateSheetFromObject(data, "Products", useSharedStringsOnTextData: false, addAutoFilterOnFirstColumn: true);
}
