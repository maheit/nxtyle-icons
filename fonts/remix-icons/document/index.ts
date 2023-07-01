export type IndexId =
  | "article-fill"
  | "article-line"
  | "bill-fill"
  | "bill-line"
  | "book-2-fill"
  | "book-2-line"
  | "book-3-fill"
  | "book-3-line"
  | "book-fill"
  | "book-line"
  | "book-mark-fill"
  | "book-mark-line"
  | "book-open-fill"
  | "book-open-line"
  | "book-read-fill"
  | "book-read-line"
  | "booklet-fill"
  | "booklet-line"
  | "clipboard-fill"
  | "clipboard-line"
  | "contacts-book-2-fill"
  | "contacts-book-2-line"
  | "contacts-book-fill"
  | "contacts-book-line"
  | "contacts-book-upload-fill"
  | "contacts-book-upload-line"
  | "draft-fill"
  | "draft-line"
  | "file-2-fill"
  | "file-2-line"
  | "file-3-fill"
  | "file-3-line"
  | "file-4-fill"
  | "file-4-line"
  | "file-add-fill"
  | "file-add-line"
  | "file-chart-2-fill"
  | "file-chart-2-line"
  | "file-chart-fill"
  | "file-chart-line"
  | "file-close-fill"
  | "file-close-line"
  | "file-cloud-fill"
  | "file-cloud-line"
  | "file-code-fill"
  | "file-code-line"
  | "file-copy-2-fill"
  | "file-copy-2-line"
  | "file-copy-fill"
  | "file-copy-line"
  | "file-damage-fill"
  | "file-damage-line"
  | "file-download-fill"
  | "file-download-line"
  | "file-edit-fill"
  | "file-edit-line"
  | "file-excel-2-fill"
  | "file-excel-2-line"
  | "file-excel-fill"
  | "file-excel-line"
  | "file-fill"
  | "file-forbid-fill"
  | "file-forbid-line"
  | "file-gif-fill"
  | "file-gif-line"
  | "file-history-fill"
  | "file-history-line"
  | "file-hwp-fill"
  | "file-hwp-line"
  | "file-info-fill"
  | "file-info-line"
  | "file-line"
  | "file-list-2-fill"
  | "file-list-2-line"
  | "file-list-3-fill"
  | "file-list-3-line"
  | "file-list-fill"
  | "file-list-line"
  | "file-lock-fill"
  | "file-lock-line"
  | "file-mark-fill"
  | "file-mark-line"
  | "file-music-fill"
  | "file-music-line"
  | "file-paper-2-fill"
  | "file-paper-2-line"
  | "file-paper-fill"
  | "file-paper-line"
  | "file-pdf-fill"
  | "file-pdf-line"
  | "file-ppt-2-fill"
  | "file-ppt-2-line"
  | "file-ppt-fill"
  | "file-ppt-line"
  | "file-reduce-fill"
  | "file-reduce-line"
  | "file-search-fill"
  | "file-search-line"
  | "file-settings-fill"
  | "file-settings-line"
  | "file-shield-2-fill"
  | "file-shield-2-line"
  | "file-shield-fill"
  | "file-shield-line"
  | "file-shred-fill"
  | "file-shred-line"
  | "file-text-fill"
  | "file-text-line"
  | "file-transfer-fill"
  | "file-transfer-line"
  | "file-unknow-fill"
  | "file-unknow-line"
  | "file-upload-fill"
  | "file-upload-line"
  | "file-user-fill"
  | "file-user-line"
  | "file-warning-fill"
  | "file-warning-line"
  | "file-word-2-fill"
  | "file-word-2-line"
  | "file-word-fill"
  | "file-word-line"
  | "file-zip-fill"
  | "file-zip-line"
  | "folder-2-fill"
  | "folder-2-line"
  | "folder-3-fill"
  | "folder-3-line"
  | "folder-4-fill"
  | "folder-4-line"
  | "folder-5-fill"
  | "folder-5-line"
  | "folder-add-fill"
  | "folder-add-line"
  | "folder-chart-2-fill"
  | "folder-chart-2-line"
  | "folder-chart-fill"
  | "folder-chart-line"
  | "folder-download-fill"
  | "folder-download-line"
  | "folder-fill"
  | "folder-forbid-fill"
  | "folder-forbid-line"
  | "folder-history-fill"
  | "folder-history-line"
  | "folder-info-fill"
  | "folder-info-line"
  | "folder-keyhole-fill"
  | "folder-keyhole-line"
  | "folder-line"
  | "folder-lock-fill"
  | "folder-lock-line"
  | "folder-music-fill"
  | "folder-music-line"
  | "folder-open-fill"
  | "folder-open-line"
  | "folder-received-fill"
  | "folder-received-line"
  | "folder-reduce-fill"
  | "folder-reduce-line"
  | "folder-settings-fill"
  | "folder-settings-line"
  | "folder-shared-fill"
  | "folder-shared-line"
  | "folder-shield-2-fill"
  | "folder-shield-2-line"
  | "folder-shield-fill"
  | "folder-shield-line"
  | "folder-transfer-fill"
  | "folder-transfer-line"
  | "folder-unknow-fill"
  | "folder-unknow-line"
  | "folder-upload-fill"
  | "folder-upload-line"
  | "folder-user-fill"
  | "folder-user-line"
  | "folder-warning-fill"
  | "folder-warning-line"
  | "folder-zip-fill"
  | "folder-zip-line"
  | "folders-fill"
  | "folders-line"
  | "keynote-fill"
  | "keynote-line"
  | "markdown-fill"
  | "markdown-line"
  | "newspaper-fill"
  | "newspaper-line"
  | "numbers-fill"
  | "numbers-line"
  | "pages-fill"
  | "pages-line"
  | "sticky-note-2-fill"
  | "sticky-note-2-line"
  | "sticky-note-fill"
  | "sticky-note-line"
  | "survey-fill"
  | "survey-line"
  | "task-fill"
  | "task-line"
  | "todo-fill"
  | "todo-line";

