import"./chunk-2R6CW7ES.js";var t="To see a working example, see the <a href='https://github.com/fenase/BigExcelCreator/blob/main/Example/Program.cs' rel='noopener noreferrer nofollow'>example code</a> on gitHub, part of the vs solution.",r={seeWorkingExample:t,"step 1":"Instantiate class <code>BigExcelWriter</code> using either a file path or a stream (<code>MemoryStream</code> is recommended).","step 2":"Open a new Sheet using <code>CreateAndOpenSheet</code>","step 3":"For every row, use <code>BeginRow</code> and <code>EndRow</code>","step 3 note":"If you want to hide a row, pass <code>true</code> when calling <code>BeginRow</code>","step 4":"Between <code>BeginRow</code> and <code>EndRow</code>, use <code>WriteTextCell</code> to write a cell.","step 4 note1":"Alternatively, you can use <code>WriteTextRow</code> to write an entire row at once, using the same format.","step 4 note2":"Starting on version 1.1, text cells can be written using the shared strings table, which should reduce the generated file size. See {{projects.BigExcelCreator.usage.shared strings}} below","step 5":"Use <code>WriteFormulaCell</code> or <code>WriteFormulaRow</code> to insert formulas.","step 6":"Use <code>WriteNumberCell</code> or <code>WriteNumberRow</code> to insert numbers. This is useful if you need to do any calculation later on.","step 7":"Use <code>CloseSheet</code> to finish.","step 8":"If needed, repeat steps 2 \u2192 5 to write to another sheet","shared strings":"Shared Strings","shared strings text":"If the same text appears across different sheets, using the shared strings table may help reduce the generated file size. In order to do this, simply set to <code>true</code> the <code>useSharedStrings</code> parameter when calling <code>WriteTextCell</code> or <code>WriteTextRow</code>."};export{r as default,t as seeWorkingExample};
