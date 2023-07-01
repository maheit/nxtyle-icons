export type IndexId =
  | "ancient-gate-fill"
  | "ancient-gate-line"
  | "ancient-pavilion-fill"
  | "ancient-pavilion-line"
  | "bank-fill"
  | "bank-line"
  | "building-2-fill"
  | "building-2-line"
  | "building-3-fill"
  | "building-3-line"
  | "building-4-fill"
  | "building-4-line"
  | "building-fill"
  | "building-line"
  | "community-fill"
  | "community-line"
  | "government-fill"
  | "government-line"
  | "home-2-fill"
  | "home-2-line"
  | "home-3-fill"
  | "home-3-line"
  | "home-4-fill"
  | "home-4-line"
  | "home-5-fill"
  | "home-5-line"
  | "home-6-fill"
  | "home-6-line"
  | "home-7-fill"
  | "home-7-line"
  | "home-8-fill"
  | "home-8-line"
  | "home-fill"
  | "home-gear-fill"
  | "home-gear-line"
  | "home-heart-fill"
  | "home-heart-line"
  | "home-line"
  | "home-office-fill"
  | "home-office-line"
  | "home-smile-2-fill"
  | "home-smile-2-line"
  | "home-smile-fill"
  | "home-smile-line"
  | "home-wifi-fill"
  | "home-wifi-line"
  | "hospital-fill"
  | "hospital-line"
  | "hotel-fill"
  | "hotel-line"
  | "school-fill"
  | "school-line"
  | "store-2-fill"
  | "store-2-line"
  | "store-3-fill"
  | "store-3-line"
  | "store-fill"
  | "store-line";

export type IndexKey =
  | "AncientGateFill"
  | "AncientGateLine"
  | "AncientPavilionFill"
  | "AncientPavilionLine"
  | "BankFill"
  | "BankLine"
  | "Building_2Fill"
  | "Building_2Line"
  | "Building_3Fill"
  | "Building_3Line"
  | "Building_4Fill"
  | "Building_4Line"
  | "BuildingFill"
  | "BuildingLine"
  | "CommunityFill"
  | "CommunityLine"
  | "GovernmentFill"
  | "GovernmentLine"
  | "Home_2Fill"
  | "Home_2Line"
  | "Home_3Fill"
  | "Home_3Line"
  | "Home_4Fill"
  | "Home_4Line"
  | "Home_5Fill"
  | "Home_5Line"
  | "Home_6Fill"
  | "Home_6Line"
  | "Home_7Fill"
  | "Home_7Line"
  | "Home_8Fill"
  | "Home_8Line"
  | "HomeFill"
  | "HomeGearFill"
  | "HomeGearLine"
  | "HomeHeartFill"
  | "HomeHeartLine"
  | "HomeLine"
  | "HomeOfficeFill"
  | "HomeOfficeLine"
  | "HomeSmile_2Fill"
  | "HomeSmile_2Line"
  | "HomeSmileFill"
  | "HomeSmileLine"
  | "HomeWifiFill"
  | "HomeWifiLine"
  | "HospitalFill"
  | "HospitalLine"
  | "HotelFill"
  | "HotelLine"
  | "SchoolFill"
  | "SchoolLine"
  | "Store_2Fill"
  | "Store_2Line"
  | "Store_3Fill"
  | "Store_3Line"
  | "StoreFill"
  | "StoreLine";