export type IndexKey =
  | "ArticleFill"
  | "ArticleLine"
  | "BillFill"
  | "BillLine"
  | "Book_2Fill"
  | "Book_2Line"
  | "Book_3Fill"
  | "Book_3Line"
  | "BookFill"
  | "BookLine"
  | "BookMarkFill"
  | "BookMarkLine"
  | "BookOpenFill"
  | "BookOpenLine"
  | "BookReadFill"
  | "BookReadLine"
  | "BookletFill"
  | "BookletLine"
  | "ClipboardFill"
  | "ClipboardLine"
  | "ContactsBook_2Fill"
  | "ContactsBook_2Line"
  | "ContactsBookFill"
  | "ContactsBookLine"
  | "ContactsBookUploadFill"
  | "ContactsBookUploadLine"
  | "DraftFill"
  | "DraftLine"
  | "File_2Fill"
  | "File_2Line"
  | "File_3Fill"
  | "File_3Line"
  | "File_4Fill"
  | "File_4Line"
  | "FileAddFill"
  | "FileAddLine"
  | "FileChart_2Fill"
  | "FileChart_2Line"
  | "FileChartFill"
  | "FileChartLine"
  | "FileCloseFill"
  | "FileCloseLine"
  | "FileCloudFill"
  | "FileCloudLine"
  | "FileCodeFill"
  | "FileCodeLine"
  | "FileCopy_2Fill"
  | "FileCopy_2Line"
  | "FileCopyFill"
  | "FileCopyLine"
  | "FileDamageFill"
  | "FileDamageLine"
  | "FileDownloadFill"
  | "FileDownloadLine"
  | "FileEditFill"
  | "FileEditLine"
  | "FileExcel_2Fill"
  | "FileExcel_2Line"
  | "FileExcelFill"
  | "FileExcelLine"
  | "FileFill"
  | "FileForbidFill"
  | "FileForbidLine"
  | "FileGifFill"
  | "FileGifLine"
  | "FileHistoryFill"
  | "FileHistoryLine"
  | "FileHwpFill"
  | "FileHwpLine"
  | "FileInfoFill"
  | "FileInfoLine"
  | "FileLine"
  | "FileList_2Fill"
  | "FileList_2Line"
  | "FileList_3Fill"
  | "FileList_3Line"
  | "FileListFill"
  | "FileListLine"
  | "FileLockFill"
  | "FileLockLine"
  | "FileMarkFill"
  | "FileMarkLine"
  | "FileMusicFill"
  | "FileMusicLine"
  | "FilePaper_2Fill"
  | "FilePaper_2Line"
  | "FilePaperFill"
  | "FilePaperLine"
  | "FilePdfFill"
  | "FilePdfLine"
  | "FilePpt_2Fill"
  | "FilePpt_2Line"
  | "FilePptFill"
  | "FilePptLine"
  | "FileReduceFill"
  | "FileReduceLine"
  | "FileSearchFill"
  | "FileSearchLine"
  | "FileSettingsFill"
  | "FileSettingsLine"
  | "FileShield_2Fill"
  | "FileShield_2Line"
  | "FileShieldFill"
  | "FileShieldLine"
  | "FileShredFill"
  | "FileShredLine"
  | "FileTextFill"
  | "FileTextLine"
  | "FileTransferFill"
  | "FileTransferLine"
  | "FileUnknowFill"
  | "FileUnknowLine"
  | "FileUploadFill"
  | "FileUploadLine"
  | "FileUserFill"
  | "FileUserLine"
  | "FileWarningFill"
  | "FileWarningLine"
  | "FileWord_2Fill"
  | "FileWord_2Line"
  | "FileWordFill"
  | "FileWordLine"
  | "FileZipFill"
  | "FileZipLine"
  | "Folder_2Fill"
  | "Folder_2Line"
  | "Folder_3Fill"
  | "Folder_3Line"
  | "Folder_4Fill"
  | "Folder_4Line"
  | "Folder_5Fill"
  | "Folder_5Line"
  | "FolderAddFill"
  | "FolderAddLine"
  | "FolderChart_2Fill"
  | "FolderChart_2Line"
  | "FolderChartFill"
  | "FolderChartLine"
  | "FolderDownloadFill"
  | "FolderDownloadLine"
  | "FolderFill"
  | "FolderForbidFill"
  | "FolderForbidLine"
  | "FolderHistoryFill"
  | "FolderHistoryLine"
  | "FolderInfoFill"
  | "FolderInfoLine"
  | "FolderKeyholeFill"
  | "FolderKeyholeLine"
  | "FolderLine"
  | "FolderLockFill"
  | "FolderLockLine"
  | "FolderMusicFill"
  | "FolderMusicLine"
  | "FolderOpenFill"
  | "FolderOpenLine"
  | "FolderReceivedFill"
  | "FolderReceivedLine"
  | "FolderReduceFill"
  | "FolderReduceLine"
  | "FolderSettingsFill"
  | "FolderSettingsLine"
  | "FolderSharedFill"
  | "FolderSharedLine"
  | "FolderShield_2Fill"
  | "FolderShield_2Line"
  | "FolderShieldFill"
  | "FolderShieldLine"
  | "FolderTransferFill"
  | "FolderTransferLine"
  | "FolderUnknowFill"
  | "FolderUnknowLine"
  | "FolderUploadFill"
  | "FolderUploadLine"
  | "FolderUserFill"
  | "FolderUserLine"
  | "FolderWarningFill"
  | "FolderWarningLine"
  | "FolderZipFill"
  | "FolderZipLine"
  | "FoldersFill"
  | "FoldersLine"
  | "KeynoteFill"
  | "KeynoteLine"
  | "MarkdownFill"
  | "MarkdownLine"
  | "NewspaperFill"
  | "NewspaperLine"
  | "NumbersFill"
  | "NumbersLine"
  | "PagesFill"
  | "PagesLine"
  | "StickyNote_2Fill"
  | "StickyNote_2Line"
  | "StickyNoteFill"
  | "StickyNoteLine"
  | "SurveyFill"
  | "SurveyLine"
  | "TaskFill"
  | "TaskLine"
  | "TodoFill"
  | "TodoLine";

