import './Address.css';

const Address=({number, name, specialty, address, phone, website})=>{
    return(
        <div className="Address">
            <div className="Address-Section">
            <p>{number}</p>
            <p>Name:{name}</p>
            <p>Specialty:{specialty}</p>
            </div>
            <div className="Address-Section">
            <p>Address:{address}</p>
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
            </div>
        </div>
    )
}

export default Address