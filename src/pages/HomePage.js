
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./filter";

const HomePage = () => {

  const data=["level","message","resourceId","commit","timestamp","traceId","spanId",];
    const [Logs, setLogs] = useState();
    const [isfilter,setisfilter]= useState(false);
  
    const getAllData = async () => {
      try {
        const getPeople = await fetch(
          `${process.env.REACT_APP_BASE_URL}/getalllogs`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        const res = await getPeople.json();
        setLogs(res);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAllData();
    },[]);
    

  
    return (
      <>
      {
        isfilter &&
        (
          <Filter setisfilter={setisfilter}/>
        )
      }
        <section className="container px-4 mx-auto py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
               Assignment
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Log Ingestor and Query Interface
              </p>
            </div>
            {
              !isfilter &&(
                
               
              <div
               onClick={()=>(
                
                  setisfilter((pev)=>!pev)
                )}
                >
                <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                 Filter
                </button>
              </div>
              )
            }
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2  md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full  divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                      {
                        data.map((item,index)=>{
                          return (
                            <th key={index}
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                       {item}
                        </th>
                          )})}
      
                      </tr>
                    </thead>
  
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {Logs?.response.map((Log) => (
                        
                        <tr key={Log?.level}>

                          <td className="py-4  whitespace-nowrap">
                            <div className="flex items-center">
                              <div className=" dark:text-white pl-7 flex-shrink-0 h-10 w-10">
                              {Log?.level}
                              </div>
                              
                            </div>
                          </td>
                          <td className="  py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">
                            {Log?.message}
                            </div>
                          </td>
  
                          <td className=" py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {Log?.resourceId}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {Log?.commit}
                          </td>
                          <td className=" py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {Log?.timestamp}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {Log?.traceId}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {Log?.traceId}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default HomePage;