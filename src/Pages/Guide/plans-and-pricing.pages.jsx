import Footer from "../../Components/Footer/footer.component";
import Crown from "../../Assets/images/crown-image.jpeg";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
import Nav from "../../Components/NavBar/nav.component";
export default function PlansAndPricingIndividual(props) {
  props.setShowNavBar(true);
  return (
    <>
      <Nav></Nav>
      <div className="wrapper my-10 ">
        <div className=" flex w-full my-6 gap-6 md:flex-row sm:flex-col">
          <div className=" md:w-4/12 sm:12/12 flex flex-col">
            <h3 className="text-3xl font-semibold  ">
              Headline for both plans
            </h3>
            <h3 className="text-xl">
              Description of these plans – who are they best suited for? Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
              molestie massa. Ut mollis neque tellus, in tristique libero auctor
              sit amet. Ut at tincidunt tellus, sodales ullamcorper turpis.
              Donec fermentum ligula et vestibulum vulputate.
            </h3>
          </div>
          <div className="shadow-xl md:w-4/12 sm:12/12 flex relative flex-col justify-around text-center h-auto rounded-xl ">
            <h3 className="text-3xl font-semibold text-[#69C080] ">
              Name of plan
            </h3>
            <h3 className="text-xl py-3">Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            <hr></hr>
            <div className="p-1 w-fit my-3 flex mx-auto gap-2 rounded-md  bg-[#FFBE24] ">
              <IconPack4 fill="#000000" className="h-5 my-auto" />
              <h4 className=" text-md  "> PRO</h4>{" "}
            </div>
            <div className="bg-[#f2f2f2] flex-col ">
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md  ">GHS</h3>

                <h3 className="text-2xl line-through ">25.00</h3>
                <h3 className="text-md">SAVE 40%</h3>
              </div>
              <div className="flex justify-center items-end p-2 font-semibold    gap-2  ">
                <h3 className="text-md">GHS</h3>

                <h3 className="text-3xl  ">20.00</h3>
              </div>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>

          <div className="shadow-xl md:w-4/12 sm:12/12 flex relative  flex-col justify-around text-center h-auto rounded-xl ">
        
            <h3 className="text-3xl font-semibold text-[#69C080] ">
              Name of plan
            </h3>
            <h3 className="text-xl py-3">Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            <hr></hr>
            <div className="p-1 w-fit my-3 flex mx-auto gap-2 rounded-md  bg-[#FFBE24] ">
              <IconPack4 fill="#000000" className="h-5 my-auto" />
              <h4 className=" text-md  "> PRO</h4>{" "}
            </div>
            <div className="bg-[#f2f2f2] flex-col ">
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md  ">GHS</h3>

                <h3 className="text-2xl line-through ">300.00</h3>
                <h3 className="text-md">SAVE 40%</h3>
              </div>
              <div className="flex justify-center items-end p-2 font-semibold   gap-2  ">
                <h3 className="text-md">GHS</h3>

                <h3 className="text-3xl  ">180.00</h3>
              </div>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
