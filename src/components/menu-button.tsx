import React, { useState } from 'react'


export const MenuButton = () => {

  const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
      setToggled(!toggled);
      console.log(toggled)
    };
  return (
    <>
        {
          toggled ?
          <>
          
            <div className="col-span-5">
              <button className="btn bg-gray-700 rounded-xl" onClick={handleToggle}>
              <span className="icon">
                <svg viewBox="0 0 175 80" width={40} height={40}>

                </svg>
              </span>
              <span className="text text-white">MENU</span>
               </button>
              </div>
          
          
              <div className="grid grid-cols-1 grid-rows-2 gap-80 bg-gray-800 rounded-xl shadow-xl">
                  <div className="col-span-2"></div>
              </div>

          </> 
          : 
            <div className="col-span-5">
              <button className="btn bg-gray-700 rounded-xl" onClick={handleToggle}>
              <span className="icon">
                <svg viewBox="0 0 175 80" width={40} height={40}>

                </svg>
              </span>
              <span className="text text-white">MENU</span>
             </button>
            </div>
      }
    </>
  )
}