export enum Index {
  ArticleFill = "article-fill",
  ArticleLine = "article-line",
  BillFill = "bill-fill",
  BillLine = "bill-line",
  Book_2Fill = "book-2-fill",
  Book_2Line = "book-2-line",
  Book_3Fill = "book-3-fill",
  Book_3Line = "book-3-line",
  BookFill = "book-fill",
  BookLine = "book-line",
  BookMarkFill = "book-mark-fill",
  BookMarkLine = "book-mark-line",
  BookOpenFill = "book-open-fill",
  BookOpenLine = "book-open-line",
  BookReadFill = "book-read-fill",
  BookReadLine = "book-read-line",
  BookletFill = "booklet-fill",
  BookletLine = "booklet-line",
  ClipboardFill = "clipboard-fill",
  ClipboardLine = "clipboard-line",
  ContactsBook_2Fill = "contacts-book-2-fill",
  ContactsBook_2Line = "contacts-book-2-line",
  ContactsBookFill = "contacts-book-fill",
  ContactsBookLine = "contacts-book-line",
  ContactsBookUploadFill = "contacts-book-upload-fill",
  ContactsBookUploadLine = "contacts-book-upload-line",
  DraftFill = "draft-fill",
  DraftLine = "draft-line",
  File_2Fill = "file-2-fill",
  File_2Line = "file-2-line",
  File_3Fill = "file-3-fill",
  File_3Line = "file-3-line",
  File_4Fill = "file-4-fill",
  File_4Line = "file-4-line",
  FileAddFill = "file-add-fill",
  FileAddLine = "file-add-line",
  FileChart_2Fill = "file-chart-2-fill",
  FileChart_2Line = "file-chart-2-line",
  FileChartFill = "file-chart-fill",
  FileChartLine = "file-chart-line",
  FileCloseFill = "file-close-fill",
  FileCloseLine = "file-close-line",
  FileCloudFill = "file-cloud-fill",
  FileCloudLine = "file-cloud-line",
  FileCodeFill = "file-code-fill",
  FileCodeLine = "file-code-line",
  FileCopy_2Fill = "file-copy-2-fill",
  FileCopy_2Line = "file-copy-2-line",
  FileCopyFill = "file-copy-fill",
  FileCopyLine = "file-copy-line",
  FileDamageFill = "file-damage-fill",
  FileDamageLine = "file-damage-line",
  FileDownloadFill = "file-download-fill",
  FileDownloadLine = "file-download-line",
  FileEditFill = "file-edit-fill",
  FileEditLine = "file-edit-line",
  FileExcel_2Fill = "file-excel-2-fill",
  FileExcel_2Line = "file-excel-2-line",
  FileExcelFill = "file-excel-fill",
  FileExcelLine = "file-excel-line",
  FileFill = "file-fill",
  FileForbidFill = "file-forbid-fill",
  FileForbidLine = "file-forbid-line",
  FileGifFill = "file-gif-fill",
  FileGifLine = "file-gif-line",
  FileHistoryFill = "file-history-fill",
  FileHistoryLine = "file-history-line",
  FileHwpFill = "file-hwp-fill",
  FileHwpLine = "file-hwp-line",
  FileInfoFill = "file-info-fill",
  FileInfoLine = "file-info-line",
  FileLine = "file-line",
  FileList_2Fill = "file-list-2-fill",
  FileList_2Line = "file-list-2-line",
  FileList_3Fill = "file-list-3-fill",
  FileList_3Line = "file-list-3-line",
  FileListFill = "file-list-fill",
  FileListLine = "file-list-line",
  FileLockFill = "file-lock-fill",
  FileLockLine = "file-lock-line",
  FileMarkFill = "file-mark-fill",
  FileMarkLine = "file-mark-line",
  FileMusicFill = "file-music-fill",
  FileMusicLine = "file-music-line",
  FilePaper_2Fill = "file-paper-2-fill",
  FilePaper_2Line = "file-paper-2-line",
  FilePaperFill = "file-paper-fill",
  FilePaperLine = "file-paper-line",
  FilePdfFill = "file-pdf-fill",
  FilePdfLine = "file-pdf-line",
  FilePpt_2Fill = "file-ppt-2-fill",
  FilePpt_2Line = "file-ppt-2-line",
  FilePptFill = "file-ppt-fill",
  FilePptLine = "file-ppt-line",
  FileReduceFill = "file-reduce-fill",
  FileReduceLine = "file-reduce-line",
  FileSearchFill = "file-search-fill",
  FileSearchLine = "file-search-line",
  FileSettingsFill = "file-settings-fill",
  FileSettingsLine = "file-settings-line",
  FileShield_2Fill = "file-shield-2-fill",
  FileShield_2Line = "file-shield-2-line",
  FileShieldFill = "file-shield-fill",
  FileShieldLine = "file-shield-line",
  FileShredFill = "file-shred-fill",
  FileShredLine = "file-shred-line",
  FileTextFill = "file-text-fill",
  FileTextLine = "file-text-line",
  FileTransferFill = "file-transfer-fill",
  FileTransferLine = "file-transfer-line",
  FileUnknowFill = "file-unknow-fill",
  FileUnknowLine = "file-unknow-line",
  FileUploadFill = "file-upload-fill",
  FileUploadLine = "file-upload-line",
  FileUserFill = "file-user-fill",
  FileUserLine = "file-user-line",
  FileWarningFill = "file-warning-fill",
  FileWarningLine = "file-warning-line",
  FileWord_2Fill = "file-word-2-fill",
  FileWord_2Line = "file-word-2-line",
  FileWordFill = "file-word-fill",
  FileWordLine = "file-word-line",
  FileZipFill = "file-zip-fill",
  FileZipLine = "file-zip-line",
  Folder_2Fill = "folder-2-fill",
  Folder_2Line = "folder-2-line",
  Folder_3Fill = "folder-3-fill",
  Folder_3Line = "folder-3-line",
  Folder_4Fill = "folder-4-fill",
  Folder_4Line = "folder-4-line",
  Folder_5Fill = "folder-5-fill",
  Folder_5Line = "folder-5-line",
  FolderAddFill = "folder-add-fill",
  FolderAddLine = "folder-add-line",
  FolderChart_2Fill = "folder-chart-2-fill",
  FolderChart_2Line = "folder-chart-2-line",
  FolderChartFill = "folder-chart-fill",
  FolderChartLine = "folder-chart-line",
  FolderDownloadFill = "folder-download-fill",
  FolderDownloadLine = "folder-download-line",
  FolderFill = "folder-fill",
  FolderForbidFill = "folder-forbid-fill",
  FolderForbidLine = "folder-forbid-line",
  FolderHistoryFill = "folder-history-fill",
  FolderHistoryLine = "folder-history-line",
  FolderInfoFill = "folder-info-fill",
  FolderInfoLine = "folder-info-line",
  FolderKeyholeFill = "folder-keyhole-fill",
  FolderKeyholeLine = "folder-keyhole-line",
  FolderLine = "folder-line",
  FolderLockFill = "folder-lock-fill",
  FolderLockLine = "folder-lock-line",
  FolderMusicFill = "folder-music-fill",
  FolderMusicLine = "folder-music-line",
  FolderOpenFill = "folder-open-fill",
  FolderOpenLine = "folder-open-line",
  FolderReceivedFill = "folder-received-fill",
  FolderReceivedLine = "folder-received-line",
  FolderReduceFill = "folder-reduce-fill",
  FolderReduceLine = "folder-reduce-line",
  FolderSettingsFill = "folder-settings-fill",
  FolderSettingsLine = "folder-settings-line",
  FolderSharedFill = "folder-shared-fill",
  FolderSharedLine = "folder-shared-line",
  FolderShield_2Fill = "folder-shield-2-fill",
  FolderShield_2Line = "folder-shield-2-line",
  FolderShieldFill = "folder-shield-fill",
  FolderShieldLine = "folder-shield-line",
  FolderTransferFill = "folder-transfer-fill",
  FolderTransferLine = "folder-transfer-line",
  FolderUnknowFill = "folder-unknow-fill",
  FolderUnknowLine = "folder-unknow-line",
  FolderUploadFill = "folder-upload-fill",
  FolderUploadLine = "folder-upload-line",
  FolderUserFill = "folder-user-fill",
  FolderUserLine = "folder-user-line",
  FolderWarningFill = "folder-warning-fill",
  FolderWarningLine = "folder-warning-line",
  FolderZipFill = "folder-zip-fill",
  FolderZipLine = "folder-zip-line",
  FoldersFill = "folders-fill",
  FoldersLine = "folders-line",
  KeynoteFill = "keynote-fill",
  KeynoteLine = "keynote-line",
  MarkdownFill = "markdown-fill",
  MarkdownLine = "markdown-line",
  NewspaperFill = "newspaper-fill",
  NewspaperLine = "newspaper-line",
  NumbersFill = "numbers-fill",
  NumbersLine = "numbers-line",
  PagesFill = "pages-fill",
  PagesLine = "pages-line",
  StickyNote_2Fill = "sticky-note-2-fill",
  StickyNote_2Line = "sticky-note-2-line",
  StickyNoteFill = "sticky-note-fill",
  StickyNoteLine = "sticky-note-line",
  SurveyFill = "survey-fill",
  SurveyLine = "survey-line",
  TaskFill = "task-fill",
  TaskLine = "task-line",
  TodoFill = "todo-fill",
  TodoLine = "todo-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.ArticleFill]: "58146",
  [Index.ArticleLine]: "58147",
  [Index.BillFill]: "58148",
  [Index.BillLine]: "58149",
  [Index.Book_2Fill]: "58150",
  [Index.Book_2Line]: "58151",
  [Index.Book_3Fill]: "58152",
  [Index.Book_3Line]: "58153",
  [Index.BookFill]: "58154",
  [Index.BookLine]: "58155",
  [Index.BookMarkFill]: "58156",
  [Index.BookMarkLine]: "58157",
  [Index.BookOpenFill]: "58158",
  [Index.BookOpenLine]: "58159",
  [Index.BookReadFill]: "58160",
  [Index.BookReadLine]: "58161",
  [Index.BookletFill]: "58162",
  [Index.BookletLine]: "58163",
  [Index.ClipboardFill]: "58164",
  [Index.ClipboardLine]: "58165",
  [Index.ContactsBook_2Fill]: "58166",
  [Index.ContactsBook_2Line]: "58167",
  [Index.ContactsBookFill]: "58168",
  [Index.ContactsBookLine]: "58169",
  [Index.ContactsBookUploadFill]: "58170",
  [Index.ContactsBookUploadLine]: "58171",
  [Index.DraftFill]: "58172",
  [Index.DraftLine]: "58173",
  [Index.File_2Fill]: "58174",
  [Index.File_2Line]: "58175",
  [Index.File_3Fill]: "58176",
  [Index.File_3Line]: "58177",
  [Index.File_4Fill]: "58178",
  [Index.File_4Line]: "58179",
  [Index.FileAddFill]: "58180",
  [Index.FileAddLine]: "58181",
  [Index.FileChart_2Fill]: "58182",
  [Index.FileChart_2Line]: "58183",
  [Index.FileChartFill]: "58184",
  [Index.FileChartLine]: "58185",
  [Index.FileCloseFill]: "58186",
  [Index.FileCloseLine]: "58187",
  [Index.FileCloudFill]: "58188",
  [Index.FileCloudLine]: "58189",
  [Index.FileCodeFill]: "58190",
  [Index.FileCodeLine]: "58191",
  [Index.FileCopy_2Fill]: "58192",
  [Index.FileCopy_2Line]: "58193",
  [Index.FileCopyFill]: "58194",
  [Index.FileCopyLine]: "58195",
  [Index.FileDamageFill]: "58196",
  [Index.FileDamageLine]: "58197",
  [Index.FileDownloadFill]: "58198",
  [Index.FileDownloadLine]: "58199",
  [Index.FileEditFill]: "58200",
  [Index.FileEditLine]: "58201",
  [Index.FileExcel_2Fill]: "58202",
  [Index.FileExcel_2Line]: "58203",
  [Index.FileExcelFill]: "58204",
  [Index.FileExcelLine]: "58205",
  [Index.FileFill]: "58206",
  [Index.FileForbidFill]: "58207",
  [Index.FileForbidLine]: "58208",
  [Index.FileGifFill]: "58209",
  [Index.FileGifLine]: "58210",
  [Index.FileHistoryFill]: "58211",
  [Index.FileHistoryLine]: "58212",
  [Index.FileHwpFill]: "58213",
  [Index.FileHwpLine]: "58214",
  [Index.FileInfoFill]: "58215",
  [Index.FileInfoLine]: "58216",
  [Index.FileLine]: "58217",
  [Index.FileList_2Fill]: "58218",
  [Index.FileList_2Line]: "58219",
  [Index.FileList_3Fill]: "58220",
  [Index.FileList_3Line]: "58221",
  [Index.FileListFill]: "58222",
  [Index.FileListLine]: "58223",
  [Index.FileLockFill]: "58224",
  [Index.FileLockLine]: "58225",
  [Index.FileMarkFill]: "58226",
  [Index.FileMarkLine]: "58227",
  [Index.FileMusicFill]: "58228",
  [Index.FileMusicLine]: "58229",
  [Index.FilePaper_2Fill]: "58230",
  [Index.FilePaper_2Line]: "58231",
  [Index.FilePaperFill]: "58232",
  [Index.FilePaperLine]: "58233",
  [Index.FilePdfFill]: "58234",
  [Index.FilePdfLine]: "58235",
  [Index.FilePpt_2Fill]: "58236",
  [Index.FilePpt_2Line]: "58237",
  [Index.FilePptFill]: "58238",
  [Index.FilePptLine]: "58239",
  [Index.FileReduceFill]: "58240",
  [Index.FileReduceLine]: "58241",
  [Index.FileSearchFill]: "58242",
  [Index.FileSearchLine]: "58243",
  [Index.FileSettingsFill]: "58244",
  [Index.FileSettingsLine]: "58245",
  [Index.FileShield_2Fill]: "58246",
  [Index.FileShield_2Line]: "58247",
  [Index.FileShieldFill]: "58248",
  [Index.FileShieldLine]: "58249",
  [Index.FileShredFill]: "58250",
  [Index.FileShredLine]: "58251",
  [Index.FileTextFill]: "58252",
  [Index.FileTextLine]: "58253",
  [Index.FileTransferFill]: "58254",
  [Index.FileTransferLine]: "58255",
  [Index.FileUnknowFill]: "58256",
  [Index.FileUnknowLine]: "58257",
  [Index.FileUploadFill]: "58258",
  [Index.FileUploadLine]: "58259",
  [Index.FileUserFill]: "58260",
  [Index.FileUserLine]: "58261",
  [Index.FileWarningFill]: "58262",
  [Index.FileWarningLine]: "58263",
  [Index.FileWord_2Fill]: "58264",
  [Index.FileWord_2Line]: "58265",
  [Index.FileWordFill]: "58266",
  [Index.FileWordLine]: "58267",
  [Index.FileZipFill]: "58268",
  [Index.FileZipLine]: "58269",
  [Index.Folder_2Fill]: "58270",
  [Index.Folder_2Line]: "58271",
  [Index.Folder_3Fill]: "58272",
  [Index.Folder_3Line]: "58273",
  [Index.Folder_4Fill]: "58274",
  [Index.Folder_4Line]: "58275",
  [Index.Folder_5Fill]: "58276",
  [Index.Folder_5Line]: "58277",
  [Index.FolderAddFill]: "58278",
  [Index.FolderAddLine]: "58279",
  [Index.FolderChart_2Fill]: "58280",
  [Index.FolderChart_2Line]: "58281",
  [Index.FolderChartFill]: "58282",
  [Index.FolderChartLine]: "58283",
  [Index.FolderDownloadFill]: "58284",
  [Index.FolderDownloadLine]: "58285",
  [Index.FolderFill]: "58286",
  [Index.FolderForbidFill]: "58287",
  [Index.FolderForbidLine]: "58288",
  [Index.FolderHistoryFill]: "58289",
  [Index.FolderHistoryLine]: "58290",
  [Index.FolderInfoFill]: "58291",
  [Index.FolderInfoLine]: "58292",
  [Index.FolderKeyholeFill]: "58293",
  [Index.FolderKeyholeLine]: "58294",
  [Index.FolderLine]: "58295",
  [Index.FolderLockFill]: "58296",
  [Index.FolderLockLine]: "58297",
  [Index.FolderMusicFill]: "58298",
  [Index.FolderMusicLine]: "58299",
  [Index.FolderOpenFill]: "58300",
  [Index.FolderOpenLine]: "58301",
  [Index.FolderReceivedFill]: "58302",
  [Index.FolderReceivedLine]: "58303",
  [Index.FolderReduceFill]: "58304",
  [Index.FolderReduceLine]: "58305",
  [Index.FolderSettingsFill]: "58306",
  [Index.FolderSettingsLine]: "58307",
  [Index.FolderSharedFill]: "58308",
  [Index.FolderSharedLine]: "58309",
  [Index.FolderShield_2Fill]: "58310",
  [Index.FolderShield_2Line]: "58311",
  [Index.FolderShieldFill]: "58312",
  [Index.FolderShieldLine]: "58313",
  [Index.FolderTransferFill]: "58314",
  [Index.FolderTransferLine]: "58315",
  [Index.FolderUnknowFill]: "58316",
  [Index.FolderUnknowLine]: "58317",
  [Index.FolderUploadFill]: "58318",
  [Index.FolderUploadLine]: "58319",
  [Index.FolderUserFill]: "58320",
  [Index.FolderUserLine]: "58321",
  [Index.FolderWarningFill]: "58322",
  [Index.FolderWarningLine]: "58323",
  [Index.FolderZipFill]: "58324",
  [Index.FolderZipLine]: "58325",
  [Index.FoldersFill]: "58326",
  [Index.FoldersLine]: "58327",
  [Index.KeynoteFill]: "58328",
  [Index.KeynoteLine]: "58329",
  [Index.MarkdownFill]: "58330",
  [Index.MarkdownLine]: "58331",
  [Index.NewspaperFill]: "58332",
  [Index.NewspaperLine]: "58333",
  [Index.NumbersFill]: "58334",
  [Index.NumbersLine]: "58335",
  [Index.PagesFill]: "58336",
  [Index.PagesLine]: "58337",
  [Index.StickyNote_2Fill]: "58338",
  [Index.StickyNote_2Line]: "58339",
  [Index.StickyNoteFill]: "58340",
  [Index.StickyNoteLine]: "58341",
  [Index.SurveyFill]: "58342",
  [Index.SurveyLine]: "58343",
  [Index.TaskFill]: "58344",
  [Index.TaskLine]: "58345",
  [Index.TodoFill]: "58346",
  [Index.TodoLine]: "58347",
};
