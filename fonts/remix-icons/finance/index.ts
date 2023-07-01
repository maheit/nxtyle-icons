export type IndexId =
  | "24-hours-fill"
  | "24-hours-line"
  | "auction-fill"
  | "auction-line"
  | "bank-card-2-fill"
  | "bank-card-2-line"
  | "bank-card-fill"
  | "bank-card-line"
  | "bit-coin-fill"
  | "bit-coin-line"
  | "cash-fill"
  | "cash-line"
  | "coin-fill"
  | "coin-line"
  | "coins-fill"
  | "coins-line"
  | "copper-coin-fill"
  | "copper-coin-line"
  | "copper-diamond-fill"
  | "copper-diamond-line"
  | "coupon-2-fill"
  | "coupon-2-line"
  | "coupon-3-fill"
  | "coupon-3-line"
  | "coupon-4-fill"
  | "coupon-4-line"
  | "coupon-5-fill"
  | "coupon-5-line"
  | "coupon-fill"
  | "coupon-line"
  | "currency-fill"
  | "currency-line"
  | "exchange-box-fill"
  | "exchange-box-line"
  | "exchange-cny-fill"
  | "exchange-cny-line"
  | "exchange-dollar-fill"
  | "exchange-dollar-line"
  | "exchange-fill"
  | "exchange-funds-fill"
  | "exchange-funds-line"
  | "exchange-line"
  | "funds-box-fill"
  | "funds-box-line"
  | "funds-fill"
  | "funds-line"
  | "gift-2-fill"
  | "gift-2-line"
  | "gift-fill"
  | "gift-line"
  | "hand-coin-fill"
  | "hand-coin-line"
  | "hand-heart-fill"
  | "hand-heart-line"
  | "increase-decrease-fill"
  | "increase-decrease-line"
  | "money-cny-box-fill"
  | "money-cny-box-line"
  | "money-cny-circle-fill"
  | "money-cny-circle-line"
  | "money-dollar-box-fill"
  | "money-dollar-box-line"
  | "money-dollar-circle-fill"
  | "money-dollar-circle-line"
  | "money-euro-box-fill"
  | "money-euro-box-line"
  | "money-euro-circle-fill"
  | "money-euro-circle-line"
  | "money-pound-box-fill"
  | "money-pound-box-line"
  | "money-pound-circle-fill"
  | "money-pound-circle-line"
  | "nft-fill"
  | "nft-line"
  | "p2p-fill"
  | "p2p-line"
  | "percent-fill"
  | "percent-line"
  | "price-tag-2-fill"
  | "price-tag-2-line"
  | "price-tag-3-fill"
  | "price-tag-3-line"
  | "price-tag-fill"
  | "price-tag-line"
  | "red-packet-fill"
  | "red-packet-line"
  | "refund-2-fill"
  | "refund-2-line"
  | "refund-fill"
  | "refund-line"
  | "safe-2-fill"
  | "safe-2-line"
  | "safe-fill"
  | "safe-line"
  | "secure-payment-fill"
  | "secure-payment-line"
  | "shopping-bag-2-fill"
  | "shopping-bag-2-line"
  | "shopping-bag-3-fill"
  | "shopping-bag-3-line"
  | "shopping-bag-fill"
  | "shopping-bag-line"
  | "shopping-basket-2-fill"
  | "shopping-basket-2-line"
  | "shopping-basket-fill"
  | "shopping-basket-line"
  | "shopping-cart-2-fill"
  | "shopping-cart-2-line"
  | "shopping-cart-fill"
  | "shopping-cart-line"
  | "stock-fill"
  | "stock-line"
  | "swap-box-fill"
  | "swap-box-line"
  | "swap-fill"
  | "swap-line"
  | "ticket-2-fill"
  | "ticket-2-line"
  | "ticket-fill"
  | "ticket-line"
  | "token-swap-fill"
  | "token-swap-line"
  | "trophy-fill"
  | "trophy-line"
  | "vip-crown-2-fill"
  | "vip-crown-2-line"
  | "vip-crown-fill"
  | "vip-crown-line"
  | "vip-diamond-fill"
  | "vip-diamond-line"
  | "vip-fill"
  | "vip-line"
  | "wallet-2-fill"
  | "wallet-2-line"
  | "wallet-3-fill"
  | "wallet-3-line"
  | "wallet-fill"
  | "wallet-line"
  | "water-flash-fill"
  | "water-flash-line";

