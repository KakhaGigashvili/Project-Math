'use client'

import { useState } from "react"
import './formulas.scss'

export default () => {

    const[aNum, setaNum] = useState(0)
    const[bNum, setbNum] = useState(0)

    const selectAnumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setaNum(Number(e.target.value))
    }

    const selectBnumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setbNum(Number(e.target.value))
    }

    const Binomial = (aNum - bNum) * (aNum + bNum)

    const aDisplay = aNum == 0 ? 'A' : aNum
    const bDisplay = bNum == 0 ? 'B' : bNum

    return(
        <>
        <div className="binomial">
            <h2>Binomial Theorem</h2>
            <div className="numbers">
            <input type="number" placeholder="A" className="num" onChange={selectAnumber} />
            <input type="number" placeholder="B" className="num" onChange={selectBnumber} />
            </div>
            <p>{aDisplay}<sup>2</sup> - {bDisplay}<sup>2</sup> = ({aDisplay} - {bDisplay}) * ({aDisplay} + {bDisplay}) = <span>{Binomial}</span></p>
        </div>
        </>
    )
}