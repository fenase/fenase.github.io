MemoryStream stream = new MemoryStream();
using (BigExcelWriter excel = new(stream, stylesheet: list.GetStylesheet()))
{
    int index_style_name1 = list.GetIndexByName(name1);
    int index_style_name2 = list.GetIndexByName(name2);
    excel.CreateAndOpenSheet("Sheet Name");
    excel.BeginRow();
    excel.WriteTextCell("This has a gray patterned background", index_style_name1);
    excel.WriteTextCell("This has a yellow background", index_style_name2);
    excel.EndRow();
    excel.CloseSheet();
}
