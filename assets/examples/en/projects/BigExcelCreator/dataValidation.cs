excel.CreateAndOpenSheet("Sheet Name");

...

// Only allow values included in sheet named "vals" between cells A1 and A6
// when writing to cells between B2 and B10 of the current sheet.
string range = "B2:B10";
string formula = "vals!$A$1:$A$6";
excel.AddValidator(range, formula);

excel.CloseSheet();
