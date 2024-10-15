import { Component } from '@angular/core';
import { provideTranslocoScope } from '@jsverse/transloco';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css',
  providers: [
    provideTranslocoScope(
      { scope: 'projects/BigExcelCreator/usage', alias: 'projects.BigExcelCreator.usage' },
      { scope: 'projects/BigExcelCreator', alias: 'projects.BigExcelCreator' }
    )
  ],
})
export class UsageComponent {
  public example: string = `using BigExcelCreator;

....

MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream, DocumentFormat.OpenXml.SpreadsheetDocumentType.Workbook))
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
}`;
}
