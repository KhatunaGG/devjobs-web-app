import FilterSection from "./components/FilterSection";
import HomeContainer from "./components/HomeContainer";


export default function Home() {
  return (
    <main className="main-home w-full relative ">
      <div className="w-full absolute top-0 left-0 z-10">
        <FilterSection />
        <section
          className="container w-[87.2%] md:w-[89.71%] lg:w-[77.03%] mx-auto mt-[32px] md:mt-[45px] lg:mt-[80px] 
         "
        >
          <HomeContainer />
        </section>
      </div>
    </main>
  );
}
