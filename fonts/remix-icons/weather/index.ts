export type IndexId =
  | "blaze-fill"
  | "blaze-line"
  | "celsius-fill"
  | "celsius-line"
  | "cloud-windy-fill"
  | "cloud-windy-line"
  | "cloudy-2-fill"
  | "cloudy-2-line"
  | "cloudy-fill"
  | "cloudy-line"
  | "drizzle-fill"
  | "drizzle-line"
  | "earthquake-fill"
  | "earthquake-line"
  | "fahrenheit-fill"
  | "fahrenheit-line"
  | "fire-fill"
  | "fire-line"
  | "flashlight-fill"
  | "flashlight-line"
  | "flood-fill"
  | "flood-line"
  | "foggy-fill"
  | "foggy-line"
  | "hail-fill"
  | "hail-line"
  | "haze-2-fill"
  | "haze-2-line"
  | "haze-fill"
  | "haze-line"
  | "heavy-showers-fill"
  | "heavy-showers-line"
  | "meteor-fill"
  | "meteor-line"
  | "mist-fill"
  | "mist-line"
  | "moon-clear-fill"
  | "moon-clear-line"
  | "moon-cloudy-fill"
  | "moon-cloudy-line"
  | "moon-fill"
  | "moon-foggy-fill"
  | "moon-foggy-line"
  | "moon-line"
  | "rainbow-fill"
  | "rainbow-line"
  | "rainy-fill"
  | "rainy-line"
  | "shining-2-fill"
  | "shining-2-line"
  | "shining-fill"
  | "shining-line"
  | "showers-fill"
  | "showers-line"
  | "snowy-fill"
  | "snowy-line"
  | "sparkling-2-fill"
  | "sparkling-2-line"
  | "sparkling-fill"
  | "sparkling-line"
  | "sun-cloudy-fill"
  | "sun-cloudy-line"
  | "sun-fill"
  | "sun-foggy-fill"
  | "sun-foggy-line"
  | "sun-line"
  | "temp-cold-fill"
  | "temp-cold-line"
  | "temp-hot-fill"
  | "temp-hot-line"
  | "thunderstorms-fill"
  | "thunderstorms-line"
  | "tornado-fill"
  | "tornado-line"
  | "typhoon-fill"
  | "typhoon-line"
  | "water-percent-fill"
  | "water-percent-line"
  | "windy-fill"
  | "windy-line";

export type IndexKey =
  | "BlazeFill"
  | "BlazeLine"
  | "CelsiusFill"
  | "CelsiusLine"
  | "CloudWindyFill"
  | "CloudWindyLine"
  | "Cloudy_2Fill"
  | "Cloudy_2Line"
  | "CloudyFill"
  | "CloudyLine"
  | "DrizzleFill"
  | "DrizzleLine"
  | "EarthquakeFill"
  | "EarthquakeLine"
  | "FahrenheitFill"
  | "FahrenheitLine"
  | "FireFill"
  | "FireLine"
  | "FlashlightFill"
  | "FlashlightLine"
  | "FloodFill"
  | "FloodLine"
  | "FoggyFill"
  | "FoggyLine"
  | "HailFill"
  | "HailLine"
  | "Haze_2Fill"
  | "Haze_2Line"
  | "HazeFill"
  | "HazeLine"
  | "HeavyShowersFill"
  | "HeavyShowersLine"
  | "MeteorFill"
  | "MeteorLine"
  | "MistFill"
  | "MistLine"
  | "MoonClearFill"
  | "MoonClearLine"
  | "MoonCloudyFill"
  | "MoonCloudyLine"
  | "MoonFill"
  | "MoonFoggyFill"
  | "MoonFoggyLine"
  | "MoonLine"
  | "RainbowFill"
  | "RainbowLine"
  | "RainyFill"
  | "RainyLine"
  | "Shining_2Fill"
  | "Shining_2Line"
  | "ShiningFill"
  | "ShiningLine"
  | "ShowersFill"
  | "ShowersLine"
  | "SnowyFill"
  | "SnowyLine"
  | "Sparkling_2Fill"
  | "Sparkling_2Line"
  | "SparklingFill"
  | "SparklingLine"
  | "SunCloudyFill"
  | "SunCloudyLine"
  | "SunFill"
  | "SunFoggyFill"
  | "SunFoggyLine"
  | "SunLine"
  | "TempColdFill"
  | "TempColdLine"
  | "TempHotFill"
  | "TempHotLine"
  | "ThunderstormsFill"
  | "ThunderstormsLine"
  | "TornadoFill"
  | "TornadoLine"
  | "TyphoonFill"
  | "TyphoonLine"
  | "WaterPercentFill"
  | "WaterPercentLine"
  | "WindyFill"
  | "WindyLine";

