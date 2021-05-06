import './Filters.css';

const Filters = ({ selected, setSelected }) => {
    const changeFilter = (setSelected) => {
        const filter1=document.getElementById("Filters-Entry-General");
        const filter2=document.getElementById("Filters-Entry-MD");
        const filter3=document.getElementById("Filters-Entry-Child");
        const filter4=document.getElementById("Filters-Entry-Family");
        const filter5=document.getElementById("Filters-Entry-Relationship");
        const filter6=document.getElementById("Filters-Entry-Counselor");
        const filter7=document.getElementById("Filters-Entry-Service");
        setSelected([filter1.checked, filter2.checked, filter3.checked, filter4.checked, filter5.checked, filter6.checked, filter7.checked]);
    }

    return (
        <div className="Filters">
            <div className="Filters-List">
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-General">Psychologist</label>
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
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-Counselor">Counselor</label>
                    <input type="checkbox" name="Counselor" id="Filters-Entry-Counselor"/>
                </div>
                <div className="Filters-Entry">
                    <label htmlFor="Filters-Entry-Service">Service/Clinic</label>
                    <input type="checkbox" name="Service" id="Filters-Entry-Service"/>
                </div>
            </div>
            <button onClick={()=>changeFilter(setSelected)}>Filter</button>
        </div>
    )
}

export default Filters