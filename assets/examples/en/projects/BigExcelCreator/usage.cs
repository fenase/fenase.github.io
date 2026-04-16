using BigExcelCreator;

....

MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream))
{
    excel.CreateAndOpenSheet("Sheet Name");

    // You can write cells one by one.
    excel.BeginRow();
    excel.WriteTextCell("Cell content");
    excel.WriteTextCell(123); // write as number. This allows to use formulas.
    excel.WriteTextCell(456);
    excel.WriteFormulaCell("SUM(B1:C1)");
    excel.EndRow();

    // Or write an entire row at once.
    excel.WriteTextRow(new[] { "Cell content", "Other text", "More text" });
    excel.WriteNumberRow(new[] { 123, 456, 789 });
    excel.BeginRow(true);
    excel.WriteTextCell("This row is hidden");
    excel.EndRow();
    excel.CloseSheet();
}
