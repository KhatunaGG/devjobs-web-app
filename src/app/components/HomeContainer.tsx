"use client";
import Link from "next/link";
import JobCard from "./JobCard";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { DataType } from "../Interface";



const HomeContainer = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, setArrLength, arrLangth } = context;


  return (
    <>
      <div
        className="w-full bg-green-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[30px]
      items-center bg-transparent "
      >
        {data.slice(0, arrLangth).map((item: DataType, i: number) => (
          <Link href={`/job/${item.id.toString()}`} key={i}>
            <JobCard item={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomeContainer;


