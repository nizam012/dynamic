import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'

function Topnav1() {
    return (
        <div className="top-nav1 d-flex justify-content-between">
            <h4 className='p1-t' >Skilldots</h4>
            <div className="side p-2 ">
                <button className='button1 mx-2' ><CgMenuGridO className='m-1' size={30} />Categories </button>
                <input className='search2 p-2' type="text" placeholder="Search For Courses" />
            </div>
        </div>
    )
}

export default Topnav1