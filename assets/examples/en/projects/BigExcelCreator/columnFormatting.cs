List<Column> cols = new List<Column> {
    new Column{CustomWidth = true, Width=10},   // A
    new Column{CustomWidth = true, Width=15},   // B
    new Column{CustomWidth = true, Width=18},   // c
};

excel.CreateAndOpenSheet("Sheet Name", cols);
