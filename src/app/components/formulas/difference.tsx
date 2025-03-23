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

    const Binomial = aNum ** 2 + 2 *aNum*bNum + bNum**2

    const aDisplay = aNum == 0 ? 'A' : aNum
    const bDisplay = bNum == 0 ? 'B' : bNum

    return(
        <>
        <div className="binomial">
            <h2>Square of a difference</h2>
            <div className="numbers">
            <input type="number" placeholder="A" className="num" onChange={selectAnumber} />
            <input type="number" placeholder="B" className="num" onChange={selectBnumber} />
            </div>
            <p>({aDisplay} - {bDisplay})<sup>2</sup> = {aDisplay}<sup>2</sup> - 2*{aDisplay}*{bDisplay} + {bDisplay}<sup>2</sup> = <span>{Binomial}</span></p>
        </div>
        </>
    )
}