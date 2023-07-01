export type IndexId =
  | "brain-fill"
  | "brain-line"
  | "capsule-fill"
  | "capsule-line"
  | "dislike-fill"
  | "dislike-line"
  | "dossier-fill"
  | "dossier-line"
  | "empathize-fill"
  | "empathize-line"
  | "first-aid-kit-fill"
  | "first-aid-kit-line"
  | "flask-fill"
  | "flask-line"
  | "hand-sanitizer-fill"
  | "hand-sanitizer-line"
  | "health-book-fill"
  | "health-book-line"
  | "heart-2-fill"
  | "heart-2-line"
  | "heart-3-fill"
  | "heart-3-line"
  | "heart-add-fill"
  | "heart-add-line"
  | "heart-fill"
  | "heart-line"
  | "heart-pulse-fill"
  | "heart-pulse-line"
  | "hearts-fill"
  | "hearts-line"
  | "infrared-thermometer-fill"
  | "infrared-thermometer-line"
  | "lungs-fill"
  | "lungs-line"
  | "medicine-bottle-fill"
  | "medicine-bottle-line"
  | "mental-health-fill"
  | "mental-health-line"
  | "microscope-fill"
  | "microscope-line"
  | "nurse-fill"
  | "nurse-line"
  | "psychotherapy-fill"
  | "psychotherapy-line"
  | "pulse-fill"
  | "pulse-line"
  | "rest-time-fill"
  | "rest-time-line"
  | "stethoscope-fill"
  | "stethoscope-line"
  | "surgical-mask-fill"
  | "surgical-mask-line"
  | "syringe-fill"
  | "syringe-line"
  | "test-tube-fill"
  | "test-tube-line"
  | "thermometer-fill"
  | "thermometer-line"
  | "virus-fill"
  | "virus-line"
  | "zzz-fill"
  | "zzz-line";

export type IndexKey =
  | "BrainFill"
  | "BrainLine"
  | "CapsuleFill"
  | "CapsuleLine"
  | "DislikeFill"
  | "DislikeLine"
  | "DossierFill"
  | "DossierLine"
  | "EmpathizeFill"
  | "EmpathizeLine"
  | "FirstAidKitFill"
  | "FirstAidKitLine"
  | "FlaskFill"
  | "FlaskLine"
  | "HandSanitizerFill"
  | "HandSanitizerLine"
  | "HealthBookFill"
  | "HealthBookLine"
  | "Heart_2Fill"
  | "Heart_2Line"
  | "Heart_3Fill"
  | "Heart_3Line"
  | "HeartAddFill"
  | "HeartAddLine"
  | "HeartFill"
  | "HeartLine"
  | "HeartPulseFill"
  | "HeartPulseLine"
  | "HeartsFill"
  | "HeartsLine"
  | "InfraredThermometerFill"
  | "InfraredThermometerLine"
  | "LungsFill"
  | "LungsLine"
  | "MedicineBottleFill"
  | "MedicineBottleLine"
  | "MentalHealthFill"
  | "MentalHealthLine"
  | "MicroscopeFill"
  | "MicroscopeLine"
  | "NurseFill"
  | "NurseLine"
  | "PsychotherapyFill"
  | "PsychotherapyLine"
  | "PulseFill"
  | "PulseLine"
  | "RestTimeFill"
  | "RestTimeLine"
  | "StethoscopeFill"
  | "StethoscopeLine"
  | "SurgicalMaskFill"
  | "SurgicalMaskLine"
  | "SyringeFill"
  | "SyringeLine"
  | "TestTubeFill"
  | "TestTubeLine"
  | "ThermometerFill"
  | "ThermometerLine"
  | "VirusFill"
  | "VirusLine"
  | "ZzzFill"
  | "ZzzLine";

