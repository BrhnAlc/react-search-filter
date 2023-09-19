
import { useState } from 'react';
import './App.css';
import Data from './Data.json';

function App() {
  const [konsey, setKonsey] = useState("")
  return (
    <div className="container">
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
     <div className='inputContainer'>
      <input type="text" placeholder='Konsey Üyesi Giriniz...' onChange={(e)=>setKonsey(e.target.value)}/>
      </div>
      <div className='dataContainer'>
     {
      Data.filter((value)=>{
        if(konsey===""){
          return value;

        }else if(value.title.toLocaleLowerCase().includes(konsey.toLocaleLowerCase()))
        {
      return value;
      }
      }).map((value)=>{
        return(
          <div className='data' key={value.id}>
         <div>
     <img src={value.image}/>
      <h2>{value.title}</h2>
      <p>{value.description}</p>
     </div>
          </div>
        )
      })
     }
     </div>
    </div>
  );
}

export default App;
