excel.AddConditionalFormattingCellIs("A1:A20", ConditionalFormattingOperatorValues.LessThan, "5", styleList.GetIndexDifferentialByName("RED"));
excel.AddConditionalFormattingCellIs("A1:A20", ConditionalFormattingOperatorValues.Between, "3", styleList.GetIndexDifferentialByName("RED"), "7");
