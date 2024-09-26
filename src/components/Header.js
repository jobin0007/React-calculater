import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="sm:w-full bg-slate-100 h-40 lg:w-full shadow-lg">
            <Link to={""}>
                <h3 className='tracking-wide text-center lg:text-7xl p-6 font-serif '>
                    Two Apps
                </h3>
            </Link>

            <div className="">
                <h3>
                    {/* <Link to='/calcultor'></Link> */}
                </h3>
            </div>
        </div>
    )
}

export default Header
