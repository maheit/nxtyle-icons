export type IndexId =
  | "fe-activity"
  | "fe-airplay"
  | "fe-alert-circle"
  | "fe-alert-octagon"
  | "fe-alert-triangle"
  | "fe-align-center"
  | "fe-align-justify"
  | "fe-align-left"
  | "fe-align-right"
  | "fe-anchor"
  | "fe-aperture"
  | "fe-archive"
  | "fe-arrow-down-circle"
  | "fe-arrow-down-left"
  | "fe-arrow-down-right"
  | "fe-arrow-down"
  | "fe-arrow-left-circle"
  | "fe-arrow-left"
  | "fe-arrow-right-circle"
  | "fe-arrow-right"
  | "fe-arrow-up-circle"
  | "fe-arrow-up-left"
  | "fe-arrow-up-right"
  | "fe-arrow-up"
  | "fe-at-sign"
  | "fe-award"
  | "fe-bar-chart-2"
  | "fe-bar-chart"
  | "fe-battery-charging"
  | "fe-battery"
  | "fe-bell-off"
  | "fe-bell"
  | "fe-bluetooth"
  | "fe-bold"
  | "fe-book-open"
  | "fe-book"
  | "fe-bookmark"
  | "fe-box"
  | "fe-briefcase"
  | "fe-calendar"
  | "fe-camera-off"
  | "fe-camera"
  | "fe-cast"
  | "fe-check-circle"
  | "fe-check-square"
  | "fe-check"
  | "fe-chevron-down"
  | "fe-chevron-left"
  | "fe-chevron-right"
  | "fe-chevron-up"
  | "fe-chevrons-down"
  | "fe-chevrons-left"
  | "fe-chevrons-right"
  | "fe-chevrons-up"
  | "fe-chrome"
  | "fe-circle"
  | "fe-clipboard"
  | "fe-clock"
  | "fe-cloud-drizzle"
  | "fe-cloud-lightning"
  | "fe-cloud-off"
  | "fe-cloud-rain"
  | "fe-cloud-snow"
  | "fe-cloud"
  | "fe-code"
  | "fe-codepen"
  | "fe-codesandbox"
  | "fe-coffee"
  | "fe-columns"
  | "fe-command"
  | "fe-compass"
  | "fe-copy"
  | "fe-corner-down-left"
  | "fe-corner-down-right"
  | "fe-corner-left-down"
  | "fe-corner-left-up"
  | "fe-corner-right-down"
  | "fe-corner-right-up"
  | "fe-corner-up-left"
  | "fe-corner-up-right"
  | "fe-cpu"
  | "fe-credit-card"
  | "fe-crop"
  | "fe-crosshair"
  | "fe-database"
  | "fe-delete"
  | "fe-disc"
  | "fe-divide-circle"
  | "fe-divide-square"
  | "fe-divide"
  | "fe-dollar-sign"
  | "fe-download-cloud"
  | "fe-download"
  | "fe-dribbble"
  | "fe-droplet"
  | "fe-edit-2"
  | "fe-edit-3"
  | "fe-edit"
  | "fe-external-link"
  | "fe-eye-off"
  | "fe-eye"
  | "fe-facebook"
  | "fe-fast-forward"
  | "fe-feather"
  | "fe-figma"
  | "fe-file-minus"
  | "fe-file-plus"
  | "fe-file-text"
  | "fe-file"
  | "fe-film"
  | "fe-filter"
  | "fe-flag"
  | "fe-folder-minus"
  | "fe-folder-plus"
  | "fe-folder"
  | "fe-framer"
  | "fe-frown"
  | "fe-gift"
  | "fe-git-branch"
  | "fe-git-commit"
  | "fe-git-merge"
  | "fe-git-pull-request"
  | "fe-github"
  | "fe-gitlab"
  | "fe-globe"
  | "fe-grid"
  | "fe-hard-drive"
  | "fe-hash"
  | "fe-headphones"
  | "fe-heart"
  | "fe-help-circle"
  | "fe-hexagon"
  | "fe-home"
  | "fe-image"
  | "fe-inbox"
  | "fe-info"
  | "fe-instagram"
  | "fe-italic"
  | "fe-key"
  | "fe-layers"
  | "fe-layout"
  | "fe-life-buoy"
  | "fe-link-2"
  | "fe-link"
  | "fe-linkedin"
  | "fe-list"
  | "fe-loader"
  | "fe-lock"
  | "fe-log-in"
  | "fe-log-out"
  | "fe-mail"
  | "fe-map-pin"
  | "fe-map"
  | "fe-maximize-2"
  | "fe-maximize"
  | "fe-meh"
  | "fe-menu"
  | "fe-message-circle"
  | "fe-message-square"
  | "fe-mic-off"
  | "fe-mic"
  | "fe-minimize-2"
  | "fe-minimize"
  | "fe-minus-circle"
  | "fe-minus-square"
  | "fe-minus"
  | "fe-monitor"
  | "fe-moon"
  | "fe-more-horizontal"
  | "fe-more-vertical"
  | "fe-mouse-pointer"
  | "fe-move"
  | "fe-music"
  | "fe-navigation-2"
  | "fe-navigation"
  | "fe-octagon"
  | "fe-package"
  | "fe-paperclip"
  | "fe-pause-circle"
  | "fe-pause"
  | "fe-pen-tool"
  | "fe-percent"
  | "fe-phone-call"
  | "fe-phone-forwarded"
  | "fe-phone-incoming"
  | "fe-phone-missed"
  | "fe-phone-off"
  | "fe-phone-outgoing"
  | "fe-phone"
  | "fe-pie-chart"
  | "fe-play-circle"
  | "fe-play"
  | "fe-plus-circle"
  | "fe-plus-square"
  | "fe-plus"
  | "fe-pocket"
  | "fe-power"
  | "fe-printer"
  | "fe-radio"
  | "fe-refresh-ccw"
  | "fe-refresh-cw"
  | "fe-repeat"
  | "fe-rewind"
  | "fe-rotate-ccw"
  | "fe-rotate-cw"
  | "fe-rss"
  | "fe-save"
  | "fe-scissors"
  | "fe-search"
  | "fe-send"
  | "fe-server"
  | "fe-settings"
  | "fe-share-2"
  | "fe-share"
  | "fe-shield-off"
  | "fe-shield"
  | "fe-shopping-bag"
  | "fe-shopping-cart"
  | "fe-shuffle"
  | "fe-sidebar"
  | "fe-skip-back"
  | "fe-skip-forward"
  | "fe-slack"
  | "fe-slash"
  | "fe-sliders"
  | "fe-smartphone"
  | "fe-smile"
  | "fe-speaker"
  | "fe-square"
  | "fe-star"
  | "fe-stop-circle"
  | "fe-sun"
  | "fe-sunrise"
  | "fe-sunset"
  | "fe-table"
  | "fe-tablet"
  | "fe-tag"
  | "fe-target"
  | "fe-terminal"
  | "fe-thermometer"
  | "fe-thumbs-down"
  | "fe-thumbs-up"
  | "fe-toggle-left"
  | "fe-toggle-right"
  | "fe-tool"
  | "fe-trash-2"
  | "fe-trash"
  | "fe-trello"
  | "fe-trending-down"
  | "fe-trending-up"
  | "fe-triangle"
  | "fe-truck"
  | "fe-tv"
  | "fe-twitch"
  | "fe-twitter"
  | "fe-type"
  | "fe-umbrella"
  | "fe-underline"
  | "fe-unlock"
  | "fe-upload-cloud"
  | "fe-upload"
  | "fe-user-check"
  | "fe-user-minus"
  | "fe-user-plus"
  | "fe-user-x"
  | "fe-user"
  | "fe-users"
  | "fe-video-off"
  | "fe-video"
  | "fe-voicemail"
  | "fe-volume-1"
  | "fe-volume-2"
  | "fe-volume-x"
  | "fe-volume"
  | "fe-watch"
  | "fe-wifi-off"
  | "fe-wifi"
  | "fe-wind"
  | "fe-x-circle"
  | "fe-x-octagon"
  | "fe-x-square"
  | "fe-x"
  | "fe-youtube"
  | "fe-zap-off"
  | "fe-zap"
  | "fe-zoom-in"
  | "fe-zoom-out";

