
import React, { useState } from 'react'

var Tvalue = 0
var Tmeters = 0
var Tsubtotal = 0
var Ttax = 0
var Ttotal = 0
var Tduetoday = 0

const Data = (props) => {

    const [counter, setCounter] = useState(0);
    return (
        <div className='App-list'>
            <section className='List-section' >
                <div className='List-card'>
                    <img src={props.image} className='card-img' />
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <button onClick={() => {
                        setCounter(counter - 1)
                        Tvalue--
                        Tmeters = Tmeters - props.meters
                        Tsubtotal = Tmeters * 200
                        Ttax = Tsubtotal * 1.16
                        Ttotal = Tsubtotal + Ttax
                        Tduetoday = Ttotal * 0.5

                    }}>-</button>
                    <input disabled value={counter}></input>
                    <button onClick={() => {
                        setCounter(counter + 1)
                        Tvalue++
                        Tmeters = Tmeters + props.meters
                        Tsubtotal = Tmeters * 200
                        Ttax = Tsubtotal * 0.16
                        Ttotal = Tsubtotal + Ttax
                        Tduetoday = Ttotal * 0.5

                    }
                    } >+</button>
                </div>
            </section>
        </div>

    )
}

export default Data

export const ComponentCost = () => {
    let [counter, setCounter] = useState(0);
    let [meterCounter, setMeterCounter] = useState(0)
    let [subtotal, setSubtotal] = useState(0)
    let [tax, setTax] = useState(0)
    let [total, setTotal] = useState(0)
    let [dueToday, setDuetoday] = useState(0)
    return (<div>
        <section className='App-btn'>
        <button onClick={() => { }}>Clear</button>
        <button onClick={() => {


            setCounter(counter = Tvalue)
            setMeterCounter(meterCounter = Tmeters.toFixed(2))
            setSubtotal(subtotal = Tsubtotal.toFixed(2))
            setTax(tax = Ttax.toFixed(2))
            setTotal(total = Ttotal.toFixed(2))
            setDuetoday(dueToday = Tduetoday.toFixed(2))

        }}>Calculate</button>
        </section>
        <section>
            <h3 className='App-Summary'>Summary</h3>
        </section>

        <div className='App-cost'>

            <ul>
                <li>Total Items <input disabled value={counter}></input></li>
                <li>Total M2<input disabled value={meterCounter}></input></li>
                <li>Subtotal<input disabled value={subtotal}></input></li>
                <li>Tax<input disabled value={tax}></input></li>
                <li>Total<input disabled value={total}></input></li>
                <li>Due Today 50%<input disabled value={dueToday}></input></li>
            </ul>


        </div>
    </div>
    )



}

