const Hero = () => {
  return (<>
    <section className="relative min-h-screen flex items-center">
      
      {/* Blurred Background 
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[0px] opacity-100"
        style={{ backgroundImage: "url('/infibg2.png')" }}
      />
      */}
      
      
      <img src="./public/infinity.jpg" alt="Bg" className="z-[-99] absolute top-[465px] left-[-212px] rotate-[-34deg] scale-[1.7] saturate-0"/>
      <img src="./public/infinity.jpg" alt="Bg" className="z-[-99] absolute top-[275px] right-[-250px] rotate-[34deg] scale-[1.85] saturate-0 "/>


   <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#eeeeee] font-inter font-thin z-20">
        Designed by <span className="font-semibold">Hadi Maliyakkal.</span>
      </p>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center w-full">
        
        {/* Text Content */}
        <div className="relative text-center md:text-center md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight">
            Escape <span className="font-semibold">reality.</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight">
            Embrace <span className="font-semibold"> infinity.</span>
          </h1>

          <div className="mt-8 flex justify-center md:justify-center space-x-4">
            <a
              href="/get-started"
              className="px-6 py-2 text-sm bg-[#5050501A] border border-white/30 text-white rounded-md hover:bg-white hover:text-black transition-all duration-500"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="px-6 py-2 text-sm bg-white text-black border border-white rounded-md hover:bg-[#5050501A] hover:text-white hover:border-white/30 transition-all duration-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
