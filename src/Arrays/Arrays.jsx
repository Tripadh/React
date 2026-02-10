import React from "react";
import {userdata} from "./data";
let SampleArray=["Hello world",35,{userName:"Kalyan"},true,false];
let players=[
    {
        name:"Sachin Tendulkar",
        age: 50,
        country: "India"
    
    }
]
console.log(userdata);


const Arrays = ()   => {
    return(
        <div>
            {SampleArray[0]}
            {players.map((items)=>{
                return(
                    <div>
                        <h1>my fav player {items.name}</h1>
                        <p>his age is {items.age}</p>
                        <p>he is from {items.country}</p>
                    </div>
                )
            })}
            {players[0].name}
            {userdata.map((items)=>{
                return(
                    <div style={{border:"1px solid black"}} key={items.id}>
                        <h1>{items.name}</h1>
                        <p>{items.email}</p>
                        <p>{items.address.city}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Arrays;