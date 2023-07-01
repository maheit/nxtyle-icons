export type IndexId =
  | "basketball-fill"
  | "basketball-line"
  | "bell-fill"
  | "bell-line"
  | "billiards-fill"
  | "billiards-line"
  | "box-1-fill"
  | "box-1-line"
  | "box-2-fill"
  | "box-2-line"
  | "box-3-fill"
  | "box-3-line"
  | "boxing-fill"
  | "boxing-line"
  | "cactus-fill"
  | "cactus-line"
  | "cake-2-fill"
  | "cake-2-line"
  | "cake-3-fill"
  | "cake-3-line"
  | "cake-fill"
  | "cake-line"
  | "candle-fill"
  | "candle-line"
  | "character-recognition-fill"
  | "character-recognition-line"
  | "cross-fill"
  | "cross-line"
  | "door-closed-fill"
  | "door-closed-line"
  | "door-fill"
  | "door-line"
  | "door-lock-box-fill"
  | "door-lock-box-line"
  | "door-lock-fill"
  | "door-lock-line"
  | "door-open-fill"
  | "door-open-line"
  | "football-fill"
  | "football-line"
  | "fridge-fill"
  | "fridge-line"
  | "game-fill"
  | "game-line"
  | "graduation-cap-fill"
  | "graduation-cap-line"
  | "handbag-fill"
  | "handbag-line"
  | "infinity-fill"
  | "infinity-line"
  | "key-2-fill"
  | "key-2-line"
  | "key-fill"
  | "key-line"
  | "knife-blood-fill"
  | "knife-blood-line"
  | "knife-fill"
  | "knife-line"
  | "leaf-fill"
  | "leaf-line"
  | "lightbulb-fill"
  | "lightbulb-flash-fill"
  | "lightbulb-flash-line"
  | "lightbulb-line"
  | "outlet-2-fill"
  | "outlet-2-line"
  | "outlet-fill"
  | "outlet-line"
  | "ping-pong-fill"
  | "ping-pong-line"
  | "plant-fill"
  | "plant-line"
  | "plug-2-fill"
  | "plug-2-line"
  | "plug-fill"
  | "plug-line"
  | "recycle-fill"
  | "recycle-line"
  | "reserved-fill"
  | "reserved-line"
  | "scales-2-fill"
  | "scales-2-line"
  | "scales-3-fill"
  | "scales-3-line"
  | "scales-fill"
  | "scales-line"
  | "seedling-fill"
  | "seedling-line"
  | "shirt-fill"
  | "shirt-line"
  | "sword-fill"
  | "sword-line"
  | "t-shirt-2-fill"
  | "t-shirt-2-line"
  | "t-shirt-air-fill"
  | "t-shirt-air-line"
  | "t-shirt-fill"
  | "t-shirt-line"
  | "umbrella-fill"
  | "umbrella-line"
  | "voice-recognition-fill"
  | "voice-recognition-line"
  | "wheelchair-fill"
  | "wheelchair-line";

