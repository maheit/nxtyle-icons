export type IndexId =
  | "a-b"
  | "ai-generate"
  | "align-bottom"
  | "align-center"
  | "align-justify"
  | "align-left"
  | "align-right"
  | "align-top"
  | "align-vertically"
  | "asterisk"
  | "attachment-2"
  | "bold"
  | "bring-forward"
  | "bring-to-front"
  | "code-view"
  | "delete-column"
  | "delete-row"
  | "double-quotes-l"
  | "double-quotes-r"
  | "draggable"
  | "emphasis-cn"
  | "emphasis"
  | "english-input"
  | "flow-chart"
  | "font-color"
  | "font-family"
  | "font-mono"
  | "font-sans-serif"
  | "font-sans"
  | "font-size-2"
  | "font-size"
  | "format-clear"
  | "functions"
  | "h-1"
  | "h-2"
  | "h-3"
  | "h-4"
  | "h-5"
  | "h-6"
  | "hashtag"
  | "heading"
  | "indent-decrease"
  | "indent-increase"
  | "input-cursor-move"
  | "insert-column-left"
  | "insert-column-right"
  | "insert-row-bottom"
  | "insert-row-top"
  | "italic"
  | "line-height"
  | "link-m"
  | "link-unlink-m"
  | "link-unlink"
  | "link"
  | "list-check-2"
  | "list-check-3"
  | "list-check"
  | "list-indefinite"
  | "list-ordered-2"
  | "list-ordered"
  | "list-radio"
  | "list-unordered"
  | "merge-cells-horizontal"
  | "merge-cells-vertical"
  | "mind-map"
  | "node-tree"
  | "number-0"
  | "number-1"
  | "number-2"
  | "number-3"
  | "number-4"
  | "number-5"
  | "number-6"
  | "number-7"
  | "number-8"
  | "number-9"
  | "omega"
  | "organization-chart"
  | "overline"
  | "page-separator"
  | "paragraph"
  | "pinyin-input"
  | "question-mark"
  | "quote-text"
  | "rounded-corner"
  | "send-backward"
  | "send-to-back"
  | "separator"
  | "single-quotes-l"
  | "single-quotes-r"
  | "sketching"
  | "slash-commands-2"
  | "slash-commands"
  | "sort-asc"
  | "sort-desc"
  | "space"
  | "split-cells-horizontal"
  | "split-cells-vertical"
  | "strikethrough-2"
  | "strikethrough"
  | "subscript-2"
  | "subscript"
  | "superscript-2"
  | "superscript"
  | "table-2"
  | "text-direction-l"
  | "text-direction-r"
  | "text-spacing"
  | "text-wrap"
  | "text"
  | "translate-2"
  | "translate"
  | "underline"
  | "wubi-input";

export type IndexKey =
  | "AB"
  | "AiGenerate"
  | "AlignBottom"
  | "AlignCenter"
  | "AlignJustify"
  | "AlignLeft"
  | "AlignRight"
  | "AlignTop"
  | "AlignVertically"
  | "Asterisk"
  | "Attachment_2"
  | "Bold"
  | "BringForward"
  | "BringToFront"
  | "CodeView"
  | "DeleteColumn"
  | "DeleteRow"
  | "DoubleQuotesL"
  | "DoubleQuotesR"
  | "Draggable"
  | "EmphasisCn"
  | "Emphasis"
  | "EnglishInput"
  | "FlowChart"
  | "FontColor"
  | "FontFamily"
  | "FontMono"
  | "FontSansSerif"
  | "FontSans"
  | "FontSize_2"
  | "FontSize"
  | "FormatClear"
  | "Functions"
  | "H_1"
  | "H_2"
  | "H_3"
  | "H_4"
  | "H_5"
  | "H_6"
  | "Hashtag"
  | "Heading"
  | "IndentDecrease"
  | "IndentIncrease"
  | "InputCursorMove"
  | "InsertColumnLeft"
  | "InsertColumnRight"
  | "InsertRowBottom"
  | "InsertRowTop"
  | "Italic"
  | "LineHeight"
  | "LinkM"
  | "LinkUnlinkM"
  | "LinkUnlink"
  | "Link"
  | "ListCheck_2"
  | "ListCheck_3"
  | "ListCheck"
  | "ListIndefinite"
  | "ListOrdered_2"
  | "ListOrdered"
  | "ListRadio"
  | "ListUnordered"
  | "MergeCellsHorizontal"
  | "MergeCellsVertical"
  | "MindMap"
  | "NodeTree"
  | "Number_0"
  | "Number_1"
  | "Number_2"
  | "Number_3"
  | "Number_4"
  | "Number_5"
  | "Number_6"
  | "Number_7"
  | "Number_8"
  | "Number_9"
  | "Omega"
  | "OrganizationChart"
  | "Overline"
  | "PageSeparator"
  | "Paragraph"
  | "PinyinInput"
  | "QuestionMark"
  | "QuoteText"
  | "RoundedCorner"
  | "SendBackward"
  | "SendToBack"
  | "Separator"
  | "SingleQuotesL"
  | "SingleQuotesR"
  | "Sketching"
  | "SlashCommands_2"
  | "SlashCommands"
  | "SortAsc"
  | "SortDesc"
  | "Space"
  | "SplitCellsHorizontal"
  | "SplitCellsVertical"
  | "Strikethrough_2"
  | "Strikethrough"
  | "Subscript_2"
  | "Subscript"
  | "Superscript_2"
  | "Superscript"
  | "Table_2"
  | "TextDirectionL"
  | "TextDirectionR"
  | "TextSpacing"
  | "TextWrap"
  | "Text"
  | "Translate_2"
  | "Translate"
  | "Underline"
  | "WubiInput";

