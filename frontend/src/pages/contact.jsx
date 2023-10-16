import SocialBar from "../components/socialbar";

const Contact = ({tea, hub, res, lin, up}) => {
    return (
      <div className="items-center text-center pt-3 border-red-500">
         <h1 className="font-bold leading-tight text-3xl mt-0 mb-4">Check me out here:</h1>

         <div className="flex flex-row w-full gap-3 justify-center">
            <SocialBar contact tea={tea} hub={hub} res={res} lin={lin} up={up} />
         </div>
      </div>

      
    );
   };
   
   export default Contact;