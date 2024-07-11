import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
}) 

export const CryptoCurrencyResponseShema = z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
})


export const CryptoCurrenciesResponseShema = z.array(CryptoCurrencyResponseShema)

export const PairSchema = z.object({
    currency: z.string(),
    criptoCurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})