export type IndexKey =
  | "FeActivity"
  | "FeAirplay"
  | "FeAlertCircle"
  | "FeAlertOctagon"
  | "FeAlertTriangle"
  | "FeAlignCenter"
  | "FeAlignJustify"
  | "FeAlignLeft"
  | "FeAlignRight"
  | "FeAnchor"
  | "FeAperture"
  | "FeArchive"
  | "FeArrowDownCircle"
  | "FeArrowDownLeft"
  | "FeArrowDownRight"
  | "FeArrowDown"
  | "FeArrowLeftCircle"
  | "FeArrowLeft"
  | "FeArrowRightCircle"
  | "FeArrowRight"
  | "FeArrowUpCircle"
  | "FeArrowUpLeft"
  | "FeArrowUpRight"
  | "FeArrowUp"
  | "FeAtSign"
  | "FeAward"
  | "FeBarChart_2"
  | "FeBarChart"
  | "FeBatteryCharging"
  | "FeBattery"
  | "FeBellOff"
  | "FeBell"
  | "FeBluetooth"
  | "FeBold"
  | "FeBookOpen"
  | "FeBook"
  | "FeBookmark"
  | "FeBox"
  | "FeBriefcase"
  | "FeCalendar"
  | "FeCameraOff"
  | "FeCamera"
  | "FeCast"
  | "FeCheckCircle"
  | "FeCheckSquare"
  | "FeCheck"
  | "FeChevronDown"
  | "FeChevronLeft"
  | "FeChevronRight"
  | "FeChevronUp"
  | "FeChevronsDown"
  | "FeChevronsLeft"
  | "FeChevronsRight"
  | "FeChevronsUp"
  | "FeChrome"
  | "FeCircle"
  | "FeClipboard"
  | "FeClock"
  | "FeCloudDrizzle"
  | "FeCloudLightning"
  | "FeCloudOff"
  | "FeCloudRain"
  | "FeCloudSnow"
  | "FeCloud"
  | "FeCode"
  | "FeCodepen"
  | "FeCodesandbox"
  | "FeCoffee"
  | "FeColumns"
  | "FeCommand"
  | "FeCompass"
  | "FeCopy"
  | "FeCornerDownLeft"
  | "FeCornerDownRight"
  | "FeCornerLeftDown"
  | "FeCornerLeftUp"
  | "FeCornerRightDown"
  | "FeCornerRightUp"
  | "FeCornerUpLeft"
  | "FeCornerUpRight"
  | "FeCpu"
  | "FeCreditCard"
  | "FeCrop"
  | "FeCrosshair"
  | "FeDatabase"
  | "FeDelete"
  | "FeDisc"
  | "FeDivideCircle"
  | "FeDivideSquare"
  | "FeDivide"
  | "FeDollarSign"
  | "FeDownloadCloud"
  | "FeDownload"
  | "FeDribbble"
  | "FeDroplet"
  | "FeEdit_2"
  | "FeEdit_3"
  | "FeEdit"
  | "FeExternalLink"
  | "FeEyeOff"
  | "FeEye"
  | "FeFacebook"
  | "FeFastForward"
  | "FeFeather"
  | "FeFigma"
  | "FeFileMinus"
  | "FeFilePlus"
  | "FeFileText"
  | "FeFile"
  | "FeFilm"
  | "FeFilter"
  | "FeFlag"
  | "FeFolderMinus"
  | "FeFolderPlus"
  | "FeFolder"
  | "FeFramer"
  | "FeFrown"
  | "FeGift"
  | "FeGitBranch"
  | "FeGitCommit"
  | "FeGitMerge"
  | "FeGitPullRequest"
  | "FeGithub"
  | "FeGitlab"
  | "FeGlobe"
  | "FeGrid"
  | "FeHardDrive"
  | "FeHash"
  | "FeHeadphones"
  | "FeHeart"
  | "FeHelpCircle"
  | "FeHexagon"
  | "FeHome"
  | "FeImage"
  | "FeInbox"
  | "FeInfo"
  | "FeInstagram"
  | "FeItalic"
  | "FeKey"
  | "FeLayers"
  | "FeLayout"
  | "FeLifeBuoy"
  | "FeLink_2"
  | "FeLink"
  | "FeLinkedin"
  | "FeList"
  | "FeLoader"
  | "FeLock"
  | "FeLogIn"
  | "FeLogOut"
  | "FeMail"
  | "FeMapPin"
  | "FeMap"
  | "FeMaximize_2"
  | "FeMaximize"
  | "FeMeh"
  | "FeMenu"
  | "FeMessageCircle"
  | "FeMessageSquare"
  | "FeMicOff"
  | "FeMic"
  | "FeMinimize_2"
  | "FeMinimize"
  | "FeMinusCircle"
  | "FeMinusSquare"
  | "FeMinus"
  | "FeMonitor"
  | "FeMoon"
  | "FeMoreHorizontal"
  | "FeMoreVertical"
  | "FeMousePointer"
  | "FeMove"
  | "FeMusic"
  | "FeNavigation_2"
  | "FeNavigation"
  | "FeOctagon"
  | "FePackage"
  | "FePaperclip"
  | "FePauseCircle"
  | "FePause"
  | "FePenTool"
  | "FePercent"
  | "FePhoneCall"
  | "FePhoneForwarded"
  | "FePhoneIncoming"
  | "FePhoneMissed"
  | "FePhoneOff"
  | "FePhoneOutgoing"
  | "FePhone"
  | "FePieChart"
  | "FePlayCircle"
  | "FePlay"
  | "FePlusCircle"
  | "FePlusSquare"
  | "FePlus"
  | "FePocket"
  | "FePower"
  | "FePrinter"
  | "FeRadio"
  | "FeRefreshCcw"
  | "FeRefreshCw"
  | "FeRepeat"
  | "FeRewind"
  | "FeRotateCcw"
  | "FeRotateCw"
  | "FeRss"
  | "FeSave"
  | "FeScissors"
  | "FeSearch"
  | "FeSend"
  | "FeServer"
  | "FeSettings"
  | "FeShare_2"
  | "FeShare"
  | "FeShieldOff"
  | "FeShield"
  | "FeShoppingBag"
  | "FeShoppingCart"
  | "FeShuffle"
  | "FeSidebar"
  | "FeSkipBack"
  | "FeSkipForward"
  | "FeSlack"
  | "FeSlash"
  | "FeSliders"
  | "FeSmartphone"
  | "FeSmile"
  | "FeSpeaker"
  | "FeSquare"
  | "FeStar"
  | "FeStopCircle"
  | "FeSun"
  | "FeSunrise"
  | "FeSunset"
  | "FeTable"
  | "FeTablet"
  | "FeTag"
  | "FeTarget"
  | "FeTerminal"
  | "FeThermometer"
  | "FeThumbsDown"
  | "FeThumbsUp"
  | "FeToggleLeft"
  | "FeToggleRight"
  | "FeTool"
  | "FeTrash_2"
  | "FeTrash"
  | "FeTrello"
  | "FeTrendingDown"
  | "FeTrendingUp"
  | "FeTriangle"
  | "FeTruck"
  | "FeTv"
  | "FeTwitch"
  | "FeTwitter"
  | "FeType"
  | "FeUmbrella"
  | "FeUnderline"
  | "FeUnlock"
  | "FeUploadCloud"
  | "FeUpload"
  | "FeUserCheck"
  | "FeUserMinus"
  | "FeUserPlus"
  | "FeUserX"
  | "FeUser"
  | "FeUsers"
  | "FeVideoOff"
  | "FeVideo"
  | "FeVoicemail"
  | "FeVolume_1"
  | "FeVolume_2"
  | "FeVolumeX"
  | "FeVolume"
  | "FeWatch"
  | "FeWifiOff"
  | "FeWifi"
  | "FeWind"
  | "FeXCircle"
  | "FeXOctagon"
  | "FeXSquare"
  | "FeX"
  | "FeYoutube"
  | "FeZapOff"
  | "FeZap"
  | "FeZoomIn"
  | "FeZoomOut";

