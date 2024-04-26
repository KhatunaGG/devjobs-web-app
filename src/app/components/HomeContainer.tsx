"use client";
import Link from "next/link";
import { DataType } from "../Interface";
import JobCard from "./JobCard";
import { useContext } from "react";
import { GlobalContext } from "../Context";


const HomeContainer = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context;

  return (
    <>
      <div
        className="w-full bg-green-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[30px]
      items-center bg-transparent  mb-[104px]"
      >
        {data.map((item, i) => (
          <Link href={`/job/${item.id}`} key={i}>
            <JobCard
              item={item}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomeContainer;
