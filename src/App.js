import './App.css';
import Listing from './listing/Listing';
import Filters from './filters/Filters';
import { useState, useEffect } from 'react';

const therapists = [
  { name: "Dr. Vicki Van Cleave, PsyD", specialty: "General Psychology", address: "1306 E Broadway St B, Campbellsville KY, 42718", phone: "(270)-215-2373", website: "dr-vicki.com", specs: [true, false, false, false, false, false, false] },
  { name: "Heartland Hope Counseling, LLC", specialty: "Counseling", address: "112 Roberts Rd. #4, Campbellsville, KY, 42718", phone: "(270)-283-4259", website: "N/A", specs: [false, false, false, false, false, true, false] },
  { name: "Heartland Psychiatry PLLC", specialty: "Psychiatry", address: "1878 Old Lebanon Rd, Campbellsville, KY, 42718", phone: "(270)-465-2023", website: "N/A", specs: [false, true, false, false, false, false, false] },
  { name: "The Adanta Group", specialty: "Service, Family, Child", address: "250 Watertower Bypass, Campbellsville, KY, 42718", phone: "(270)-465-7424", website: "adanta.org", specs: [false, false, true, true, false, false, true] },
  { name: "Safe Harbor Mental Health", specialty: "Clinic, Relationship", address: "69 Jacks Ln, Somerset, KY, 42501", phone: "(606)-678-0014", website: "safe-harbor-mental-health.business.site", specs: [false,false,false,false,true,false,true] },
  {name:"Dianne Perry-Adler, CERT", specialty:"Psychologist", address:"200 E Frazier Ave, Columbia, KY, 42728", phone:"(270)-384-4710", website:"N/A", specs:[true,false,false,false,false,false,false]},
  {name:"Avalon Psychological Center", specialty:"Service", address:"106 Southport Dr, Somerset, KY, 42501", phone:"(606-677-0053", website:"N/A", specs:[false,false,false,false,false,false,true]},
  {name:"Broyles Angie", specialty:"Psychologist", address:"259 Parkers Mill Rd, Somerset, KY, 42501", phone:"(606)679-4782", website:"N/A", specs:[true,false,false,false,false,false,false]},
  {name:"Somerset Mental Health", specialty:"Psychology, Child, Clinic", address:"149 Enterprise Dr, Somerset, KY, 42501", phone:"(606)-679-6995", website:"somersetmentalhealth.com", specs:[true,false,true,false,false,false,true]},
  {name:"Catalyst Behavioral Health", specialty:"Psychology, Psychiatry, Family, Relationship, Clinic", address:"321 Ringgold Rd, Somerset, KY, 42503", phone:"(606)-451-1936", website:"catalystbh.com", specs:[true,true,false,true,true,false,true]},
  {name:"Intrust Healthcare Counseling Services", specialty:"Counseling, Family, Relationship", address:"401 Bogle St #102, Somerset, KY, 42503", phone:"(606)-676-0638", website:"intrust-healthcare.com", specs:[false,false,false,true,true,true,false]}
];
// Remove distance, add specialties, phone, and website-if-applicable

function App() {
  const [selected, setSelected] = useState([false, false, false, false, false, false, false]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(therapists.filter((entry) => {
      let i = 0;
      for (i = 0; i < selected.length; i++) {
        if (selected[i] && entry.specs[i]) {
          return true;
        }
      }
      return false;
    }))
  }, [selected]);


  return (
    <div className="App">
      <h1>Therapy Finder</h1>
      <div className="App-Section">
      </div>
      <Filters selected={selected} setSelected={setSelected} />
      <Listing list={list} />
    </div>
  );
}
// Prototyping here for now.  Will use this for updating the list based on filtering.


// Prototyping method for sorting.
// Nevermind that.  I can use the array.sort function as long as I can integrate the distances somehow.  Distances are piss easy, all I need to do now is ensure I can
//A: Get the API
//B: Insert the distances into the dataset somehow.

export default App;
