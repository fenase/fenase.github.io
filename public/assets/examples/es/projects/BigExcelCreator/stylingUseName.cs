MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream, stylesheet: list.GetStylesheet()))
{
    int index_style_name1 = list.GetIndexByName(name1);
    int index_style_name2 = list.GetIndexByName(name2);
    excel.CreateAndOpenSheet("Nombre hoja");
    excel.BeginRow();
    excel.WriteTextCell("Esto tiene un fondo gris", index_style_name1);
    excel.WriteTextCell("Esto tiene un fondo amarillo", index_style_name2);
    excel.EndRow();
    excel.CloseSheet();
}