export enum Index {
  AncientGateFill = "ancient-gate-fill",
  AncientGateLine = "ancient-gate-line",
  AncientPavilionFill = "ancient-pavilion-fill",
  AncientPavilionLine = "ancient-pavilion-line",
  BankFill = "bank-fill",
  BankLine = "bank-line",
  Building_2Fill = "building-2-fill",
  Building_2Line = "building-2-line",
  Building_3Fill = "building-3-fill",
  Building_3Line = "building-3-line",
  Building_4Fill = "building-4-fill",
  Building_4Line = "building-4-line",
  BuildingFill = "building-fill",
  BuildingLine = "building-line",
  CommunityFill = "community-fill",
  CommunityLine = "community-line",
  GovernmentFill = "government-fill",
  GovernmentLine = "government-line",
  Home_2Fill = "home-2-fill",
  Home_2Line = "home-2-line",
  Home_3Fill = "home-3-fill",
  Home_3Line = "home-3-line",
  Home_4Fill = "home-4-fill",
  Home_4Line = "home-4-line",
  Home_5Fill = "home-5-fill",
  Home_5Line = "home-5-line",
  Home_6Fill = "home-6-fill",
  Home_6Line = "home-6-line",
  Home_7Fill = "home-7-fill",
  Home_7Line = "home-7-line",
  Home_8Fill = "home-8-fill",
  Home_8Line = "home-8-line",
  HomeFill = "home-fill",
  HomeGearFill = "home-gear-fill",
  HomeGearLine = "home-gear-line",
  HomeHeartFill = "home-heart-fill",
  HomeHeartLine = "home-heart-line",
  HomeLine = "home-line",
  HomeOfficeFill = "home-office-fill",
  HomeOfficeLine = "home-office-line",
  HomeSmile_2Fill = "home-smile-2-fill",
  HomeSmile_2Line = "home-smile-2-line",
  HomeSmileFill = "home-smile-fill",
  HomeSmileLine = "home-smile-line",
  HomeWifiFill = "home-wifi-fill",
  HomeWifiLine = "home-wifi-line",
  HospitalFill = "hospital-fill",
  HospitalLine = "hospital-line",
  HotelFill = "hotel-fill",
  HotelLine = "hotel-line",
  SchoolFill = "school-fill",
  SchoolLine = "school-line",
  Store_2Fill = "store-2-fill",
  Store_2Line = "store-2-line",
  Store_3Fill = "store-3-fill",
  Store_3Line = "store-3-line",
  StoreFill = "store-fill",
  StoreLine = "store-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.AncientGateFill]: "57452",
  [Index.AncientGateLine]: "57453",
  [Index.AncientPavilionFill]: "57454",
  [Index.AncientPavilionLine]: "57455",
  [Index.BankFill]: "57456",
  [Index.BankLine]: "57457",
  [Index.Building_2Fill]: "57458",
  [Index.Building_2Line]: "57459",
  [Index.Building_3Fill]: "57460",
  [Index.Building_3Line]: "57461",
  [Index.Building_4Fill]: "57462",
  [Index.Building_4Line]: "57463",
  [Index.BuildingFill]: "57464",
  [Index.BuildingLine]: "57465",
  [Index.CommunityFill]: "57466",
  [Index.CommunityLine]: "57467",
  [Index.GovernmentFill]: "57468",
  [Index.GovernmentLine]: "57469",
  [Index.Home_2Fill]: "57470",
  [Index.Home_2Line]: "57471",
  [Index.Home_3Fill]: "57472",
  [Index.Home_3Line]: "57473",
  [Index.Home_4Fill]: "57474",
  [Index.Home_4Line]: "57475",
  [Index.Home_5Fill]: "57476",
  [Index.Home_5Line]: "57477",
  [Index.Home_6Fill]: "57478",
  [Index.Home_6Line]: "57479",
  [Index.Home_7Fill]: "57480",
  [Index.Home_7Line]: "57481",
  [Index.Home_8Fill]: "57482",
  [Index.Home_8Line]: "57483",
  [Index.HomeFill]: "57484",
  [Index.HomeGearFill]: "57485",
  [Index.HomeGearLine]: "57486",
  [Index.HomeHeartFill]: "57487",
  [Index.HomeHeartLine]: "57488",
  [Index.HomeLine]: "57489",
  [Index.HomeOfficeFill]: "57490",
  [Index.HomeOfficeLine]: "57491",
  [Index.HomeSmile_2Fill]: "57492",
  [Index.HomeSmile_2Line]: "57493",
  [Index.HomeSmileFill]: "57494",
  [Index.HomeSmileLine]: "57495",
  [Index.HomeWifiFill]: "57496",
  [Index.HomeWifiLine]: "57497",
  [Index.HospitalFill]: "57498",
  [Index.HospitalLine]: "57499",
  [Index.HotelFill]: "57500",
  [Index.HotelLine]: "57501",
  [Index.SchoolFill]: "57502",
  [Index.SchoolLine]: "57503",
  [Index.Store_2Fill]: "57504",
  [Index.Store_2Line]: "57505",
  [Index.Store_3Fill]: "57506",
  [Index.Store_3Line]: "57507",
  [Index.StoreFill]: "57508",
  [Index.StoreLine]: "57509",
};
