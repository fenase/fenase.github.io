excel.CreateAndOpenSheet("Nombre hoja");
excel.BeginRow();

excel.WriteTextCell("Esto tiene un fondo gris", index_style_name1);
excel.WriteTextCell("esto tiene un fondo amarillo", index_style_name2);

excel.Comment("prueba A1 (otra hoja)", "A1");

excel.EndRow();

excel.Comment("prueba E2 (otra hoja)", "B1", "Author");

excel.CloseSheet();