export enum Index {
  BlazeFill = "blaze-fill",
  BlazeLine = "blaze-line",
  CelsiusFill = "celsius-fill",
  CelsiusLine = "celsius-line",
  CloudWindyFill = "cloud-windy-fill",
  CloudWindyLine = "cloud-windy-line",
  Cloudy_2Fill = "cloudy-2-fill",
  Cloudy_2Line = "cloudy-2-line",
  CloudyFill = "cloudy-fill",
  CloudyLine = "cloudy-line",
  DrizzleFill = "drizzle-fill",
  DrizzleLine = "drizzle-line",
  EarthquakeFill = "earthquake-fill",
  EarthquakeLine = "earthquake-line",
  FahrenheitFill = "fahrenheit-fill",
  FahrenheitLine = "fahrenheit-line",
  FireFill = "fire-fill",
  FireLine = "fire-line",
  FlashlightFill = "flashlight-fill",
  FlashlightLine = "flashlight-line",
  FloodFill = "flood-fill",
  FloodLine = "flood-line",
  FoggyFill = "foggy-fill",
  FoggyLine = "foggy-line",
  HailFill = "hail-fill",
  HailLine = "hail-line",
  Haze_2Fill = "haze-2-fill",
  Haze_2Line = "haze-2-line",
  HazeFill = "haze-fill",
  HazeLine = "haze-line",
  HeavyShowersFill = "heavy-showers-fill",
  HeavyShowersLine = "heavy-showers-line",
  MeteorFill = "meteor-fill",
  MeteorLine = "meteor-line",
  MistFill = "mist-fill",
  MistLine = "mist-line",
  MoonClearFill = "moon-clear-fill",
  MoonClearLine = "moon-clear-line",
  MoonCloudyFill = "moon-cloudy-fill",
  MoonCloudyLine = "moon-cloudy-line",
  MoonFill = "moon-fill",
  MoonFoggyFill = "moon-foggy-fill",
  MoonFoggyLine = "moon-foggy-line",
  MoonLine = "moon-line",
  RainbowFill = "rainbow-fill",
  RainbowLine = "rainbow-line",
  RainyFill = "rainy-fill",
  RainyLine = "rainy-line",
  Shining_2Fill = "shining-2-fill",
  Shining_2Line = "shining-2-line",
  ShiningFill = "shining-fill",
  ShiningLine = "shining-line",
  ShowersFill = "showers-fill",
  ShowersLine = "showers-line",
  SnowyFill = "snowy-fill",
  SnowyLine = "snowy-line",
  Sparkling_2Fill = "sparkling-2-fill",
  Sparkling_2Line = "sparkling-2-line",
  SparklingFill = "sparkling-fill",
  SparklingLine = "sparkling-line",
  SunCloudyFill = "sun-cloudy-fill",
  SunCloudyLine = "sun-cloudy-line",
  SunFill = "sun-fill",
  SunFoggyFill = "sun-foggy-fill",
  SunFoggyLine = "sun-foggy-line",
  SunLine = "sun-line",
  TempColdFill = "temp-cold-fill",
  TempColdLine = "temp-cold-line",
  TempHotFill = "temp-hot-fill",
  TempHotLine = "temp-hot-line",
  ThunderstormsFill = "thunderstorms-fill",
  ThunderstormsLine = "thunderstorms-line",
  TornadoFill = "tornado-fill",
  TornadoLine = "tornado-line",
  TyphoonFill = "typhoon-fill",
  TyphoonLine = "typhoon-line",
  WaterPercentFill = "water-percent-fill",
  WaterPercentLine = "water-percent-line",
  WindyFill = "windy-fill",
  WindyLine = "windy-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.BlazeFill]: "59758",
  [Index.BlazeLine]: "59759",
  [Index.CelsiusFill]: "59760",
  [Index.CelsiusLine]: "59761",
  [Index.CloudWindyFill]: "59762",
  [Index.CloudWindyLine]: "59763",
  [Index.Cloudy_2Fill]: "59764",
  [Index.Cloudy_2Line]: "59765",
  [Index.CloudyFill]: "59766",
  [Index.CloudyLine]: "59767",
  [Index.DrizzleFill]: "59768",
  [Index.DrizzleLine]: "59769",
  [Index.EarthquakeFill]: "59770",
  [Index.EarthquakeLine]: "59771",
  [Index.FahrenheitFill]: "59772",
  [Index.FahrenheitLine]: "59773",
  [Index.FireFill]: "59774",
  [Index.FireLine]: "59775",
  [Index.FlashlightFill]: "59776",
  [Index.FlashlightLine]: "59777",
  [Index.FloodFill]: "59778",
  [Index.FloodLine]: "59779",
  [Index.FoggyFill]: "59780",
  [Index.FoggyLine]: "59781",
  [Index.HailFill]: "59782",
  [Index.HailLine]: "59783",
  [Index.Haze_2Fill]: "59784",
  [Index.Haze_2Line]: "59785",
  [Index.HazeFill]: "59786",
  [Index.HazeLine]: "59787",
  [Index.HeavyShowersFill]: "59788",
  [Index.HeavyShowersLine]: "59789",
  [Index.MeteorFill]: "59790",
  [Index.MeteorLine]: "59791",
  [Index.MistFill]: "59792",
  [Index.MistLine]: "59793",
  [Index.MoonClearFill]: "59794",
  [Index.MoonClearLine]: "59795",
  [Index.MoonCloudyFill]: "59796",
  [Index.MoonCloudyLine]: "59797",
  [Index.MoonFill]: "59798",
  [Index.MoonFoggyFill]: "59799",
  [Index.MoonFoggyLine]: "59800",
  [Index.MoonLine]: "59801",
  [Index.RainbowFill]: "59802",
  [Index.RainbowLine]: "59803",
  [Index.RainyFill]: "59804",
  [Index.RainyLine]: "59805",
  [Index.Shining_2Fill]: "59806",
  [Index.Shining_2Line]: "59807",
  [Index.ShiningFill]: "59808",
  [Index.ShiningLine]: "59809",
  [Index.ShowersFill]: "59810",
  [Index.ShowersLine]: "59811",
  [Index.SnowyFill]: "59812",
  [Index.SnowyLine]: "59813",
  [Index.Sparkling_2Fill]: "59814",
  [Index.Sparkling_2Line]: "59815",
  [Index.SparklingFill]: "59816",
  [Index.SparklingLine]: "59817",
  [Index.SunCloudyFill]: "59818",
  [Index.SunCloudyLine]: "59819",
  [Index.SunFill]: "59820",
  [Index.SunFoggyFill]: "59821",
  [Index.SunFoggyLine]: "59822",
  [Index.SunLine]: "59823",
  [Index.TempColdFill]: "59824",
  [Index.TempColdLine]: "59825",
  [Index.TempHotFill]: "59826",
  [Index.TempHotLine]: "59827",
  [Index.ThunderstormsFill]: "59828",
  [Index.ThunderstormsLine]: "59829",
  [Index.TornadoFill]: "59830",
  [Index.TornadoLine]: "59831",
  [Index.TyphoonFill]: "59832",
  [Index.TyphoonLine]: "59833",
  [Index.WaterPercentFill]: "59834",
  [Index.WaterPercentLine]: "59835",
  [Index.WindyFill]: "59836",
  [Index.WindyLine]: "59837",
};
