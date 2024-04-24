import React from 'react'
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const page = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#FEFBF6]">
        <div className="w-5/6 bg-[#ECB159] border-[1px] rounded-lg border-gray-800"> 
            <div className="h-4/6 bg-[#EFEBE3] border-b-[1px] rounded-lg border-gray-800 flex flex-col justify-start items-center gap-4">
                <div className="w-full h-5/6 bg-[#FEFBF6] border-b-[1px] rounded-lg border-gray-800 flex flex-row"> 
                    <div className="w-1/2 rounded-lg flex justify-center items-center"> 
                        <div className="w-5/6 h-5/6 border-[1px] rounded-lg border-gray-800"> 
                            <Image
                            src="/shrekid.jpg"
                            width={500}
                            height={500}
                            alt="No image"
                            className="w-full h-full border-[1px] rounded-lg border-gray-800"/>
                        </div>                    
                    </div>
                    <div className="w-1/2 h-full rounded-lg flex justify-center items-start flex-col gap-12"> 
                        <h1 className="text-3xl text-[#4E423B] font-semibold"> Name </h1>
                        <div className="w-full h-1/3 flex justify-start items-center flex-row gap-4"> 
                            <button className="w-32 h-12 bg-[#ECB159] bg-opacity-35 border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#CCB89A]"> 
                                <FiEdit3 color="#4E423B" className="w-4 h-4 "/> 
                                <p className="text-sm text-[#4E423B] font-normal"> Edit Listing</p>
                            </button>
                            <button className="w-32 h-12 bg-[#B67352] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#905B40]">  
                                <MdOutlineDeleteOutline color="#4E423B" className="w-4 h-4"/>
                                <p className="text-sm text-[#4E423B] font-normal"> Delete Listing </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div> 
                    <p className="text-2xl text-[#4E423B] font-semibold"> List of Applicants </p>
                </div>
            </div>
            <div className="flex flex-row overflow-y-auto"> 
                <div className="w-1/3 h-full flex flex-col items-center m-2 gap-2"> 
                    <p className="text-base text-[#4E423B] font-semibold"> Full Name: </p>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                </div>
                <div className="w-1/3 h-full flex flex-col items-center m-2 gap-2"> 
                    <p className="text-base text-[#4E423B] font-semibold"> Price Offer (in Php):  </p>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                    <div className=" w-80 h-10 bg-[#EFEBE3] rounded"> </div>
                </div>
                <div className="w-1/3 h-full flex flex-col items-center m-2 gap-2"> 
                    <p className="text-base text-[#4E423B] font-semibold"> Your Decision: </p>
                    <div className="flex flex-row gap-4"> 
                        <div className="w-1/2 flex flex-col justify-center items-center gap-2"> 
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded hover:bg-[#905B40]"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            <button className="w-36 h-10 bg-[#8CB9BD] flex justify-center items-center rounded"> 
                            <FaCheck color="white" className="w-9 h-9 "/> </button>
                            
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-2"> 
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>
                            <button className="w-36 h-10 bg-[#B67352] flex justify-center items-center rounded"> 
                            <ImCross color="white" className="w-8 h-8 "/> </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
} 
export default page;
