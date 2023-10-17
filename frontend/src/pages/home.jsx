import Headshot from "../components/headshot";
import Tagline from "../components/tagline";
import Rotato from "../components/rotato";

const Home = ({hs, fname, bio, headline, taglines}) => {
   return (
      <>
         <div className="flex flex-row">
            <Headshot headshot={hs} />
            <div className="flex flex-col grow">
               <div className="md:h-1/4 lg:h-1/4 xl:h-1/3 2xl:h-1/2">
                  <svg id="homeanim" viewbox="0 0 0 0" xmlns="http://www.w3.org/2000/svg" className="hidden md:block overflow-visible">
                     <text y="100" className="uppercase stroke-link fill-link text-link md:text-[90px] md:pt-24 lg:text-[110px] xl:text-[100px] 2xl:text-[80px]">
                        {headline}
                     </text>
                  </svg>
               </div>
               <p className="md:hidden font-bold text-5xl text-link uppercase text-center mb-4">Hi! I'm {fname}!</p>
               <Tagline taglines={taglines} />
            </div>
         </div>
         <div className="md:flex md:flex-row-reverse">
            <div className="w-full md:w-1/2 md:m-4">
               <div className="leading-8 text-left ml-4 md:mb-2 md:pb-20 md:text-3xl">
                  I am skilled in..
               </div>
               <Rotato />
            </div>

            <div className="m-4 mt-8 md:mt-4 md:w-1/2">
               {bio}
            </div>
         </div>
      </>
   );
};
   
export default Home;