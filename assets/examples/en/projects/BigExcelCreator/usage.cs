using BigExcelCreator;

....

MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream))
{
    excel.CreateAndOpenSheet("Sheet Name");
    excel.BeginRow();
    excel.WriteTextCell("Cell content");
    excel.WriteTextCell(123); // write as number. This allows to use formulas.
    excel.WriteTextCell(456);
    excel.WriteFormulaCell("SUM(B1:C1)");
    excel.EndRow();
    excel.BeginRow(true);
    excel.WriteTextCell("This row is hidden");
    excel.EndRow();
    excel.CloseSheet();
}
