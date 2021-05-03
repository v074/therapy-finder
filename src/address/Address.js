import './Address.css';

const Address=({number, name, distance, address})=>{
    return(
        <div className="Address">
            <div className="Address-Section">
            <p>{number}</p>
            <p>Name:{name}</p>
            <p>Distance:{distance} mi.</p>
            </div>
            <p>Address:{address}</p>
        </div>
    )
}

export default Address