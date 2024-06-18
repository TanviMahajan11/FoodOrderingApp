
const OffersCard = (props) =>{

    // destructing props 
    const {offerData} = props;
    // console.log(offerData);
    return(
    <div className="offers">
        <h3> {offerData?.info?.header}</h3>
        <h4>  {offerData?.info?.description}</h4>
    </div>
    );
};

export default OffersCard;