export type IndexKey =
  | "i24HoursFill"
  | "i24HoursLine"
  | "AuctionFill"
  | "AuctionLine"
  | "BankCard_2Fill"
  | "BankCard_2Line"
  | "BankCardFill"
  | "BankCardLine"
  | "BitCoinFill"
  | "BitCoinLine"
  | "CashFill"
  | "CashLine"
  | "CoinFill"
  | "CoinLine"
  | "CoinsFill"
  | "CoinsLine"
  | "CopperCoinFill"
  | "CopperCoinLine"
  | "CopperDiamondFill"
  | "CopperDiamondLine"
  | "Coupon_2Fill"
  | "Coupon_2Line"
  | "Coupon_3Fill"
  | "Coupon_3Line"
  | "Coupon_4Fill"
  | "Coupon_4Line"
  | "Coupon_5Fill"
  | "Coupon_5Line"
  | "CouponFill"
  | "CouponLine"
  | "CurrencyFill"
  | "CurrencyLine"
  | "ExchangeBoxFill"
  | "ExchangeBoxLine"
  | "ExchangeCnyFill"
  | "ExchangeCnyLine"
  | "ExchangeDollarFill"
  | "ExchangeDollarLine"
  | "ExchangeFill"
  | "ExchangeFundsFill"
  | "ExchangeFundsLine"
  | "ExchangeLine"
  | "FundsBoxFill"
  | "FundsBoxLine"
  | "FundsFill"
  | "FundsLine"
  | "Gift_2Fill"
  | "Gift_2Line"
  | "GiftFill"
  | "GiftLine"
  | "HandCoinFill"
  | "HandCoinLine"
  | "HandHeartFill"
  | "HandHeartLine"
  | "IncreaseDecreaseFill"
  | "IncreaseDecreaseLine"
  | "MoneyCnyBoxFill"
  | "MoneyCnyBoxLine"
  | "MoneyCnyCircleFill"
  | "MoneyCnyCircleLine"
  | "MoneyDollarBoxFill"
  | "MoneyDollarBoxLine"
  | "MoneyDollarCircleFill"
  | "MoneyDollarCircleLine"
  | "MoneyEuroBoxFill"
  | "MoneyEuroBoxLine"
  | "MoneyEuroCircleFill"
  | "MoneyEuroCircleLine"
  | "MoneyPoundBoxFill"
  | "MoneyPoundBoxLine"
  | "MoneyPoundCircleFill"
  | "MoneyPoundCircleLine"
  | "NftFill"
  | "NftLine"
  | "P2pFill"
  | "P2pLine"
  | "PercentFill"
  | "PercentLine"
  | "PriceTag_2Fill"
  | "PriceTag_2Line"
  | "PriceTag_3Fill"
  | "PriceTag_3Line"
  | "PriceTagFill"
  | "PriceTagLine"
  | "RedPacketFill"
  | "RedPacketLine"
  | "Refund_2Fill"
  | "Refund_2Line"
  | "RefundFill"
  | "RefundLine"
  | "Safe_2Fill"
  | "Safe_2Line"
  | "SafeFill"
  | "SafeLine"
  | "SecurePaymentFill"
  | "SecurePaymentLine"
  | "ShoppingBag_2Fill"
  | "ShoppingBag_2Line"
  | "ShoppingBag_3Fill"
  | "ShoppingBag_3Line"
  | "ShoppingBagFill"
  | "ShoppingBagLine"
  | "ShoppingBasket_2Fill"
  | "ShoppingBasket_2Line"
  | "ShoppingBasketFill"
  | "ShoppingBasketLine"
  | "ShoppingCart_2Fill"
  | "ShoppingCart_2Line"
  | "ShoppingCartFill"
  | "ShoppingCartLine"
  | "StockFill"
  | "StockLine"
  | "SwapBoxFill"
  | "SwapBoxLine"
  | "SwapFill"
  | "SwapLine"
  | "Ticket_2Fill"
  | "Ticket_2Line"
  | "TicketFill"
  | "TicketLine"
  | "TokenSwapFill"
  | "TokenSwapLine"
  | "TrophyFill"
  | "TrophyLine"
  | "VipCrown_2Fill"
  | "VipCrown_2Line"
  | "VipCrownFill"
  | "VipCrownLine"
  | "VipDiamondFill"
  | "VipDiamondLine"
  | "VipFill"
  | "VipLine"
  | "Wallet_2Fill"
  | "Wallet_2Line"
  | "Wallet_3Fill"
  | "Wallet_3Line"
  | "WalletFill"
  | "WalletLine"
  | "WaterFlashFill"
  | "WaterFlashLine";

