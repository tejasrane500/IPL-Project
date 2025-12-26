import React, { useEffect, useRef, useState } from 'react'
import { data, Link } from 'react-router-dom';

function InPageNavigation({teams, children}) {

  const [index, setIndex] = useState(0);

  let tabLineRef = useRef();
  let btnRef = useRef();

  function toggleBtn(btn,i){
    let {offsetWidth , offsetLeft} = btn
    tabLineRef.current.style.width = offsetWidth + "px"
    tabLineRef.current.style.left = offsetLeft + "px"
    setIndex(i);
  }

  useEffect(() => {
    toggleBtn(btnRef.current, 0)
  },[])

  return (

    <div className='w-full'>
      <div className={' w-full flex justify-between items-end ' + (teams.length > 2 ? " h-[100px] " : "h-[50px]")}>
        {
           teams.length > 2 ?  
           teams.map(({path , title}, i) => (
               <Link to={path}><button ref={i == 0 ? btnRef : null} className={" font-bold mr-1 px-7 py-5 lg:px-16 hover:bg-gray-200/20 " + (index == i ? "text-white bg-gray-200/20" : "text-gray-400")} onClick={(e) => toggleBtn(e.target, i)}>{title}</button></Link>
           ))
           :
           teams.map((data, i) => (
               <button ref={i == 0 ? btnRef : null} className={"bg-black w-[50%] h-full border-gray-500 mr-1 px-10 " + (index == i ? "text-white" : "text-gray-400")} onClick={(e) => toggleBtn(e.target, i)}>{data}</button>
           ))
        }
        <hr ref={tabLineRef} className='border-white border-2 absolute duration-300' />
     </div>

     {teams.length > 2 ? "" : children[index]}
     
    </div>
  )
}

export default InPageNavigation;