export enum Index {
  AB = "a-b",
  AiGenerate = "ai-generate",
  AlignBottom = "align-bottom",
  AlignCenter = "align-center",
  AlignJustify = "align-justify",
  AlignLeft = "align-left",
  AlignRight = "align-right",
  AlignTop = "align-top",
  AlignVertically = "align-vertically",
  Asterisk = "asterisk",
  Attachment_2 = "attachment-2",
  Bold = "bold",
  BringForward = "bring-forward",
  BringToFront = "bring-to-front",
  CodeView = "code-view",
  DeleteColumn = "delete-column",
  DeleteRow = "delete-row",
  DoubleQuotesL = "double-quotes-l",
  DoubleQuotesR = "double-quotes-r",
  Draggable = "draggable",
  EmphasisCn = "emphasis-cn",
  Emphasis = "emphasis",
  EnglishInput = "english-input",
  FlowChart = "flow-chart",
  FontColor = "font-color",
  FontFamily = "font-family",
  FontMono = "font-mono",
  FontSansSerif = "font-sans-serif",
  FontSans = "font-sans",
  FontSize_2 = "font-size-2",
  FontSize = "font-size",
  FormatClear = "format-clear",
  Functions = "functions",
  H_1 = "h-1",
  H_2 = "h-2",
  H_3 = "h-3",
  H_4 = "h-4",
  H_5 = "h-5",
  H_6 = "h-6",
  Hashtag = "hashtag",
  Heading = "heading",
  IndentDecrease = "indent-decrease",
  IndentIncrease = "indent-increase",
  InputCursorMove = "input-cursor-move",
  InsertColumnLeft = "insert-column-left",
  InsertColumnRight = "insert-column-right",
  InsertRowBottom = "insert-row-bottom",
  InsertRowTop = "insert-row-top",
  Italic = "italic",
  LineHeight = "line-height",
  LinkM = "link-m",
  LinkUnlinkM = "link-unlink-m",
  LinkUnlink = "link-unlink",
  Link = "link",
  ListCheck_2 = "list-check-2",
  ListCheck_3 = "list-check-3",
  ListCheck = "list-check",
  ListIndefinite = "list-indefinite",
  ListOrdered_2 = "list-ordered-2",
  ListOrdered = "list-ordered",
  ListRadio = "list-radio",
  ListUnordered = "list-unordered",
  MergeCellsHorizontal = "merge-cells-horizontal",
  MergeCellsVertical = "merge-cells-vertical",
  MindMap = "mind-map",
  NodeTree = "node-tree",
  Number_0 = "number-0",
  Number_1 = "number-1",
  Number_2 = "number-2",
  Number_3 = "number-3",
  Number_4 = "number-4",
  Number_5 = "number-5",
  Number_6 = "number-6",
  Number_7 = "number-7",
  Number_8 = "number-8",
  Number_9 = "number-9",
  Omega = "omega",
  OrganizationChart = "organization-chart",
  Overline = "overline",
  PageSeparator = "page-separator",
  Paragraph = "paragraph",
  PinyinInput = "pinyin-input",
  QuestionMark = "question-mark",
  QuoteText = "quote-text",
  RoundedCorner = "rounded-corner",
  SendBackward = "send-backward",
  SendToBack = "send-to-back",
  Separator = "separator",
  SingleQuotesL = "single-quotes-l",
  SingleQuotesR = "single-quotes-r",
  Sketching = "sketching",
  SlashCommands_2 = "slash-commands-2",
  SlashCommands = "slash-commands",
  SortAsc = "sort-asc",
  SortDesc = "sort-desc",
  Space = "space",
  SplitCellsHorizontal = "split-cells-horizontal",
  SplitCellsVertical = "split-cells-vertical",
  Strikethrough_2 = "strikethrough-2",
  Strikethrough = "strikethrough",
  Subscript_2 = "subscript-2",
  Subscript = "subscript",
  Superscript_2 = "superscript-2",
  Superscript = "superscript",
  Table_2 = "table-2",
  TextDirectionL = "text-direction-l",
  TextDirectionR = "text-direction-r",
  TextSpacing = "text-spacing",
  TextWrap = "text-wrap",
  Text = "text",
  Translate_2 = "translate-2",
  Translate = "translate",
  Underline = "underline",
  WubiInput = "wubi-input",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.AB]: "58348",
  [Index.AiGenerate]: "58349",
  [Index.AlignBottom]: "58350",
  [Index.AlignCenter]: "58351",
  [Index.AlignJustify]: "58352",
  [Index.AlignLeft]: "58353",
  [Index.AlignRight]: "58354",
  [Index.AlignTop]: "58355",
  [Index.AlignVertically]: "58356",
  [Index.Asterisk]: "58357",
  [Index.Attachment_2]: "58358",
  [Index.Bold]: "58359",
  [Index.BringForward]: "58360",
  [Index.BringToFront]: "58361",
  [Index.CodeView]: "58362",
  [Index.DeleteColumn]: "58363",
  [Index.DeleteRow]: "58364",
  [Index.DoubleQuotesL]: "58365",
  [Index.DoubleQuotesR]: "58366",
  [Index.Draggable]: "58367",
  [Index.EmphasisCn]: "58368",
  [Index.Emphasis]: "58369",
  [Index.EnglishInput]: "58370",
  [Index.FlowChart]: "58371",
  [Index.FontColor]: "58372",
  [Index.FontFamily]: "58373",
  [Index.FontMono]: "58374",
  [Index.FontSansSerif]: "58375",
  [Index.FontSans]: "58376",
  [Index.FontSize_2]: "58377",
  [Index.FontSize]: "58378",
  [Index.FormatClear]: "58379",
  [Index.Functions]: "58380",
  [Index.H_1]: "58381",
  [Index.H_2]: "58382",
  [Index.H_3]: "58383",
  [Index.H_4]: "58384",
  [Index.H_5]: "58385",
  [Index.H_6]: "58386",
  [Index.Hashtag]: "58387",
  [Index.Heading]: "58388",
  [Index.IndentDecrease]: "58389",
  [Index.IndentIncrease]: "58390",
  [Index.InputCursorMove]: "58391",
  [Index.InsertColumnLeft]: "58392",
  [Index.InsertColumnRight]: "58393",
  [Index.InsertRowBottom]: "58394",
  [Index.InsertRowTop]: "58395",
  [Index.Italic]: "58396",
  [Index.LineHeight]: "58397",
  [Index.LinkM]: "58398",
  [Index.LinkUnlinkM]: "58399",
  [Index.LinkUnlink]: "58400",
  [Index.Link]: "58401",
  [Index.ListCheck_2]: "58402",
  [Index.ListCheck_3]: "58403",
  [Index.ListCheck]: "58404",
  [Index.ListIndefinite]: "58405",
  [Index.ListOrdered_2]: "58406",
  [Index.ListOrdered]: "58407",
  [Index.ListRadio]: "58408",
  [Index.ListUnordered]: "58409",
  [Index.MergeCellsHorizontal]: "58410",
  [Index.MergeCellsVertical]: "58411",
  [Index.MindMap]: "58412",
  [Index.NodeTree]: "58413",
  [Index.Number_0]: "58414",
  [Index.Number_1]: "58415",
  [Index.Number_2]: "58416",
  [Index.Number_3]: "58417",
  [Index.Number_4]: "58418",
  [Index.Number_5]: "58419",
  [Index.Number_6]: "58420",
  [Index.Number_7]: "58421",
  [Index.Number_8]: "58422",
  [Index.Number_9]: "58423",
  [Index.Omega]: "58424",
  [Index.OrganizationChart]: "58425",
  [Index.Overline]: "58426",
  [Index.PageSeparator]: "58427",
  [Index.Paragraph]: "58428",
  [Index.PinyinInput]: "58429",
  [Index.QuestionMark]: "58430",
  [Index.QuoteText]: "58431",
  [Index.RoundedCorner]: "58432",
  [Index.SendBackward]: "58433",
  [Index.SendToBack]: "58434",
  [Index.Separator]: "58435",
  [Index.SingleQuotesL]: "58436",
  [Index.SingleQuotesR]: "58437",
  [Index.Sketching]: "58438",
  [Index.SlashCommands_2]: "58439",
  [Index.SlashCommands]: "58440",
  [Index.SortAsc]: "58441",
  [Index.SortDesc]: "58442",
  [Index.Space]: "58443",
  [Index.SplitCellsHorizontal]: "58444",
  [Index.SplitCellsVertical]: "58445",
  [Index.Strikethrough_2]: "58446",
  [Index.Strikethrough]: "58447",
  [Index.Subscript_2]: "58448",
  [Index.Subscript]: "58449",
  [Index.Superscript_2]: "58450",
  [Index.Superscript]: "58451",
  [Index.Table_2]: "58452",
  [Index.TextDirectionL]: "58453",
  [Index.TextDirectionR]: "58454",
  [Index.TextSpacing]: "58455",
  [Index.TextWrap]: "58456",
  [Index.Text]: "58457",
  [Index.Translate_2]: "58458",
  [Index.Translate]: "58459",
  [Index.Underline]: "58460",
  [Index.WubiInput]: "58461",
};
