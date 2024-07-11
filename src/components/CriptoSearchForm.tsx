import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptoCurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value 
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')

        // Consultar la API
        fetchData(pair)
    }

    return (
        <form className='form' action="" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className='field'>
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currencie => (
                        <option key={currencie.code} value={currencie.code}>{currencie.name}</option>
                    ))}
                </select>
            </div>
            <div className='field'>
                <label htmlFor="criptoCurrency">Criptomoneda:</label>
                <select name="criptoCurrency" id="criptoCurrency" value={pair.criptoCurrency} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(cryptocurrencie => (
                        <option key={cryptocurrencie.CoinInfo.FullName} value={cryptocurrencie.CoinInfo.Name}>{cryptocurrencie.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value='Cotizar'/>
        </form>
    )
}
