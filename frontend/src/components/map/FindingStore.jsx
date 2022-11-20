import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import StoreCard from "./StoreCard"
import SimpleMap from "./Map"

const FindingStore=(props)=>{
    const [lat,setLat]=useState("")
    const [lng,setLng]=useState("")
    const [hospital,setHospital]=useState([])
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLat(pos.coords.latitude)
            setLng(pos.coords.longitude)
          })
    
        },[])

    
    const options = {
        method: 'GET',
        url: 'https://nearby-places.p.rapidapi.com/nearby',
        params: {lat: '19.136326', lng: '72.82766', type: 'hospital', radius: '1000'},
        headers: {
            'X-RapidAPI-Key': '69542c9690msh5066e7b756ed050p1dfbcbjsnfc992f3444f9',
            'X-RapidAPI-Host': 'nearby-places.p.rapidapi.com'
          }
      };
      
      const fetchStores=()=>{
        axios.request(options).then(function (response) {
            setHospital(response.data)
        }).catch(function (error) {
            console.error(error);
        });

      }
      



    return(  
        <>
        <div className=" bg-blue-200">
            <h1 className="text-5xl py-5 px-20 text-gray-500 ">Finding Hospital</h1>
        </div>
        <button className="text-white bg-orange-500 rounded-sm px-4 my-5 text-xl py-3 ml-20" onClick={fetchStores}>Enale Live Location</button>
        <div className=" my-20 flex w-full  px-20 items-center ">
       
            
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                <h2 className="text-4xl text-black">Hospital Information</h2>
                {hospital && hospital.map((h)=><StoreCard {...h}></StoreCard>)}

                </div>
               
                {hospital && <SimpleMap hospital={hospital}></SimpleMap>}
            </div>
            <div>
            
            </div>
            </div>
        </>
        
    )

}
export default FindingStore