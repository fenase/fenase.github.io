using BigExcelCreator;

....

MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream))
{
    excel.CreateAndOpenSheet("Sheet Name");

    // Se pueden escribir celdas una por una.
    excel.BeginRow();
    excel.WriteTextCell("Cell content");
    excel.WriteTextCell(123); // escribir como número. Esto permite el uso de fórmulas.
    excel.WriteTextCell(456);
    excel.WriteFormulaCell("SUM(B1:C1)");
    excel.EndRow();

    // O escribir una fila completa a la vez.
    excel.WriteTextRow(new[] { "Texto de la celda", "Otro texto", "Más texto" });
    excel.WriteNumberRow(new[] { 123, 456, 789 });
    excel.BeginRow(true);
    excel.WriteTextCell("Esta fila está oculta");
    excel.EndRow();
    excel.CloseSheet();
}
