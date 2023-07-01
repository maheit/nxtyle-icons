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
  [Index.FeActivity]: "57344",
  [Index.FeAirplay]: "57345",
  [Index.FeAlertCircle]: "57346",
  [Index.FeAlertOctagon]: "57347",
  [Index.FeAlertTriangle]: "57348",
  [Index.FeAlignCenter]: "57349",
  [Index.FeAlignJustify]: "57350",
  [Index.FeAlignLeft]: "57351",
  [Index.FeAlignRight]: "57352",
  [Index.FeAnchor]: "57353",
  [Index.FeAperture]: "57354",
  [Index.FeArchive]: "57355",
  [Index.FeArrowDownCircle]: "57356",
  [Index.FeArrowDownLeft]: "57357",
  [Index.FeArrowDownRight]: "57358",
  [Index.FeArrowDown]: "57359",
  [Index.FeArrowLeftCircle]: "57360",
  [Index.FeArrowLeft]: "57361",
  [Index.FeArrowRightCircle]: "57362",
  [Index.FeArrowRight]: "57363",
  [Index.FeArrowUpCircle]: "57364",
  [Index.FeArrowUpLeft]: "57365",
  [Index.FeArrowUpRight]: "57366",
  [Index.FeArrowUp]: "57367",
  [Index.FeAtSign]: "57368",
  [Index.FeAward]: "57369",
  [Index.FeBarChart_2]: "57370",
  [Index.FeBarChart]: "57371",
  [Index.FeBatteryCharging]: "57372",
  [Index.FeBattery]: "57373",
  [Index.FeBellOff]: "57374",
  [Index.FeBell]: "57375",
  [Index.FeBluetooth]: "57376",
  [Index.FeBold]: "57377",
  [Index.FeBookOpen]: "57378",
  [Index.FeBook]: "57379",
  [Index.FeBookmark]: "57380",
  [Index.FeBox]: "57381",
  [Index.FeBriefcase]: "57382",
  [Index.FeCalendar]: "57383",
  [Index.FeCameraOff]: "57384",
  [Index.FeCamera]: "57385",
  [Index.FeCast]: "57386",
  [Index.FeCheckCircle]: "57387",
  [Index.FeCheckSquare]: "57388",
  [Index.FeCheck]: "57389",
  [Index.FeChevronDown]: "57390",
  [Index.FeChevronLeft]: "57391",
  [Index.FeChevronRight]: "57392",
  [Index.FeChevronUp]: "57393",
  [Index.FeChevronsDown]: "57394",
  [Index.FeChevronsLeft]: "57395",
  [Index.FeChevronsRight]: "57396",
  [Index.FeChevronsUp]: "57397",
  [Index.FeChrome]: "57398",
  [Index.FeCircle]: "57399",
  [Index.FeClipboard]: "57400",
  [Index.FeClock]: "57401",
  [Index.FeCloudDrizzle]: "57402",
  [Index.FeCloudLightning]: "57403",
  [Index.FeCloudOff]: "57404",
  [Index.FeCloudRain]: "57405",
  [Index.FeCloudSnow]: "57406",
  [Index.FeCloud]: "57407",
  [Index.FeCode]: "57408",
  [Index.FeCodepen]: "57409",
  [Index.FeCodesandbox]: "57410",
  [Index.FeCoffee]: "57411",
  [Index.FeColumns]: "57412",
  [Index.FeCommand]: "57413",
  [Index.FeCompass]: "57414",
  [Index.FeCopy]: "57415",
  [Index.FeCornerDownLeft]: "57416",
  [Index.FeCornerDownRight]: "57417",
  [Index.FeCornerLeftDown]: "57418",
  [Index.FeCornerLeftUp]: "57419",
  [Index.FeCornerRightDown]: "57420",
  [Index.FeCornerRightUp]: "57421",
  [Index.FeCornerUpLeft]: "57422",
  [Index.FeCornerUpRight]: "57423",
  [Index.FeCpu]: "57424",
  [Index.FeCreditCard]: "57425",
  [Index.FeCrop]: "57426",
  [Index.FeCrosshair]: "57427",
  [Index.FeDatabase]: "57428",
  [Index.FeDelete]: "57429",
  [Index.FeDisc]: "57430",
  [Index.FeDivideCircle]: "57431",
  [Index.FeDivideSquare]: "57432",
  [Index.FeDivide]: "57433",
  [Index.FeDollarSign]: "57434",
  [Index.FeDownloadCloud]: "57435",
  [Index.FeDownload]: "57436",
  [Index.FeDribbble]: "57437",
  [Index.FeDroplet]: "57438",
  [Index.FeEdit_2]: "57439",
  [Index.FeEdit_3]: "57440",
  [Index.FeEdit]: "57441",
  [Index.FeExternalLink]: "57442",
  [Index.FeEyeOff]: "57443",
  [Index.FeEye]: "57444",
  [Index.FeFacebook]: "57445",
  [Index.FeFastForward]: "57446",
  [Index.FeFeather]: "57447",
  [Index.FeFigma]: "57448",
  [Index.FeFileMinus]: "57449",
  [Index.FeFilePlus]: "57450",
  [Index.FeFileText]: "57451",
  [Index.FeFile]: "57452",
  [Index.FeFilm]: "57453",
  [Index.FeFilter]: "57454",
  [Index.FeFlag]: "57455",
  [Index.FeFolderMinus]: "57456",
  [Index.FeFolderPlus]: "57457",
  [Index.FeFolder]: "57458",
  [Index.FeFramer]: "57459",
  [Index.FeFrown]: "57460",
  [Index.FeGift]: "57461",
  [Index.FeGitBranch]: "57462",
  [Index.FeGitCommit]: "57463",
  [Index.FeGitMerge]: "57464",
  [Index.FeGitPullRequest]: "57465",
  [Index.FeGithub]: "57466",
  [Index.FeGitlab]: "57467",
  [Index.FeGlobe]: "57468",
  [Index.FeGrid]: "57469",
  [Index.FeHardDrive]: "57470",
  [Index.FeHash]: "57471",
  [Index.FeHeadphones]: "57472",
  [Index.FeHeart]: "57473",
  [Index.FeHelpCircle]: "57474",
  [Index.FeHexagon]: "57475",
  [Index.FeHome]: "57476",
  [Index.FeImage]: "57477",
  [Index.FeInbox]: "57478",
  [Index.FeInfo]: "57479",
  [Index.FeInstagram]: "57480",
  [Index.FeItalic]: "57481",
  [Index.FeKey]: "57482",
  [Index.FeLayers]: "57483",
  [Index.FeLayout]: "57484",
  [Index.FeLifeBuoy]: "57485",
  [Index.FeLink_2]: "57486",
  [Index.FeLink]: "57487",
  [Index.FeLinkedin]: "57488",
  [Index.FeList]: "57489",
  [Index.FeLoader]: "57490",
  [Index.FeLock]: "57491",
  [Index.FeLogIn]: "57492",
  [Index.FeLogOut]: "57493",
  [Index.FeMail]: "57494",
  [Index.FeMapPin]: "57495",
  [Index.FeMap]: "57496",
  [Index.FeMaximize_2]: "57497",
  [Index.FeMaximize]: "57498",
  [Index.FeMeh]: "57499",
  [Index.FeMenu]: "57500",
  [Index.FeMessageCircle]: "57501",
  [Index.FeMessageSquare]: "57502",
  [Index.FeMicOff]: "57503",
  [Index.FeMic]: "57504",
  [Index.FeMinimize_2]: "57505",
  [Index.FeMinimize]: "57506",
  [Index.FeMinusCircle]: "57507",
  [Index.FeMinusSquare]: "57508",
  [Index.FeMinus]: "57509",
  [Index.FeMonitor]: "57510",
  [Index.FeMoon]: "57511",
  [Index.FeMoreHorizontal]: "57512",
  [Index.FeMoreVertical]: "57513",
  [Index.FeMousePointer]: "57514",
  [Index.FeMove]: "57515",
  [Index.FeMusic]: "57516",
  [Index.FeNavigation_2]: "57517",
  [Index.FeNavigation]: "57518",
  [Index.FeOctagon]: "57519",
  [Index.FePackage]: "57520",
  [Index.FePaperclip]: "57521",
  [Index.FePauseCircle]: "57522",
  [Index.FePause]: "57523",
  [Index.FePenTool]: "57524",
  [Index.FePercent]: "57525",
  [Index.FePhoneCall]: "57526",
  [Index.FePhoneForwarded]: "57527",
  [Index.FePhoneIncoming]: "57528",
  [Index.FePhoneMissed]: "57529",
  [Index.FePhoneOff]: "57530",
  [Index.FePhoneOutgoing]: "57531",
  [Index.FePhone]: "57532",
  [Index.FePieChart]: "57533",
  [Index.FePlayCircle]: "57534",
  [Index.FePlay]: "57535",
  [Index.FePlusCircle]: "57536",
  [Index.FePlusSquare]: "57537",
  [Index.FePlus]: "57538",
  [Index.FePocket]: "57539",
  [Index.FePower]: "57540",
  [Index.FePrinter]: "57541",
  [Index.FeRadio]: "57542",
  [Index.FeRefreshCcw]: "57543",
  [Index.FeRefreshCw]: "57544",
  [Index.FeRepeat]: "57545",
  [Index.FeRewind]: "57546",
  [Index.FeRotateCcw]: "57547",
  [Index.FeRotateCw]: "57548",
  [Index.FeRss]: "57549",
  [Index.FeSave]: "57550",
  [Index.FeScissors]: "57551",
  [Index.FeSearch]: "57552",
  [Index.FeSend]: "57553",
  [Index.FeServer]: "57554",
  [Index.FeSettings]: "57555",
  [Index.FeShare_2]: "57556",
  [Index.FeShare]: "57557",
  [Index.FeShieldOff]: "57558",
  [Index.FeShield]: "57559",
  [Index.FeShoppingBag]: "57560",
  [Index.FeShoppingCart]: "57561",
  [Index.FeShuffle]: "57562",
  [Index.FeSidebar]: "57563",
  [Index.FeSkipBack]: "57564",
  [Index.FeSkipForward]: "57565",
  [Index.FeSlack]: "57566",
  [Index.FeSlash]: "57567",
  [Index.FeSliders]: "57568",
  [Index.FeSmartphone]: "57569",
  [Index.FeSmile]: "57570",
  [Index.FeSpeaker]: "57571",
  [Index.FeSquare]: "57572",
  [Index.FeStar]: "57573",
  [Index.FeStopCircle]: "57574",
  [Index.FeSun]: "57575",
  [Index.FeSunrise]: "57576",
  [Index.FeSunset]: "57577",
  [Index.FeTable]: "57578",
  [Index.FeTablet]: "57579",
  [Index.FeTag]: "57580",
  [Index.FeTarget]: "57581",
  [Index.FeTerminal]: "57582",
  [Index.FeThermometer]: "57583",
  [Index.FeThumbsDown]: "57584",
  [Index.FeThumbsUp]: "57585",
  [Index.FeToggleLeft]: "57586",
  [Index.FeToggleRight]: "57587",
  [Index.FeTool]: "57588",
  [Index.FeTrash_2]: "57589",
  [Index.FeTrash]: "57590",
  [Index.FeTrello]: "57591",
  [Index.FeTrendingDown]: "57592",
  [Index.FeTrendingUp]: "57593",
  [Index.FeTriangle]: "57594",
  [Index.FeTruck]: "57595",
  [Index.FeTv]: "57596",
  [Index.FeTwitch]: "57597",
  [Index.FeTwitter]: "57598",
  [Index.FeType]: "57599",
  [Index.FeUmbrella]: "57600",
  [Index.FeUnderline]: "57601",
  [Index.FeUnlock]: "57602",
  [Index.FeUploadCloud]: "57603",
  [Index.FeUpload]: "57604",
  [Index.FeUserCheck]: "57605",
  [Index.FeUserMinus]: "57606",
  [Index.FeUserPlus]: "57607",
  [Index.FeUserX]: "57608",
  [Index.FeUser]: "57609",
  [Index.FeUsers]: "57610",
  [Index.FeVideoOff]: "57611",
  [Index.FeVideo]: "57612",
  [Index.FeVoicemail]: "57613",
  [Index.FeVolume_1]: "57614",
  [Index.FeVolume_2]: "57615",
  [Index.FeVolumeX]: "57616",
  [Index.FeVolume]: "57617",
  [Index.FeWatch]: "57618",
  [Index.FeWifiOff]: "57619",
  [Index.FeWifi]: "57620",
  [Index.FeWind]: "57621",
  [Index.FeXCircle]: "57622",
  [Index.FeXOctagon]: "57623",
  [Index.FeXSquare]: "57624",
  [Index.FeX]: "57625",
  [Index.FeYoutube]: "57626",
  [Index.FeZapOff]: "57627",
  [Index.FeZap]: "57628",
  [Index.FeZoomIn]: "57629",
  [Index.FeZoomOut]: "57630",
};
