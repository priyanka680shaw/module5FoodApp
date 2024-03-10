import ResturentCard from "./ResturentCard";
import ResturentAllData from './ResturantData.json'
import { useState } from "react";
function ResturentScreenDisplay(){
    // console.log("data",ResturentAllData.Resturentdata[0]);
    const ResturentData = (ResturentAllData.Resturentdata);
    // console.log("getting",ResturentData[0].URL);

    //creating state

    const [food , setFoodData] = useState(ResturentData);

    //update rating search
    
    // function ratingUpdate(e){
    //     console.log(e.target.value)
    //     const ratings = [...food];
    //     ratings.rating = e.target.value;
    //     setFoodData(ratings);
    //     console.log(ratings)
    // }

    function ratingUpdate(name) {
        let filterData = data.filter((item) => {
          if (item.name.toLowerCase().includes(name.trim())) {
            return true;
          }
          return false;
        });
        setFood(filterData);
      }

    //filderedData
    function filderedData(name){
        let filterData = ResturentAllData.filter((items , index)=>{
            if(items.name){
                return true ;
            }
        })
        setFoodData(filterData);
    }


    // function filterData(name) {
    //     let filterData = data.filter((item) => {
    //       if (item.name.toLowerCase().includes(name.trim())) {
    //         return true;
    //       }
    //       return false;
    //     });
    //     setFood(filterData);
    //   }



    return(
        <>

            <div className="resturantSearchBar" style={{
                width : "100%",
                padding : "10px",
                // border : "2px solid red",
                display : "flex",
                justifyContent :"center",
                alignItems : "center"
            }}>
                <div className="innerResturantSearchBar"    style={{
                width : "90%",
                padding : "5px",
                // border : "2px solid red",
                display : "flex",
                justifyContent :"space-Between",
                alignItems : "center"
            }}>
                    <input type="text" placeholder="Search Resturents..." style={{
                        width :"300px",
                        padding : "15px",
                        borderRadius : "8px",
                        border :"none",
                        backgroundColor: " rgb(237, 233, 233)"
                    }} onChange={filderedData}></input>
                    <input type="number" placeholder="Rating" style={{
                        width :"80px",
                        padding : "10px",
                        borderRadius : "8px",
                        border :"none",
                        backgroundColor: " rgb(237, 233, 233)"
                    }} onChange={ratingUpdate}></input>
                </div>
                
            </div>


            <div className="ResturentCardDisplay" style={{
                        display : "flex",
                        justifyContent : "center",
                        alignContent : "center",
                        flexWrap : "wrap"}}>

                            {
                              food.map((data , index) =>{
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