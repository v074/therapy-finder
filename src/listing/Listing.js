import Address from './../address/Address';
import './Listing.css';

const Listing=({list})=>{
    return(
        <div className="Listing">
            <div className="Listing-Spacer"></div>
            {/* Note: map function will be used here. */}
            {list.map(item=>(
                <Address
                number={list.indexOf(item)+1}
                name={item.name}
                specialty={item.specialty}
                address={item.address}
                phone={item.phone}
                website={item.website}
                />
            ))}
        </div>
    );
}

export default Listing