import React, { useState } from 'react'


const Toggle = () => {
    const [isOn,setisOn]=useState()

    const handletogle=()=>{
  setisOn(!isOn)}
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button 
          style={{
            backgroundColor:"green",
         
            textAlign: "center",
            marginTop: "10px",
            border:"2px solid blue", 
            borderRadius:"10px"
            
          }}
          onClick={handletogle}
        >
          {isOn ? "show Image" : "Hide Image"}
        </button>

        <div style={{ textAlign: "center" }}>
          {isOn ? (
            <>
              <h2 style={{ color: "green" }}>Congratulations! 🎉</h2>
              <img
                style={{
                  width: "1000px",
                  height: "540px",
                  border: "3px solid yellow",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                src="nature.jpg"
                alt="nature"
              />
            </>
          ) : (
            // Agar false hai (Jab image NAHI hai)
            <div style={{ marginTop: "5px", color: "gray" }}>
              <h3>please enter button and show image</h3>
       
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Toggle
