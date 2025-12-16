import CardDemo from "../components/CardDemo";

const Projects = () => {
  return (
    <>
      <section className=" overflow-hidden w-full min-h-screen flex-col flex  items-center pt-28 pb-5 font-inter">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="relative w-full h-full">
            <img
              src="/infinity.png"
              alt="Bg"
              className="absolute rotate-[-34deg] saturate-0 
              md:top-[445px] md:left-[-120px] md:scale-[1.5] 
              top-[465px] left-[-212px] scale-[1] opacity-90"
            />

            <img
              src="/infinity.png"
              alt="Bg"
              className="absolute saturate-0 rotate-[34deg]
              md:top-[275px] md:right-[-80px] md:scale-[1.7] 
              top-[185px] right-[-250px] scale-[1.3] opacity-90"
            />

            <img
              src="/infinity.png"
              alt="Bg"
              className="absolute rotate-[15deg] saturate-0 
    md:top-[1030px] md:left-[560px] md:scale-[1.3] 
    top-[1005px] left-[-5px] scale-[1] opacity-90"
            />
          </div>
        </div>

        <h1
          className="text-white text-4xl font-bold mb-16
        "
        >
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6">
          <CardDemo
            to="#"
            title="RouteTrax"
            className={"bg-[#5050501a]"}
            description="Bus tracking website for college students"
            icon={
              <img
                src="/RTrax.svg"
                alt="Bus tracking project"
                className="h-24 w-24 "
              />
            }
          />
          <CardDemo
            to="#"
            title="R.A.P.P.T.R."
            className={"bg-[#5050501a]"}
            description="Ransomware prediction & prevention"
            icon={
              <img
                src="/Raptor.svg"
                alt="Ransomware project"
                className="h-20 w-20 "
              />
            }
          />
          <CardDemo
            to="#"
            title="SoulScript Weddings"
            className={"bg-[#5050501a]"}
            description="Professional wedding photography website"
            icon={
              <img
                src="/soulscript.svg"
                alt="soulscript weddings"
                className="h-16 w-16 "
              />
            }
          />
          {/*card ends here*/}
          <CardDemo
            to="#"
            title="Razack's Homepathy"
            className={"bg-[#5050501a]"}
            description="Professional homeopathy clinic website"
            icon={
              <img
                src="/Razack.svg"
                alt="Razack homeopathy"
                className="h-20 w-20 "
              />
            }
          />
          {/*card ends here*/}
          <CardDemo
            to="#"
            title="WornOut"
            className={"bg-[#5050501a]"}
            description="Online thrift store app"
            icon={
              <img
                src="/Wornout.svg"
                alt="Worn out app"
                className="h-24 w-24 "
              />
            }
          />
          {/*card ends here*/}
          <CardDemo
            to="#"
            title="Grela.in"
            className={"bg-[#5050501a]"}
            description="Professional landcaping service website"
            icon={
              <img
                src="/Grela.svg"
                alt="Grela website"
                className="h-24 w-24 "
              />
            }
          />
          {/*card ends here*/}

          <CardDemo
            to="#"
            title="SiApp"
            className={"bg-[#5050501a]"}
            description="Self improvement app for personal use"
            icon={
              <img
                src="/siapp.svg"
                alt="Si app"
                className="h-20 w-20  "
              />
            }
          />
          {/*card ends here*/}

        </div>
      </section>
    </>
  );
};

export default Projects;

//https://www.notion.so/SoulScript-Weddings-A-Wedding-Photography-23e92f31d82780daa4afc7b71af1c6c8?source=copy_link
//https://hm69.notion.site/UI-UX-2cb92f31d8278034bae0d83c92663784
//https://routetrax.onrender.com/
//grela.in
//razack.com

//use a tag for external links and Link tag for internal navigation.