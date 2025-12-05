const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[0px] opacity-100"
        style={{ backgroundImage: "url('/infibg2.png')" }}
      />

   <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#eeeeee] font-inter font-light z-20">
        Designed by Hadi Maliyakkal.
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
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
