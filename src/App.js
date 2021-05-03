import './App.css';
import Listing from './listing/Listing';
import Filters from './filters/Filters';
import {useState, useEffect} from 'react';

const therapists =[
  {name:"Dr. A", distance:12, address:"1234", specs:[true, false, false, false, false]},
  {name:"Dr. B", distance:30, address:"5678", specs:[false, true, false, false, false]},
  {name:"Dr. C", distance:70, address:"9876", specs:[false, false, true, false, false]},
  {name:"Dr. D", distance:22, address:"5432", specs:[false, false, false, true, false]},
  {name:"Dr. E", distance:55, address:"6535", specs:[false, false, false, false, true]},
  {name:"Dr. F", distance:81, address:"9999", specs:[true, false, false, false, true]}
];

function App() {
  const [selected, setSelected]=useState([false,false,false,false,false]);
  const [list, setList]=useState([]);

  useEffect(()=>{setList(therapists.filter((entry)=>{
    let i=0;
    for(i=0;i<selected.length;i++){
      if(selected[i]&&entry.specs[i]){
        return true;
      }
    }
    return false;
  }))}, [selected]);
  return (
    <div className="App">
      <h1>Therapy Finder</h1>
      <div className="App-Section">
      </div>
      <Filters selected={selected} setSelected={setSelected}/>
      <Listing list={list}/>
    </div>
  );
}
// Prototyping here for now.  Will use this for updating the list based on filtering.


// Prototyping method for 

export default App;
