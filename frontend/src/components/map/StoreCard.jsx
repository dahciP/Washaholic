const StoreCard =(props)=>{
    return(
        <div className="shadow-md flex flex-col space-y-10 px-3 justify-center  py-5 my-5  w-[90%]">
            <h1 className="text-2xl font-semibold ">{props.name}</h1>
           
                <ul className="text-LG font-semibold ">
                    <li>Distance in meters: {props.distanceMeter}</li>
                    <li>Rating: {props.rating}</li>
                    <li>Address: {props.address}</li>
                   
                </ul>
            
            <button className="shadow-md text-white bg-orange-500 py-2 px-2 w-[20%]">Choose Hospital</button>



        </div>
    )
}
export default StoreCard