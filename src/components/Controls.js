import React, { useState,useEffect } from 'react'
import convert from 'convert-units'

export default function Controls() {

    const [measure,setMeasure]=useState('mass')
    const [units,setUnits]=useState([])
    const [unitVal,setVals]=useState({
        unit1:'',unit2:''
    })
    const [input,setInput]=useState(0)
    const [result,setResult]=useState(0)


    useEffect(() => {
        console.log("in effect",measure)
        switch (measure) {
            case 'mass':
                setUnits([...UnitsOfMass])
                setVals({unit1:'mcg',unit2:'mcg'})
                break;
            case 'volume':
                setUnits([...UnitsOfVolume])
                setVals({unit1:'ml',unit2:'ml'})
                break;
            case 'length':
                setUnits([...UnitsOfLength])
                setVals({unit1:'mm',unit2:'mm'})
                break;
        }
    }, [measure]);

    const handleMeasure=(e)=>{
        setMeasure(e.target.value)
        setVals({
            unit1:'',unit2:''
        })
        }
    
    const handleUnits=(e)=>{
        setVals({...unitVal,[e.target.name] : e.target.value})
    }   
    
    const Converter=(input,val1,val2)=>{
        if(input){
        setResult(convert(input).from(val1).to(val2))
    }
}
        
    const Measure =[
        {label: 'Mass',value:'mass'},
        {label: 'Volume',value:'volume'},
        {label: 'Length',value:'length'}
    ]

    const UnitsOfLength=[
        {label: 'millimeter',value:'mm'},
        {label: 'centimeter',value:'cm'},
        {label: 'meter',value:'m'},
        {label: 'kilometer',value:'km'},
        {label: 'inch',value:'in'},
        {label: 'foot',value:'ft'},
        {label: 'yard',value:'yd'},
        {label: 'mile',value:'mi'}
    ]

    const UnitsOfMass=[
        {label: 'microgram',value:'mcg'},
        {label: 'milligram',value:'mg'},
        {label: 'gram',value:'g'},
        {label: 'kilogram',value:'kg'},
        {label: 'ounce',value:'oz'},
        {label: 'pound',value:'lb'}
    ]

    const UnitsOfVolume=[
        {label: 'milliliter',value:'ml'},
        {label: 'liter',value:'l'},
        {label: 'cup',value:'cup'},
        {label: 'pint',value:'pnt'},
        {label: 'quart',value:'qt'},
        {label: 'gallon',value:'gal'}
    ]

    console.log("Unit",unitVal)

  return (
      <>
      <h1>UNIT-CONVERTER</h1>
      <div className='container'>
          
          <div className='input-controls'>
   <div className='drop-down'>
        <select name='measure' id='measure' onChange={(e)=>handleMeasure(e)}>
        {
            Measure.map(m=>{
                return (
                <option value={m.value} key={m.value}>{m.label}</option>
                )
            })
        }
        </select>
        <select name='unit1' id='unit1' onChange={(e)=>handleUnits(e)}>
        {
            units.map(o=>{
                return (
                <option value={o.value} key={o.value}>{o.label}</option>
                )
            })
        }
        
        </select>

        <select name='unit2' id='unit2' onChange={(e)=>handleUnits(e)}>
        {
            units.map(o=>{
                return (
                <option value={o.value} key={o.value}>{o.label}</option>
                )
            })
        }
        
        </select>

    </div>
    <div className='input-box'>
        <input type="number" className="user-input" onChange={e=>setInput(e.target.value)} />
        <button onClick={()=>Converter(input,unitVal.unit1,unitVal.unit2)}>Go</button>
    </div>
    </div>
    <div className='output'>
        {result}
    </div>
    </div>
    </>
   
  )
}
