excel.CreateAndOpenSheet("Sheet Name");

...

// sólo permitir valores indicados en la hoja de nombre "vals", entre las celdas A1 y A6
// cuando se ingresan datos a las celdas entre B2 y B10 de la hoja actual.
string range = "B2:B10";
string formula = "vals!$A$1:$A$6";
excel.AddValidator(range, formula);

excel.CloseSheet();
