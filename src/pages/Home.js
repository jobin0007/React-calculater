import React from 'react'
import { Link } from 'react-router-dom'
import { BsCalculator } from "react-icons/bs";
import { BsFillStopwatchFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-row container mx-auto justify-between mt-10  shadow-lg p-20 ">
            <div className="basis-2/4 flex justify-center items-center ">
                <Link to={'/calculater'} className="text-cyan-400" >< BsCalculator size={70} />
                    <h2 className="text-lg font-serif ">Calculator</h2>
                </Link>

                <div className="">
                    <p>

                    </p>
                </div>
            </div>
            <div className="basis-2/4 flex justify-center items-center">
                <Link to={'/stopwatch'} className="text-cyan-400" >< BsFillStopwatchFill size={70} />
                    <h2 className="text-lg font-serif ">stop watch</h2>
                </Link>

            </div>

        </div>
  )
}

export default Home

