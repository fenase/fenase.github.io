excel.CreateAndOpenSheet("Sheet Name");
excel.BeginRow();

excel.WriteTextCell("This has a gray patterned background", index_style_name1);
excel.WriteTextCell("This has a yellow background", index_style_name2);

excel.Comment("test A1 another sheet", "A1");

excel.EndRow();

excel.Comment("test E2 another sheet", "B1", "Author");

excel.CloseSheet();
