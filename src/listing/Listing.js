import Address from './../address/Address';
import './Listing.css';

const Listing=()=>{
    return(
        <div className="Listing">
            <div className="Listing-Spacer"></div>
            <Address/>
            <Address/>
            <Address/>
            <Address/>
        </div>
    );
}

export default Listing