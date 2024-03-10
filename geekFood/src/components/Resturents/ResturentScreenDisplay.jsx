import ResturentCard from "./ResturentCard";
import ResturentAllData from './ResturantData.json'
function ResturentScreenDisplay(){
    console.log("data",ResturentAllData.Resturentdata[0]);
    const ResturentData = (ResturentAllData.Resturentdata);
    console.log("getting",ResturentData[0].URL);
    
    return(
        <>
            <div className="ResturentCardDisplay" style={{
                        display : "flex",
                        justifyContent : "center",
                        alignContent : "center",
                        flexWrap : "wrap"}}>

                            {
                              ResturentData.map((data , index) =>{
                                return(
                                    <ResturentCard key = {data._idL.$oid} name = {data.name} address={data.address} addressline2 = {data.addressline2} outcode ={data.outcode} postcode={data.postcode} type_of_food = {data.type_of_food} rating = {data.rating}/>
                                )
                              })  
                            }
                
            </div>
        </>
    );
}
export default ResturentScreenDisplay