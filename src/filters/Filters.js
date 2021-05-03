import './Filters.css';

const Filters = ({ selected, setSelected }) => {
    const changeFilter = (setSelected) => {
        const filter1=document.getElementById("Filters-Entry-General");
        const filter2=document.getElementById("Filters-Entry-MD");
        const filter3=document.getElementById("Filters-Entry-Child");
        const filter4=document.getElementById("Filters-Entry-Family");
        const filter5=document.getElementById("Filters-Entry-Relationship");
        setSelected([filter1.checked, filter2.checked, filter3.checked, filter4.checked, filter5.checked]);
    }

    return (
        <div className="Filters">
            <div className="Filters-List">
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-General">General Psychologist</label>
                    <input type="checkbox" name="General" id="Filters-Entry-General"/>
                </div>
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-MD">Psychiatrist</label>
                    <input type="checkbox" name="Psychiatrist" id="Filters-Entry-MD"/>
                </div>
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-Child">Child</label>
                    <input type="checkbox" name="Child Therapist" id="Filters-Entry-Child"/>
                </div>
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-Family">Family</label>
                    <input type="checkbox" name="Family Therapist" id="Filters-Entry-Family"/>
                </div>
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-Relationship">Relationship</label>
                    <input type="checkbox" name="Relationship Therapist" id="Filters-Entry-Relationship"/>
                </div>
            </div>
            <button onClick={()=>changeFilter(setSelected)}>Filter</button>
        </div>
    )
}

export default Filters