// inserte esto antes de invocar a list.GetStylesheet() y new BigExcelWriter()
list.NewDifferentialStyle("RED", font: new Font(new Color { Rgb = new HexBinaryValue { Value = "FF0000" } }));