export enum Index {
  i24HoursFill = "24-hours-fill",
  i24HoursLine = "24-hours-line",
  AuctionFill = "auction-fill",
  AuctionLine = "auction-line",
  BankCard_2Fill = "bank-card-2-fill",
  BankCard_2Line = "bank-card-2-line",
  BankCardFill = "bank-card-fill",
  BankCardLine = "bank-card-line",
  BitCoinFill = "bit-coin-fill",
  BitCoinLine = "bit-coin-line",
  CashFill = "cash-fill",
  CashLine = "cash-line",
  CoinFill = "coin-fill",
  CoinLine = "coin-line",
  CoinsFill = "coins-fill",
  CoinsLine = "coins-line",
  CopperCoinFill = "copper-coin-fill",
  CopperCoinLine = "copper-coin-line",
  CopperDiamondFill = "copper-diamond-fill",
  CopperDiamondLine = "copper-diamond-line",
  Coupon_2Fill = "coupon-2-fill",
  Coupon_2Line = "coupon-2-line",
  Coupon_3Fill = "coupon-3-fill",
  Coupon_3Line = "coupon-3-line",
  Coupon_4Fill = "coupon-4-fill",
  Coupon_4Line = "coupon-4-line",
  Coupon_5Fill = "coupon-5-fill",
  Coupon_5Line = "coupon-5-line",
  CouponFill = "coupon-fill",
  CouponLine = "coupon-line",
  CurrencyFill = "currency-fill",
  CurrencyLine = "currency-line",
  ExchangeBoxFill = "exchange-box-fill",
  ExchangeBoxLine = "exchange-box-line",
  ExchangeCnyFill = "exchange-cny-fill",
  ExchangeCnyLine = "exchange-cny-line",
  ExchangeDollarFill = "exchange-dollar-fill",
  ExchangeDollarLine = "exchange-dollar-line",
  ExchangeFill = "exchange-fill",
  ExchangeFundsFill = "exchange-funds-fill",
  ExchangeFundsLine = "exchange-funds-line",
  ExchangeLine = "exchange-line",
  FundsBoxFill = "funds-box-fill",
  FundsBoxLine = "funds-box-line",
  FundsFill = "funds-fill",
  FundsLine = "funds-line",
  Gift_2Fill = "gift-2-fill",
  Gift_2Line = "gift-2-line",
  GiftFill = "gift-fill",
  GiftLine = "gift-line",
  HandCoinFill = "hand-coin-fill",
  HandCoinLine = "hand-coin-line",
  HandHeartFill = "hand-heart-fill",
  HandHeartLine = "hand-heart-line",
  IncreaseDecreaseFill = "increase-decrease-fill",
  IncreaseDecreaseLine = "increase-decrease-line",
  MoneyCnyBoxFill = "money-cny-box-fill",
  MoneyCnyBoxLine = "money-cny-box-line",
  MoneyCnyCircleFill = "money-cny-circle-fill",
  MoneyCnyCircleLine = "money-cny-circle-line",
  MoneyDollarBoxFill = "money-dollar-box-fill",
  MoneyDollarBoxLine = "money-dollar-box-line",
  MoneyDollarCircleFill = "money-dollar-circle-fill",
  MoneyDollarCircleLine = "money-dollar-circle-line",
  MoneyEuroBoxFill = "money-euro-box-fill",
  MoneyEuroBoxLine = "money-euro-box-line",
  MoneyEuroCircleFill = "money-euro-circle-fill",
  MoneyEuroCircleLine = "money-euro-circle-line",
  MoneyPoundBoxFill = "money-pound-box-fill",
  MoneyPoundBoxLine = "money-pound-box-line",
  MoneyPoundCircleFill = "money-pound-circle-fill",
  MoneyPoundCircleLine = "money-pound-circle-line",
  NftFill = "nft-fill",
  NftLine = "nft-line",
  P2pFill = "p2p-fill",
  P2pLine = "p2p-line",
  PercentFill = "percent-fill",
  PercentLine = "percent-line",
  PriceTag_2Fill = "price-tag-2-fill",
  PriceTag_2Line = "price-tag-2-line",
  PriceTag_3Fill = "price-tag-3-fill",
  PriceTag_3Line = "price-tag-3-line",
  PriceTagFill = "price-tag-fill",
  PriceTagLine = "price-tag-line",
  RedPacketFill = "red-packet-fill",
  RedPacketLine = "red-packet-line",
  Refund_2Fill = "refund-2-fill",
  Refund_2Line = "refund-2-line",
  RefundFill = "refund-fill",
  RefundLine = "refund-line",
  Safe_2Fill = "safe-2-fill",
  Safe_2Line = "safe-2-line",
  SafeFill = "safe-fill",
  SafeLine = "safe-line",
  SecurePaymentFill = "secure-payment-fill",
  SecurePaymentLine = "secure-payment-line",
  ShoppingBag_2Fill = "shopping-bag-2-fill",
  ShoppingBag_2Line = "shopping-bag-2-line",
  ShoppingBag_3Fill = "shopping-bag-3-fill",
  ShoppingBag_3Line = "shopping-bag-3-line",
  ShoppingBagFill = "shopping-bag-fill",
  ShoppingBagLine = "shopping-bag-line",
  ShoppingBasket_2Fill = "shopping-basket-2-fill",
  ShoppingBasket_2Line = "shopping-basket-2-line",
  ShoppingBasketFill = "shopping-basket-fill",
  ShoppingBasketLine = "shopping-basket-line",
  ShoppingCart_2Fill = "shopping-cart-2-fill",
  ShoppingCart_2Line = "shopping-cart-2-line",
  ShoppingCartFill = "shopping-cart-fill",
  ShoppingCartLine = "shopping-cart-line",
  StockFill = "stock-fill",
  StockLine = "stock-line",
  SwapBoxFill = "swap-box-fill",
  SwapBoxLine = "swap-box-line",
  SwapFill = "swap-fill",
  SwapLine = "swap-line",
  Ticket_2Fill = "ticket-2-fill",
  Ticket_2Line = "ticket-2-line",
  TicketFill = "ticket-fill",
  TicketLine = "ticket-line",
  TokenSwapFill = "token-swap-fill",
  TokenSwapLine = "token-swap-line",
  TrophyFill = "trophy-fill",
  TrophyLine = "trophy-line",
  VipCrown_2Fill = "vip-crown-2-fill",
  VipCrown_2Line = "vip-crown-2-line",
  VipCrownFill = "vip-crown-fill",
  VipCrownLine = "vip-crown-line",
  VipDiamondFill = "vip-diamond-fill",
  VipDiamondLine = "vip-diamond-line",
  VipFill = "vip-fill",
  VipLine = "vip-line",
  Wallet_2Fill = "wallet-2-fill",
  Wallet_2Line = "wallet-2-line",
  Wallet_3Fill = "wallet-3-fill",
  Wallet_3Line = "wallet-3-line",
  WalletFill = "wallet-fill",
  WalletLine = "wallet-line",
  WaterFlashFill = "water-flash-fill",
  WaterFlashLine = "water-flash-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.i24HoursFill]: "58462",
  [Index.i24HoursLine]: "58463",
  [Index.AuctionFill]: "58464",
  [Index.AuctionLine]: "58465",
  [Index.BankCard_2Fill]: "58466",
  [Index.BankCard_2Line]: "58467",
  [Index.BankCardFill]: "58468",
  [Index.BankCardLine]: "58469",
  [Index.BitCoinFill]: "58470",
  [Index.BitCoinLine]: "58471",
  [Index.CashFill]: "58472",
  [Index.CashLine]: "58473",
  [Index.CoinFill]: "58474",
  [Index.CoinLine]: "58475",
  [Index.CoinsFill]: "58476",
  [Index.CoinsLine]: "58477",
  [Index.CopperCoinFill]: "58478",
  [Index.CopperCoinLine]: "58479",
  [Index.CopperDiamondFill]: "58480",
  [Index.CopperDiamondLine]: "58481",
  [Index.Coupon_2Fill]: "58482",
  [Index.Coupon_2Line]: "58483",
  [Index.Coupon_3Fill]: "58484",
  [Index.Coupon_3Line]: "58485",
  [Index.Coupon_4Fill]: "58486",
  [Index.Coupon_4Line]: "58487",
  [Index.Coupon_5Fill]: "58488",
  [Index.Coupon_5Line]: "58489",
  [Index.CouponFill]: "58490",
  [Index.CouponLine]: "58491",
  [Index.CurrencyFill]: "58492",
  [Index.CurrencyLine]: "58493",
  [Index.ExchangeBoxFill]: "58494",
  [Index.ExchangeBoxLine]: "58495",
  [Index.ExchangeCnyFill]: "58496",
  [Index.ExchangeCnyLine]: "58497",
  [Index.ExchangeDollarFill]: "58498",
  [Index.ExchangeDollarLine]: "58499",
  [Index.ExchangeFill]: "58500",
  [Index.ExchangeFundsFill]: "58501",
  [Index.ExchangeFundsLine]: "58502",
  [Index.ExchangeLine]: "58503",
  [Index.FundsBoxFill]: "58504",
  [Index.FundsBoxLine]: "58505",
  [Index.FundsFill]: "58506",
  [Index.FundsLine]: "58507",
  [Index.Gift_2Fill]: "58508",
  [Index.Gift_2Line]: "58509",
  [Index.GiftFill]: "58510",
  [Index.GiftLine]: "58511",
  [Index.HandCoinFill]: "58512",
  [Index.HandCoinLine]: "58513",
  [Index.HandHeartFill]: "58514",
  [Index.HandHeartLine]: "58515",
  [Index.IncreaseDecreaseFill]: "58516",
  [Index.IncreaseDecreaseLine]: "58517",
  [Index.MoneyCnyBoxFill]: "58518",
  [Index.MoneyCnyBoxLine]: "58519",
  [Index.MoneyCnyCircleFill]: "58520",
  [Index.MoneyCnyCircleLine]: "58521",
  [Index.MoneyDollarBoxFill]: "58522",
  [Index.MoneyDollarBoxLine]: "58523",
  [Index.MoneyDollarCircleFill]: "58524",
  [Index.MoneyDollarCircleLine]: "58525",
  [Index.MoneyEuroBoxFill]: "58526",
  [Index.MoneyEuroBoxLine]: "58527",
  [Index.MoneyEuroCircleFill]: "58528",
  [Index.MoneyEuroCircleLine]: "58529",
  [Index.MoneyPoundBoxFill]: "58530",
  [Index.MoneyPoundBoxLine]: "58531",
  [Index.MoneyPoundCircleFill]: "58532",
  [Index.MoneyPoundCircleLine]: "58533",
  [Index.NftFill]: "58534",
  [Index.NftLine]: "58535",
  [Index.P2pFill]: "58536",
  [Index.P2pLine]: "58537",
  [Index.PercentFill]: "58538",
  [Index.PercentLine]: "58539",
  [Index.PriceTag_2Fill]: "58540",
  [Index.PriceTag_2Line]: "58541",
  [Index.PriceTag_3Fill]: "58542",
  [Index.PriceTag_3Line]: "58543",
  [Index.PriceTagFill]: "58544",
  [Index.PriceTagLine]: "58545",
  [Index.RedPacketFill]: "58546",
  [Index.RedPacketLine]: "58547",
  [Index.Refund_2Fill]: "58548",
  [Index.Refund_2Line]: "58549",
  [Index.RefundFill]: "58550",
  [Index.RefundLine]: "58551",
  [Index.Safe_2Fill]: "58552",
  [Index.Safe_2Line]: "58553",
  [Index.SafeFill]: "58554",
  [Index.SafeLine]: "58555",
  [Index.SecurePaymentFill]: "58556",
  [Index.SecurePaymentLine]: "58557",
  [Index.ShoppingBag_2Fill]: "58558",
  [Index.ShoppingBag_2Line]: "58559",
  [Index.ShoppingBag_3Fill]: "58560",
  [Index.ShoppingBag_3Line]: "58561",
  [Index.ShoppingBagFill]: "58562",
  [Index.ShoppingBagLine]: "58563",
  [Index.ShoppingBasket_2Fill]: "58564",
  [Index.ShoppingBasket_2Line]: "58565",
  [Index.ShoppingBasketFill]: "58566",
  [Index.ShoppingBasketLine]: "58567",
  [Index.ShoppingCart_2Fill]: "58568",
  [Index.ShoppingCart_2Line]: "58569",
  [Index.ShoppingCartFill]: "58570",
  [Index.ShoppingCartLine]: "58571",
  [Index.StockFill]: "58572",
  [Index.StockLine]: "58573",
  [Index.SwapBoxFill]: "58574",
  [Index.SwapBoxLine]: "58575",
  [Index.SwapFill]: "58576",
  [Index.SwapLine]: "58577",
  [Index.Ticket_2Fill]: "58578",
  [Index.Ticket_2Line]: "58579",
  [Index.TicketFill]: "58580",
  [Index.TicketLine]: "58581",
  [Index.TokenSwapFill]: "58582",
  [Index.TokenSwapLine]: "58583",
  [Index.TrophyFill]: "58584",
  [Index.TrophyLine]: "58585",
  [Index.VipCrown_2Fill]: "58586",
  [Index.VipCrown_2Line]: "58587",
  [Index.VipCrownFill]: "58588",
  [Index.VipCrownLine]: "58589",
  [Index.VipDiamondFill]: "58590",
  [Index.VipDiamondLine]: "58591",
  [Index.VipFill]: "58592",
  [Index.VipLine]: "58593",
  [Index.Wallet_2Fill]: "58594",
  [Index.Wallet_2Line]: "58595",
  [Index.Wallet_3Fill]: "58596",
  [Index.Wallet_3Line]: "58597",
  [Index.WalletFill]: "58598",
  [Index.WalletLine]: "58599",
  [Index.WaterFlashFill]: "58600",
  [Index.WaterFlashLine]: "58601",
};
