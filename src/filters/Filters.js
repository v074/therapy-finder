import './Filters.css';

const Filters=()=>{
    return(
        <div className="Filters">
            <div className="Filters-Entry">
                <label htmlFor="Filters-Entry-General">General Psychologist</label>
                <input type="checkbox" name="" id="Filters-Entry-General"/>
            </div>
            <div className="Filters-Entry">
                <label htmlFor="Filters-Entry-MD">Psychiatrist</label>
                <input type="checkbox" name="" id="Filters-Entry-MD"/>
            </div>
            <div className="Filters-Entry">
                <label htmlFor="Filters-Entry-Child">Child</label>
                <input type="checkbox" name="" id="Filters-Entry-Child"/>
            </div>
            <div className="Filters-Entry">
                <label htmlFor="Filters-Entry-Family">Family</label>
                <input type="checkbox" name="" id="Filters-Entry-Family"/>
            </div>
            <div className="Filters-Entry">
                <label htmlFor="Filters-Entry-Relationship">Relationship</label>
                <input type="checkbox" name="" id="Filters-Entry-Relationship"/>
            </div>
        </div>
    )
}

export default Filters