export type IndexKey =
  | "BasketballFill"
  | "BasketballLine"
  | "BellFill"
  | "BellLine"
  | "BilliardsFill"
  | "BilliardsLine"
  | "Box_1Fill"
  | "Box_1Line"
  | "Box_2Fill"
  | "Box_2Line"
  | "Box_3Fill"
  | "Box_3Line"
  | "BoxingFill"
  | "BoxingLine"
  | "CactusFill"
  | "CactusLine"
  | "Cake_2Fill"
  | "Cake_2Line"
  | "Cake_3Fill"
  | "Cake_3Line"
  | "CakeFill"
  | "CakeLine"
  | "CandleFill"
  | "CandleLine"
  | "CharacterRecognitionFill"
  | "CharacterRecognitionLine"
  | "CrossFill"
  | "CrossLine"
  | "DoorClosedFill"
  | "DoorClosedLine"
  | "DoorFill"
  | "DoorLine"
  | "DoorLockBoxFill"
  | "DoorLockBoxLine"
  | "DoorLockFill"
  | "DoorLockLine"
  | "DoorOpenFill"
  | "DoorOpenLine"
  | "FootballFill"
  | "FootballLine"
  | "FridgeFill"
  | "FridgeLine"
  | "GameFill"
  | "GameLine"
  | "GraduationCapFill"
  | "GraduationCapLine"
  | "HandbagFill"
  | "HandbagLine"
  | "InfinityFill"
  | "InfinityLine"
  | "Key_2Fill"
  | "Key_2Line"
  | "KeyFill"
  | "KeyLine"
  | "KnifeBloodFill"
  | "KnifeBloodLine"
  | "KnifeFill"
  | "KnifeLine"
  | "LeafFill"
  | "LeafLine"
  | "LightbulbFill"
  | "LightbulbFlashFill"
  | "LightbulbFlashLine"
  | "LightbulbLine"
  | "Outlet_2Fill"
  | "Outlet_2Line"
  | "OutletFill"
  | "OutletLine"
  | "PingPongFill"
  | "PingPongLine"
  | "PlantFill"
  | "PlantLine"
  | "Plug_2Fill"
  | "Plug_2Line"
  | "PlugFill"
  | "PlugLine"
  | "RecycleFill"
  | "RecycleLine"
  | "ReservedFill"
  | "ReservedLine"
  | "Scales_2Fill"
  | "Scales_2Line"
  | "Scales_3Fill"
  | "Scales_3Line"
  | "ScalesFill"
  | "ScalesLine"
  | "SeedlingFill"
  | "SeedlingLine"
  | "ShirtFill"
  | "ShirtLine"
  | "SwordFill"
  | "SwordLine"
  | "TShirt_2Fill"
  | "TShirt_2Line"
  | "TShirtAirFill"
  | "TShirtAirLine"
  | "TShirtFill"
  | "TShirtLine"
  | "UmbrellaFill"
  | "UmbrellaLine"
  | "VoiceRecognitionFill"
  | "VoiceRecognitionLine"
  | "WheelchairFill"
  | "WheelchairLine";