export enum Index {
  FeActivity = "fe-activity",
  FeAirplay = "fe-airplay",
  FeAlertCircle = "fe-alert-circle",
  FeAlertOctagon = "fe-alert-octagon",
  FeAlertTriangle = "fe-alert-triangle",
  FeAlignCenter = "fe-align-center",
  FeAlignJustify = "fe-align-justify",
  FeAlignLeft = "fe-align-left",
  FeAlignRight = "fe-align-right",
  FeAnchor = "fe-anchor",
  FeAperture = "fe-aperture",
  FeArchive = "fe-archive",
  FeArrowDownCircle = "fe-arrow-down-circle",
  FeArrowDownLeft = "fe-arrow-down-left",
  FeArrowDownRight = "fe-arrow-down-right",
  FeArrowDown = "fe-arrow-down",
  FeArrowLeftCircle = "fe-arrow-left-circle",
  FeArrowLeft = "fe-arrow-left",
  FeArrowRightCircle = "fe-arrow-right-circle",
  FeArrowRight = "fe-arrow-right",
  FeArrowUpCircle = "fe-arrow-up-circle",
  FeArrowUpLeft = "fe-arrow-up-left",
  FeArrowUpRight = "fe-arrow-up-right",
  FeArrowUp = "fe-arrow-up",
  FeAtSign = "fe-at-sign",
  FeAward = "fe-award",
  FeBarChart_2 = "fe-bar-chart-2",
  FeBarChart = "fe-bar-chart",
  FeBatteryCharging = "fe-battery-charging",
  FeBattery = "fe-battery",
  FeBellOff = "fe-bell-off",
  FeBell = "fe-bell",
  FeBluetooth = "fe-bluetooth",
  FeBold = "fe-bold",
  FeBookOpen = "fe-book-open",
  FeBook = "fe-book",
  FeBookmark = "fe-bookmark",
  FeBox = "fe-box",
  FeBriefcase = "fe-briefcase",
  FeCalendar = "fe-calendar",
  FeCameraOff = "fe-camera-off",
  FeCamera = "fe-camera",
  FeCast = "fe-cast",
  FeCheckCircle = "fe-check-circle",
  FeCheckSquare = "fe-check-square",
  FeCheck = "fe-check",
  FeChevronDown = "fe-chevron-down",
  FeChevronLeft = "fe-chevron-left",
  FeChevronRight = "fe-chevron-right",
  FeChevronUp = "fe-chevron-up",
  FeChevronsDown = "fe-chevrons-down",
  FeChevronsLeft = "fe-chevrons-left",
  FeChevronsRight = "fe-chevrons-right",
  FeChevronsUp = "fe-chevrons-up",
  FeChrome = "fe-chrome",
  FeCircle = "fe-circle",
  FeClipboard = "fe-clipboard",
  FeClock = "fe-clock",
  FeCloudDrizzle = "fe-cloud-drizzle",
  FeCloudLightning = "fe-cloud-lightning",
  FeCloudOff = "fe-cloud-off",
  FeCloudRain = "fe-cloud-rain",
  FeCloudSnow = "fe-cloud-snow",
  FeCloud = "fe-cloud",
  FeCode = "fe-code",
  FeCodepen = "fe-codepen",
  FeCodesandbox = "fe-codesandbox",
  FeCoffee = "fe-coffee",
  FeColumns = "fe-columns",
  FeCommand = "fe-command",
  FeCompass = "fe-compass",
  FeCopy = "fe-copy",
  FeCornerDownLeft = "fe-corner-down-left",
  FeCornerDownRight = "fe-corner-down-right",
  FeCornerLeftDown = "fe-corner-left-down",
  FeCornerLeftUp = "fe-corner-left-up",
  FeCornerRightDown = "fe-corner-right-down",
  FeCornerRightUp = "fe-corner-right-up",
  FeCornerUpLeft = "fe-corner-up-left",
  FeCornerUpRight = "fe-corner-up-right",
  FeCpu = "fe-cpu",
  FeCreditCard = "fe-credit-card",
  FeCrop = "fe-crop",
  FeCrosshair = "fe-crosshair",
  FeDatabase = "fe-database",
  FeDelete = "fe-delete",
  FeDisc = "fe-disc",
  FeDivideCircle = "fe-divide-circle",
  FeDivideSquare = "fe-divide-square",
  FeDivide = "fe-divide",
  FeDollarSign = "fe-dollar-sign",
  FeDownloadCloud = "fe-download-cloud",
  FeDownload = "fe-download",
  FeDribbble = "fe-dribbble",
  FeDroplet = "fe-droplet",
  FeEdit_2 = "fe-edit-2",
  FeEdit_3 = "fe-edit-3",
  FeEdit = "fe-edit",
  FeExternalLink = "fe-external-link",
  FeEyeOff = "fe-eye-off",
  FeEye = "fe-eye",
  FeFacebook = "fe-facebook",
  FeFastForward = "fe-fast-forward",
  FeFeather = "fe-feather",
  FeFigma = "fe-figma",
  FeFileMinus = "fe-file-minus",
  FeFilePlus = "fe-file-plus",
  FeFileText = "fe-file-text",
  FeFile = "fe-file",
  FeFilm = "fe-film",
  FeFilter = "fe-filter",
  FeFlag = "fe-flag",
  FeFolderMinus = "fe-folder-minus",
  FeFolderPlus = "fe-folder-plus",
  FeFolder = "fe-folder",
  FeFramer = "fe-framer",
  FeFrown = "fe-frown",
  FeGift = "fe-gift",
  FeGitBranch = "fe-git-branch",
  FeGitCommit = "fe-git-commit",
  FeGitMerge = "fe-git-merge",
  FeGitPullRequest = "fe-git-pull-request",
  FeGithub = "fe-github",
  FeGitlab = "fe-gitlab",
  FeGlobe = "fe-globe",
  FeGrid = "fe-grid",
  FeHardDrive = "fe-hard-drive",
  FeHash = "fe-hash",
  FeHeadphones = "fe-headphones",
  FeHeart = "fe-heart",
  FeHelpCircle = "fe-help-circle",
  FeHexagon = "fe-hexagon",
  FeHome = "fe-home",
  FeImage = "fe-image",
  FeInbox = "fe-inbox",
  FeInfo = "fe-info",
  FeInstagram = "fe-instagram",
  FeItalic = "fe-italic",
  FeKey = "fe-key",
  FeLayers = "fe-layers",
  FeLayout = "fe-layout",
  FeLifeBuoy = "fe-life-buoy",
  FeLink_2 = "fe-link-2",
  FeLink = "fe-link",
  FeLinkedin = "fe-linkedin",
  FeList = "fe-list",
  FeLoader = "fe-loader",
  FeLock = "fe-lock",
  FeLogIn = "fe-log-in",
  FeLogOut = "fe-log-out",
  FeMail = "fe-mail",
  FeMapPin = "fe-map-pin",
  FeMap = "fe-map",
  FeMaximize_2 = "fe-maximize-2",
  FeMaximize = "fe-maximize",
  FeMeh = "fe-meh",
  FeMenu = "fe-menu",
  FeMessageCircle = "fe-message-circle",
  FeMessageSquare = "fe-message-square",
  FeMicOff = "fe-mic-off",
  FeMic = "fe-mic",
  FeMinimize_2 = "fe-minimize-2",
  FeMinimize = "fe-minimize",
  FeMinusCircle = "fe-minus-circle",
  FeMinusSquare = "fe-minus-square",
  FeMinus = "fe-minus",
  FeMonitor = "fe-monitor",
  FeMoon = "fe-moon",
  FeMoreHorizontal = "fe-more-horizontal",
  FeMoreVertical = "fe-more-vertical",
  FeMousePointer = "fe-mouse-pointer",
  FeMove = "fe-move",
  FeMusic = "fe-music",
  FeNavigation_2 = "fe-navigation-2",
  FeNavigation = "fe-navigation",
  FeOctagon = "fe-octagon",
  FePackage = "fe-package",
  FePaperclip = "fe-paperclip",
  FePauseCircle = "fe-pause-circle",
  FePause = "fe-pause",
  FePenTool = "fe-pen-tool",
  FePercent = "fe-percent",
  FePhoneCall = "fe-phone-call",
  FePhoneForwarded = "fe-phone-forwarded",
  FePhoneIncoming = "fe-phone-incoming",
  FePhoneMissed = "fe-phone-missed",
  FePhoneOff = "fe-phone-off",
  FePhoneOutgoing = "fe-phone-outgoing",
  FePhone = "fe-phone",
  FePieChart = "fe-pie-chart",
  FePlayCircle = "fe-play-circle",
  FePlay = "fe-play",
  FePlusCircle = "fe-plus-circle",
  FePlusSquare = "fe-plus-square",
  FePlus = "fe-plus",
  FePocket = "fe-pocket",
  FePower = "fe-power",
  FePrinter = "fe-printer",
  FeRadio = "fe-radio",
  FeRefreshCcw = "fe-refresh-ccw",
  FeRefreshCw = "fe-refresh-cw",
  FeRepeat = "fe-repeat",
  FeRewind = "fe-rewind",
  FeRotateCcw = "fe-rotate-ccw",
  FeRotateCw = "fe-rotate-cw",
  FeRss = "fe-rss",
  FeSave = "fe-save",
  FeScissors = "fe-scissors",
  FeSearch = "fe-search",
  FeSend = "fe-send",
  FeServer = "fe-server",
  FeSettings = "fe-settings",
  FeShare_2 = "fe-share-2",
  FeShare = "fe-share",
  FeShieldOff = "fe-shield-off",
  FeShield = "fe-shield",
  FeShoppingBag = "fe-shopping-bag",
  FeShoppingCart = "fe-shopping-cart",
  FeShuffle = "fe-shuffle",
  FeSidebar = "fe-sidebar",
  FeSkipBack = "fe-skip-back",
  FeSkipForward = "fe-skip-forward",
  FeSlack = "fe-slack",
  FeSlash = "fe-slash",
  FeSliders = "fe-sliders",
  FeSmartphone = "fe-smartphone",
  FeSmile = "fe-smile",
  FeSpeaker = "fe-speaker",
  FeSquare = "fe-square",
  FeStar = "fe-star",
  FeStopCircle = "fe-stop-circle",
  FeSun = "fe-sun",
  FeSunrise = "fe-sunrise",
  FeSunset = "fe-sunset",
  FeTable = "fe-table",
  FeTablet = "fe-tablet",
  FeTag = "fe-tag",
  FeTarget = "fe-target",
  FeTerminal = "fe-terminal",
  FeThermometer = "fe-thermometer",
  FeThumbsDown = "fe-thumbs-down",
  FeThumbsUp = "fe-thumbs-up",
  FeToggleLeft = "fe-toggle-left",
  FeToggleRight = "fe-toggle-right",
  FeTool = "fe-tool",
  FeTrash_2 = "fe-trash-2",
  FeTrash = "fe-trash",
  FeTrello = "fe-trello",
  FeTrendingDown = "fe-trending-down",
  FeTrendingUp = "fe-trending-up",
  FeTriangle = "fe-triangle",
  FeTruck = "fe-truck",
  FeTv = "fe-tv",
  FeTwitch = "fe-twitch",
  FeTwitter = "fe-twitter",
  FeType = "fe-type",
  FeUmbrella = "fe-umbrella",
  FeUnderline = "fe-underline",
  FeUnlock = "fe-unlock",
  FeUploadCloud = "fe-upload-cloud",
  FeUpload = "fe-upload",
  FeUserCheck = "fe-user-check",
  FeUserMinus = "fe-user-minus",
  FeUserPlus = "fe-user-plus",
  FeUserX = "fe-user-x",
  FeUser = "fe-user",
  FeUsers = "fe-users",
  FeVideoOff = "fe-video-off",
  FeVideo = "fe-video",
  FeVoicemail = "fe-voicemail",
  FeVolume_1 = "fe-volume-1",
  FeVolume_2 = "fe-volume-2",
  FeVolumeX = "fe-volume-x",
  FeVolume = "fe-volume",
  FeWatch = "fe-watch",
  FeWifiOff = "fe-wifi-off",
  FeWifi = "fe-wifi",
  FeWind = "fe-wind",
  FeXCircle = "fe-x-circle",
  FeXOctagon = "fe-x-octagon",
  FeXSquare = "fe-x-square",
  FeX = "fe-x",
  FeYoutube = "fe-youtube",
  FeZapOff = "fe-zap-off",
  FeZap = "fe-zap",
  FeZoomIn = "fe-zoom-in",
  FeZoomOut = "fe-zoom-out",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.FeActivity]: "61697",
  [Index.FeAirplay]: "61698",
  [Index.FeAlertCircle]: "61699",
  [Index.FeAlertOctagon]: "61700",
  [Index.FeAlertTriangle]: "61701",
  [Index.FeAlignCenter]: "61702",
  [Index.FeAlignJustify]: "61703",
  [Index.FeAlignLeft]: "61704",
  [Index.FeAlignRight]: "61705",
  [Index.FeAnchor]: "61706",
  [Index.FeAperture]: "61707",
  [Index.FeArchive]: "61708",
  [Index.FeArrowDownCircle]: "61709",
  [Index.FeArrowDownLeft]: "61710",
  [Index.FeArrowDownRight]: "61711",
  [Index.FeArrowDown]: "61712",
  [Index.FeArrowLeftCircle]: "61713",
  [Index.FeArrowLeft]: "61714",
  [Index.FeArrowRightCircle]: "61715",
  [Index.FeArrowRight]: "61716",
  [Index.FeArrowUpCircle]: "61717",
  [Index.FeArrowUpLeft]: "61718",
  [Index.FeArrowUpRight]: "61719",
  [Index.FeArrowUp]: "61720",
  [Index.FeAtSign]: "61721",
  [Index.FeAward]: "61722",
  [Index.FeBarChart_2]: "61723",
  [Index.FeBarChart]: "61724",
  [Index.FeBatteryCharging]: "61725",
  [Index.FeBattery]: "61726",
  [Index.FeBellOff]: "61727",
  [Index.FeBell]: "61728",
  [Index.FeBluetooth]: "61729",
  [Index.FeBold]: "61730",
  [Index.FeBookOpen]: "61731",
  [Index.FeBook]: "61732",
  [Index.FeBookmark]: "61733",
  [Index.FeBox]: "61734",
  [Index.FeBriefcase]: "61735",
  [Index.FeCalendar]: "61736",
  [Index.FeCameraOff]: "61737",
  [Index.FeCamera]: "61738",
  [Index.FeCast]: "61739",
  [Index.FeCheckCircle]: "61740",
  [Index.FeCheckSquare]: "61741",
  [Index.FeCheck]: "61742",
  [Index.FeChevronDown]: "61743",
  [Index.FeChevronLeft]: "61744",
  [Index.FeChevronRight]: "61745",
  [Index.FeChevronUp]: "61746",
  [Index.FeChevronsDown]: "61747",
  [Index.FeChevronsLeft]: "61748",
  [Index.FeChevronsRight]: "61749",
  [Index.FeChevronsUp]: "61750",
  [Index.FeChrome]: "61751",
  [Index.FeCircle]: "61752",
  [Index.FeClipboard]: "61753",
  [Index.FeClock]: "61754",
  [Index.FeCloudDrizzle]: "61755",
  [Index.FeCloudLightning]: "61756",
  [Index.FeCloudOff]: "61757",
  [Index.FeCloudRain]: "61758",
  [Index.FeCloudSnow]: "61759",
  [Index.FeCloud]: "61760",
  [Index.FeCode]: "61761",
  [Index.FeCodepen]: "61762",
  [Index.FeCodesandbox]: "61763",
  [Index.FeCoffee]: "61764",
  [Index.FeColumns]: "61765",
  [Index.FeCommand]: "61766",
  [Index.FeCompass]: "61767",
  [Index.FeCopy]: "61768",
  [Index.FeCornerDownLeft]: "61769",
  [Index.FeCornerDownRight]: "61770",
  [Index.FeCornerLeftDown]: "61771",
  [Index.FeCornerLeftUp]: "61772",
  [Index.FeCornerRightDown]: "61773",
  [Index.FeCornerRightUp]: "61774",
  [Index.FeCornerUpLeft]: "61775",
  [Index.FeCornerUpRight]: "61776",
  [Index.FeCpu]: "61777",
  [Index.FeCreditCard]: "61778",
  [Index.FeCrop]: "61779",
  [Index.FeCrosshair]: "61780",
  [Index.FeDatabase]: "61781",
  [Index.FeDelete]: "61782",
  [Index.FeDisc]: "61783",
  [Index.FeDivideCircle]: "61784",
  [Index.FeDivideSquare]: "61785",
  [Index.FeDivide]: "61786",
  [Index.FeDollarSign]: "61787",
  [Index.FeDownloadCloud]: "61788",
  [Index.FeDownload]: "61789",
  [Index.FeDribbble]: "61790",
  [Index.FeDroplet]: "61791",
  [Index.FeEdit_2]: "61792",
  [Index.FeEdit_3]: "61793",
  [Index.FeEdit]: "61794",
  [Index.FeExternalLink]: "61795",
  [Index.FeEyeOff]: "61796",
  [Index.FeEye]: "61797",
  [Index.FeFacebook]: "61798",
  [Index.FeFastForward]: "61799",
  [Index.FeFeather]: "61800",
  [Index.FeFigma]: "61801",
  [Index.FeFileMinus]: "61802",
  [Index.FeFilePlus]: "61803",
  [Index.FeFileText]: "61804",
  [Index.FeFile]: "61805",
  [Index.FeFilm]: "61806",
  [Index.FeFilter]: "61807",
  [Index.FeFlag]: "61808",
  [Index.FeFolderMinus]: "61809",
  [Index.FeFolderPlus]: "61810",
  [Index.FeFolder]: "61811",
  [Index.FeFramer]: "61812",
  [Index.FeFrown]: "61813",
  [Index.FeGift]: "61814",
  [Index.FeGitBranch]: "61815",
  [Index.FeGitCommit]: "61816",
  [Index.FeGitMerge]: "61817",
  [Index.FeGitPullRequest]: "61818",
  [Index.FeGithub]: "61819",
  [Index.FeGitlab]: "61820",
  [Index.FeGlobe]: "61821",
  [Index.FeGrid]: "61822",
  [Index.FeHardDrive]: "61823",
  [Index.FeHash]: "61824",
  [Index.FeHeadphones]: "61825",
  [Index.FeHeart]: "61826",
  [Index.FeHelpCircle]: "61827",
  [Index.FeHexagon]: "61828",
  [Index.FeHome]: "61829",
  [Index.FeImage]: "61830",
  [Index.FeInbox]: "61831",
  [Index.FeInfo]: "61832",
  [Index.FeInstagram]: "61833",
  [Index.FeItalic]: "61834",
  [Index.FeKey]: "61835",
  [Index.FeLayers]: "61836",
  [Index.FeLayout]: "61837",
  [Index.FeLifeBuoy]: "61838",
  [Index.FeLink_2]: "61839",
  [Index.FeLink]: "61840",
  [Index.FeLinkedin]: "61841",
  [Index.FeList]: "61842",
  [Index.FeLoader]: "61843",
  [Index.FeLock]: "61844",
  [Index.FeLogIn]: "61845",
  [Index.FeLogOut]: "61846",
  [Index.FeMail]: "61847",
  [Index.FeMapPin]: "61848",
  [Index.FeMap]: "61849",
  [Index.FeMaximize_2]: "61850",
  [Index.FeMaximize]: "61851",
  [Index.FeMeh]: "61852",
  [Index.FeMenu]: "61853",
  [Index.FeMessageCircle]: "61854",
  [Index.FeMessageSquare]: "61855",
  [Index.FeMicOff]: "61856",
  [Index.FeMic]: "61857",
  [Index.FeMinimize_2]: "61858",
  [Index.FeMinimize]: "61859",
  [Index.FeMinusCircle]: "61860",
  [Index.FeMinusSquare]: "61861",
  [Index.FeMinus]: "61862",
  [Index.FeMonitor]: "61863",
  [Index.FeMoon]: "61864",
  [Index.FeMoreHorizontal]: "61865",
  [Index.FeMoreVertical]: "61866",
  [Index.FeMousePointer]: "61867",
  [Index.FeMove]: "61868",
  [Index.FeMusic]: "61869",
  [Index.FeNavigation_2]: "61870",
  [Index.FeNavigation]: "61871",
  [Index.FeOctagon]: "61872",
  [Index.FePackage]: "61873",
  [Index.FePaperclip]: "61874",
  [Index.FePauseCircle]: "61875",
  [Index.FePause]: "61876",
  [Index.FePenTool]: "61877",
  [Index.FePercent]: "61878",
  [Index.FePhoneCall]: "61879",
  [Index.FePhoneForwarded]: "61880",
  [Index.FePhoneIncoming]: "61881",
  [Index.FePhoneMissed]: "61882",
  [Index.FePhoneOff]: "61883",
  [Index.FePhoneOutgoing]: "61884",
  [Index.FePhone]: "61885",
  [Index.FePieChart]: "61886",
  [Index.FePlayCircle]: "61887",
  [Index.FePlay]: "61888",
  [Index.FePlusCircle]: "61889",
  [Index.FePlusSquare]: "61890",
  [Index.FePlus]: "61891",
  [Index.FePocket]: "61892",
  [Index.FePower]: "61893",
  [Index.FePrinter]: "61894",
  [Index.FeRadio]: "61895",
  [Index.FeRefreshCcw]: "61896",
  [Index.FeRefreshCw]: "61897",
  [Index.FeRepeat]: "61898",
  [Index.FeRewind]: "61899",
  [Index.FeRotateCcw]: "61900",
  [Index.FeRotateCw]: "61901",
  [Index.FeRss]: "61902",
  [Index.FeSave]: "61903",
  [Index.FeScissors]: "61904",
  [Index.FeSearch]: "61905",
  [Index.FeSend]: "61906",
  [Index.FeServer]: "61907",
  [Index.FeSettings]: "61908",
  [Index.FeShare_2]: "61909",
  [Index.FeShare]: "61910",
  [Index.FeShieldOff]: "61911",
  [Index.FeShield]: "61912",
  [Index.FeShoppingBag]: "61913",
  [Index.FeShoppingCart]: "61914",
  [Index.FeShuffle]: "61915",
  [Index.FeSidebar]: "61916",
  [Index.FeSkipBack]: "61917",
  [Index.FeSkipForward]: "61918",
  [Index.FeSlack]: "61919",
  [Index.FeSlash]: "61920",
  [Index.FeSliders]: "61921",
  [Index.FeSmartphone]: "61922",
  [Index.FeSmile]: "61923",
  [Index.FeSpeaker]: "61924",
  [Index.FeSquare]: "61925",
  [Index.FeStar]: "61926",
  [Index.FeStopCircle]: "61927",
  [Index.FeSun]: "61928",
  [Index.FeSunrise]: "61929",
  [Index.FeSunset]: "61930",
  [Index.FeTable]: "61931",
  [Index.FeTablet]: "61932",
  [Index.FeTag]: "61933",
  [Index.FeTarget]: "61934",
  [Index.FeTerminal]: "61935",
  [Index.FeThermometer]: "61936",
  [Index.FeThumbsDown]: "61937",
  [Index.FeThumbsUp]: "61938",
  [Index.FeToggleLeft]: "61939",
  [Index.FeToggleRight]: "61940",
  [Index.FeTool]: "61941",
  [Index.FeTrash_2]: "61942",
  [Index.FeTrash]: "61943",
  [Index.FeTrello]: "61944",
  [Index.FeTrendingDown]: "61945",
  [Index.FeTrendingUp]: "61946",
  [Index.FeTriangle]: "61947",
  [Index.FeTruck]: "61948",
  [Index.FeTv]: "61949",
  [Index.FeTwitch]: "61950",
  [Index.FeTwitter]: "61951",
  [Index.FeType]: "61952",
  [Index.FeUmbrella]: "61953",
  [Index.FeUnderline]: "61954",
  [Index.FeUnlock]: "61955",
  [Index.FeUploadCloud]: "61956",
  [Index.FeUpload]: "61957",
  [Index.FeUserCheck]: "61958",
  [Index.FeUserMinus]: "61959",
  [Index.FeUserPlus]: "61960",
  [Index.FeUserX]: "61961",
  [Index.FeUser]: "61962",
  [Index.FeUsers]: "61963",
  [Index.FeVideoOff]: "61964",
  [Index.FeVideo]: "61965",
  [Index.FeVoicemail]: "61966",
  [Index.FeVolume_1]: "61967",
  [Index.FeVolume_2]: "61968",
  [Index.FeVolumeX]: "61969",
  [Index.FeVolume]: "61970",
  [Index.FeWatch]: "61971",
  [Index.FeWifiOff]: "61972",
  [Index.FeWifi]: "61973",
  [Index.FeWind]: "61974",
  [Index.FeXCircle]: "61975",
  [Index.FeXOctagon]: "61976",
  [Index.FeXSquare]: "61977",
  [Index.FeX]: "61978",
  [Index.FeYoutube]: "61979",
  [Index.FeZapOff]: "61980",
  [Index.FeZap]: "61981",
  [Index.FeZoomIn]: "61982",
  [Index.FeZoomOut]: "61983",
};
