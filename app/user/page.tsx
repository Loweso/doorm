import React from "react"
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaList } from "react-icons/fa6";

const page = () => {
  return (
    <div className="h-screen flex flex-row">
        <div className="w-1/3 h-full bg-[#B67352] flex justify-center items-center">
            <Image
                src="/shrekid.jpg"
                height={500}
                width={500}
                alt="No image"
                className="w-96 h-96 aspect-square rounded-full"/>
        </div>
        <div className="w-2/3 h-full p-8">
            <h1 className=" w-full font-bold text-7xl text-[#B67352]">
                 Welcome, <span className="font-semibold text-7xl italic text-[#ECB159]"> Shrek! </span>
            </h1>
            <div className="w-full h-[500px] border-[1px] rounded-lg border-gray-800 mt-6">
                <div className="w-full h-3/4 flex flex-row">
                    <div className="w-5/6 h-full p-4 flex flex-col gap-5 mt-2 ml-4">
                        <div> 
                            <p className="text-3xl text-[#B67352] font-semibold"> 
                                UserID:</p>
                            <p className="font-semibold text-3xl text-[#6D5D55]"> 
                                2024-0923803</p>
                        </div>
                        <div> 
                            <p className="text-3xl text-[#B67352] font-semibold">
                                Name:</p>
                            <p className="text-2xl text-[#6D5D55]"> 
                                Sir Shrek</p>
                        </div>
                        <div> 
                            <p className="text-3xl text-[#B67352] font-semibold">
                                Email Address:</p>
                            <p className="text-2xl text-[#6D5D55]">
                                sirshrek@upc.edu.pc</p>
                        </div>
                        <div> 
                            <p className="text-3xl text-[#B67352] font-semibold">
                                Phone Number:</p>
                            <p className="text-2xl text-[#6D5D55]"> 
                                09491223335566</p>
                        </div>
                    </div>
                    <div className="w-1/6 h-full justify-end flex items-center flex-col gap-4"> 
                        <button className="w-16 h-16 bg-[#ECB159] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#99733B]"> 
                            <FiEdit3 color="white" className="w-12 h-12 "/>
                        </button>
                        <button className="w-16 h-16 bg-[#B67352] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#905B40]">  
                            <MdOutlineDeleteOutline color="white" className="w-12 h-12 "/>
                        </button>
                    </div>
                </div>
                <div className="w-full h-1/4 flex justify-center items-center space-x-8"> 
                    <button className="w-64 h-16 bg-[#DEDAD1] border-[1px] space-x-4 rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#D1CEC9]">  
                        <FaList color="#6D5D55" className="w-8 h-8"/>
                        <p className="text-2xl text-[#6D5D55] font-medium"> Your Listings</p>
                    </button>
                    <button className="w-80 h-16 bg-[#DEDAD1] border-[1px] space-x-4 rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#D1CEC9]">  
                        <FaList color="#6D5D55" className="w-8 h-8"/>
                        <p className="text-2xl text-[#6D5D55] font-medium"> Your Applications</p>
                    </button>
                </div>

            </div>
        </div>

    
    </div>
        
  )
}

export default page;