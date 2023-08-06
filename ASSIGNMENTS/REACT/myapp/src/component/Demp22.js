import React from 'react'

let x = [
        {name:"Anubhav",Branch:"CSE"},
        {name:"Pal",Branch:"CSE"}
    ]

export default function Demp22() {
  return (
    <div>
      {
        x.map(
            (obj)=>{return(
                <h3>Your Name is {obj.name} and your branch is {obj.Branch}. </h3>
            )}
        )
      }
    </div>
  )
}
