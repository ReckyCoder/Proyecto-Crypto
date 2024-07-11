import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseShema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseShema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>