export enum Index {
  BasketballFill = "basketball-fill",
  BasketballLine = "basketball-line",
  BellFill = "bell-fill",
  BellLine = "bell-line",
  BilliardsFill = "billiards-fill",
  BilliardsLine = "billiards-line",
  Box_1Fill = "box-1-fill",
  Box_1Line = "box-1-line",
  Box_2Fill = "box-2-fill",
  Box_2Line = "box-2-line",
  Box_3Fill = "box-3-fill",
  Box_3Line = "box-3-line",
  BoxingFill = "boxing-fill",
  BoxingLine = "boxing-line",
  CactusFill = "cactus-fill",
  CactusLine = "cactus-line",
  Cake_2Fill = "cake-2-fill",
  Cake_2Line = "cake-2-line",
  Cake_3Fill = "cake-3-fill",
  Cake_3Line = "cake-3-line",
  CakeFill = "cake-fill",
  CakeLine = "cake-line",
  CandleFill = "candle-fill",
  CandleLine = "candle-line",
  CharacterRecognitionFill = "character-recognition-fill",
  CharacterRecognitionLine = "character-recognition-line",
  CrossFill = "cross-fill",
  CrossLine = "cross-line",
  DoorClosedFill = "door-closed-fill",
  DoorClosedLine = "door-closed-line",
  DoorFill = "door-fill",
  DoorLine = "door-line",
  DoorLockBoxFill = "door-lock-box-fill",
  DoorLockBoxLine = "door-lock-box-line",
  DoorLockFill = "door-lock-fill",
  DoorLockLine = "door-lock-line",
  DoorOpenFill = "door-open-fill",
  DoorOpenLine = "door-open-line",
  FootballFill = "football-fill",
  FootballLine = "football-line",
  FridgeFill = "fridge-fill",
  FridgeLine = "fridge-line",
  GameFill = "game-fill",
  GameLine = "game-line",
  GraduationCapFill = "graduation-cap-fill",
  GraduationCapLine = "graduation-cap-line",
  HandbagFill = "handbag-fill",
  HandbagLine = "handbag-line",
  InfinityFill = "infinity-fill",
  InfinityLine = "infinity-line",
  Key_2Fill = "key-2-fill",
  Key_2Line = "key-2-line",
  KeyFill = "key-fill",
  KeyLine = "key-line",
  KnifeBloodFill = "knife-blood-fill",
  KnifeBloodLine = "knife-blood-line",
  KnifeFill = "knife-fill",
  KnifeLine = "knife-line",
  LeafFill = "leaf-fill",
  LeafLine = "leaf-line",
  LightbulbFill = "lightbulb-fill",
  LightbulbFlashFill = "lightbulb-flash-fill",
  LightbulbFlashLine = "lightbulb-flash-line",
  LightbulbLine = "lightbulb-line",
  Outlet_2Fill = "outlet-2-fill",
  Outlet_2Line = "outlet-2-line",
  OutletFill = "outlet-fill",
  OutletLine = "outlet-line",
  PingPongFill = "ping-pong-fill",
  PingPongLine = "ping-pong-line",
  PlantFill = "plant-fill",
  PlantLine = "plant-line",
  Plug_2Fill = "plug-2-fill",
  Plug_2Line = "plug-2-line",
  PlugFill = "plug-fill",
  PlugLine = "plug-line",
  RecycleFill = "recycle-fill",
  RecycleLine = "recycle-line",
  ReservedFill = "reserved-fill",
  ReservedLine = "reserved-line",
  Scales_2Fill = "scales-2-fill",
  Scales_2Line = "scales-2-line",
  Scales_3Fill = "scales-3-fill",
  Scales_3Line = "scales-3-line",
  ScalesFill = "scales-fill",
  ScalesLine = "scales-line",
  SeedlingFill = "seedling-fill",
  SeedlingLine = "seedling-line",
  ShirtFill = "shirt-fill",
  ShirtLine = "shirt-line",
  SwordFill = "sword-fill",
  SwordLine = "sword-line",
  TShirt_2Fill = "t-shirt-2-fill",
  TShirt_2Line = "t-shirt-2-line",
  TShirtAirFill = "t-shirt-air-fill",
  TShirtAirLine = "t-shirt-air-line",
  TShirtFill = "t-shirt-fill",
  TShirtLine = "t-shirt-line",
  UmbrellaFill = "umbrella-fill",
  UmbrellaLine = "umbrella-line",
  VoiceRecognitionFill = "voice-recognition-fill",
  VoiceRecognitionLine = "voice-recognition-line",
  WheelchairFill = "wheelchair-fill",
  WheelchairLine = "wheelchair-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.BasketballFill]: "59280",
  [Index.BasketballLine]: "59281",
  [Index.BellFill]: "59282",
  [Index.BellLine]: "59283",
  [Index.BilliardsFill]: "59284",
  [Index.BilliardsLine]: "59285",
  [Index.Box_1Fill]: "59286",
  [Index.Box_1Line]: "59287",
  [Index.Box_2Fill]: "59288",
  [Index.Box_2Line]: "59289",
  [Index.Box_3Fill]: "59290",
  [Index.Box_3Line]: "59291",
  [Index.BoxingFill]: "59292",
  [Index.BoxingLine]: "59293",
  [Index.CactusFill]: "59294",
  [Index.CactusLine]: "59295",
  [Index.Cake_2Fill]: "59296",
  [Index.Cake_2Line]: "59297",
  [Index.Cake_3Fill]: "59298",
  [Index.Cake_3Line]: "59299",
  [Index.CakeFill]: "59300",
  [Index.CakeLine]: "59301",
  [Index.CandleFill]: "59302",
  [Index.CandleLine]: "59303",
  [Index.CharacterRecognitionFill]: "59304",
  [Index.CharacterRecognitionLine]: "59305",
  [Index.CrossFill]: "59306",
  [Index.CrossLine]: "59307",
  [Index.DoorClosedFill]: "59308",
  [Index.DoorClosedLine]: "59309",
  [Index.DoorFill]: "59310",
  [Index.DoorLine]: "59311",
  [Index.DoorLockBoxFill]: "59312",
  [Index.DoorLockBoxLine]: "59313",
  [Index.DoorLockFill]: "59314",
  [Index.DoorLockLine]: "59315",
  [Index.DoorOpenFill]: "59316",
  [Index.DoorOpenLine]: "59317",
  [Index.FootballFill]: "59318",
  [Index.FootballLine]: "59319",
  [Index.FridgeFill]: "59320",
  [Index.FridgeLine]: "59321",
  [Index.GameFill]: "59322",
  [Index.GameLine]: "59323",
  [Index.GraduationCapFill]: "59324",
  [Index.GraduationCapLine]: "59325",
  [Index.HandbagFill]: "59326",
  [Index.HandbagLine]: "59327",
  [Index.InfinityFill]: "59328",
  [Index.InfinityLine]: "59329",
  [Index.Key_2Fill]: "59330",
  [Index.Key_2Line]: "59331",
  [Index.KeyFill]: "59332",
  [Index.KeyLine]: "59333",
  [Index.KnifeBloodFill]: "59334",
  [Index.KnifeBloodLine]: "59335",
  [Index.KnifeFill]: "59336",
  [Index.KnifeLine]: "59337",
  [Index.LeafFill]: "59338",
  [Index.LeafLine]: "59339",
  [Index.LightbulbFill]: "59340",
  [Index.LightbulbFlashFill]: "59341",
  [Index.LightbulbFlashLine]: "59342",
  [Index.LightbulbLine]: "59343",
  [Index.Outlet_2Fill]: "59344",
  [Index.Outlet_2Line]: "59345",
  [Index.OutletFill]: "59346",
  [Index.OutletLine]: "59347",
  [Index.PingPongFill]: "59348",
  [Index.PingPongLine]: "59349",
  [Index.PlantFill]: "59350",
  [Index.PlantLine]: "59351",
  [Index.Plug_2Fill]: "59352",
  [Index.Plug_2Line]: "59353",
  [Index.PlugFill]: "59354",
  [Index.PlugLine]: "59355",
  [Index.RecycleFill]: "59356",
  [Index.RecycleLine]: "59357",
  [Index.ReservedFill]: "59358",
  [Index.ReservedLine]: "59359",
  [Index.Scales_2Fill]: "59360",
  [Index.Scales_2Line]: "59361",
  [Index.Scales_3Fill]: "59362",
  [Index.Scales_3Line]: "59363",
  [Index.ScalesFill]: "59364",
  [Index.ScalesLine]: "59365",
  [Index.SeedlingFill]: "59366",
  [Index.SeedlingLine]: "59367",
  [Index.ShirtFill]: "59368",
  [Index.ShirtLine]: "59369",
  [Index.SwordFill]: "59370",
  [Index.SwordLine]: "59371",
  [Index.TShirt_2Fill]: "59372",
  [Index.TShirt_2Line]: "59373",
  [Index.TShirtAirFill]: "59374",
  [Index.TShirtAirLine]: "59375",
  [Index.TShirtFill]: "59376",
  [Index.TShirtLine]: "59377",
  [Index.UmbrellaFill]: "59378",
  [Index.UmbrellaLine]: "59379",
  [Index.VoiceRecognitionFill]: "59380",
  [Index.VoiceRecognitionLine]: "59381",
  [Index.WheelchairFill]: "59382",
  [Index.WheelchairLine]: "59383",
};