export enum Index {
  BrainFill = "brain-fill",
  BrainLine = "brain-line",
  CapsuleFill = "capsule-fill",
  CapsuleLine = "capsule-line",
  DislikeFill = "dislike-fill",
  DislikeLine = "dislike-line",
  DossierFill = "dossier-fill",
  DossierLine = "dossier-line",
  EmpathizeFill = "empathize-fill",
  EmpathizeLine = "empathize-line",
  FirstAidKitFill = "first-aid-kit-fill",
  FirstAidKitLine = "first-aid-kit-line",
  FlaskFill = "flask-fill",
  FlaskLine = "flask-line",
  HandSanitizerFill = "hand-sanitizer-fill",
  HandSanitizerLine = "hand-sanitizer-line",
  HealthBookFill = "health-book-fill",
  HealthBookLine = "health-book-line",
  Heart_2Fill = "heart-2-fill",
  Heart_2Line = "heart-2-line",
  Heart_3Fill = "heart-3-fill",
  Heart_3Line = "heart-3-line",
  HeartAddFill = "heart-add-fill",
  HeartAddLine = "heart-add-line",
  HeartFill = "heart-fill",
  HeartLine = "heart-line",
  HeartPulseFill = "heart-pulse-fill",
  HeartPulseLine = "heart-pulse-line",
  HeartsFill = "hearts-fill",
  HeartsLine = "hearts-line",
  InfraredThermometerFill = "infrared-thermometer-fill",
  InfraredThermometerLine = "infrared-thermometer-line",
  LungsFill = "lungs-fill",
  LungsLine = "lungs-line",
  MedicineBottleFill = "medicine-bottle-fill",
  MedicineBottleLine = "medicine-bottle-line",
  MentalHealthFill = "mental-health-fill",
  MentalHealthLine = "mental-health-line",
  MicroscopeFill = "microscope-fill",
  MicroscopeLine = "microscope-line",
  NurseFill = "nurse-fill",
  NurseLine = "nurse-line",
  PsychotherapyFill = "psychotherapy-fill",
  PsychotherapyLine = "psychotherapy-line",
  PulseFill = "pulse-fill",
  PulseLine = "pulse-line",
  RestTimeFill = "rest-time-fill",
  RestTimeLine = "rest-time-line",
  StethoscopeFill = "stethoscope-fill",
  StethoscopeLine = "stethoscope-line",
  SurgicalMaskFill = "surgical-mask-fill",
  SurgicalMaskLine = "surgical-mask-line",
  SyringeFill = "syringe-fill",
  SyringeLine = "syringe-line",
  TestTubeFill = "test-tube-fill",
  TestTubeLine = "test-tube-line",
  ThermometerFill = "thermometer-fill",
  ThermometerLine = "thermometer-line",
  VirusFill = "virus-fill",
  VirusLine = "virus-line",
  ZzzFill = "zzz-fill",
  ZzzLine = "zzz-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.BrainFill]: "58602",
  [Index.BrainLine]: "58603",
  [Index.CapsuleFill]: "58604",
  [Index.CapsuleLine]: "58605",
  [Index.DislikeFill]: "58606",
  [Index.DislikeLine]: "58607",
  [Index.DossierFill]: "58608",
  [Index.DossierLine]: "58609",
  [Index.EmpathizeFill]: "58610",
  [Index.EmpathizeLine]: "58611",
  [Index.FirstAidKitFill]: "58612",
  [Index.FirstAidKitLine]: "58613",
  [Index.FlaskFill]: "58614",
  [Index.FlaskLine]: "58615",
  [Index.HandSanitizerFill]: "58616",
  [Index.HandSanitizerLine]: "58617",
  [Index.HealthBookFill]: "58618",
  [Index.HealthBookLine]: "58619",
  [Index.Heart_2Fill]: "58620",
  [Index.Heart_2Line]: "58621",
  [Index.Heart_3Fill]: "58622",
  [Index.Heart_3Line]: "58623",
  [Index.HeartAddFill]: "58624",
  [Index.HeartAddLine]: "58625",
  [Index.HeartFill]: "58626",
  [Index.HeartLine]: "58627",
  [Index.HeartPulseFill]: "58628",
  [Index.HeartPulseLine]: "58629",
  [Index.HeartsFill]: "58630",
  [Index.HeartsLine]: "58631",
  [Index.InfraredThermometerFill]: "58632",
  [Index.InfraredThermometerLine]: "58633",
  [Index.LungsFill]: "58634",
  [Index.LungsLine]: "58635",
  [Index.MedicineBottleFill]: "58636",
  [Index.MedicineBottleLine]: "58637",
  [Index.MentalHealthFill]: "58638",
  [Index.MentalHealthLine]: "58639",
  [Index.MicroscopeFill]: "58640",
  [Index.MicroscopeLine]: "58641",
  [Index.NurseFill]: "58642",
  [Index.NurseLine]: "58643",
  [Index.PsychotherapyFill]: "58644",
  [Index.PsychotherapyLine]: "58645",
  [Index.PulseFill]: "58646",
  [Index.PulseLine]: "58647",
  [Index.RestTimeFill]: "58648",
  [Index.RestTimeLine]: "58649",
  [Index.StethoscopeFill]: "58650",
  [Index.StethoscopeLine]: "58651",
  [Index.SurgicalMaskFill]: "58652",
  [Index.SurgicalMaskLine]: "58653",
  [Index.SyringeFill]: "58654",
  [Index.SyringeLine]: "58655",
  [Index.TestTubeFill]: "58656",
  [Index.TestTubeLine]: "58657",
  [Index.ThermometerFill]: "58658",
  [Index.ThermometerLine]: "58659",
  [Index.VirusFill]: "58660",
  [Index.VirusLine]: "58661",
  [Index.ZzzFill]: "58662",
  [Index.ZzzLine]: "58663",
};
