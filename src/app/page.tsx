import Button from "./components/Button";
import FilterSection from "./components/FilterSection";
import HomeContainer from "./components/HomeContainer";
import Overlay from "./components/Overlay";

export default function Home() {
  return (
    <>
    <Overlay />
      <section className="container bg-transparent   mx-auto mt-[-15px] md:mt-[-33px] lg:mt-[-45px]  relative z-30">
        <FilterSection />
        <div
          className="container w-[87.2%]  md:w-[89.71%] lg:w-[77.03%] mx-auto mt-[32px] md:mt-[45px] lg:mt-[80px] 
         "
        >
          <HomeContainer />
        </div>
      </section>
      <div className="container w-[87.2%]  md:w-[89.71%] lg:w-[77.03%] mx-auto py-[25px] md:py-[23px] lg:py-[23px] mt-10 md:mt-[30px] lg:mt-[33px] flex items-center justify-center">
        <Button text='Load More' width='20%'  />
      </div>
    </>
  );
}
