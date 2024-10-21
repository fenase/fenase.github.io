font1 = new Font(new Bold(),
            new FontSize { Val = 11 },
            new Color { Rgb = new HexBinaryValue { Value = "000000" } },
            new FontName { Val = "Calibri" });

fill1 = new Fill(
            new PatternFill { PatternType = PatternValues.Gray125 });
fill2 = new Fill(
            new PatternFill(
                new ForegroundColor { Rgb = new HexBinaryValue { Value = "FFFF00" } }
            )
            { PatternType = PatternValues.Solid });

border1 = new Border(
            new LeftBorder(
                new Color { Rgb = new HexBinaryValue { Value = "FFD3D3D3" } }
            )
            { Style = BorderStyleValues.Thin },
            new RightBorder(
                new Color { Rgb = new HexBinaryValue { Value = "FFD3D3D3" } }
            )
            { Style = BorderStyleValues.Thin },
            new TopBorder(
                new Color { Rgb = new HexBinaryValue { Value = "FFD3D3D3" } }
            )
            { Style = BorderStyleValues.Thin },
            new BottomBorder(
                new Color { Rgb = new HexBinaryValue { Value = "FFD3D3D3" } }
            )
            { Style = BorderStyleValues.Thin },
            new DiagonalBorder());

numberingFormat1 = new NumberingFormat { NumberFormatId = 164, FormatCode = "0,.00;(0,.00)" };
