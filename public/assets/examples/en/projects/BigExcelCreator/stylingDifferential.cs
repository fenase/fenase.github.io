// place this before calling list.GetStylesheet() and new BigExcelWriter()
list.NewDifferentialStyle("RED", font: new Font(new Color { Rgb = new HexBinaryValue { Value = "FF0000" } }));
