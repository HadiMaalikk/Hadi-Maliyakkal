import  { useState } from "react";

const ResumePage = () => {
  const pdfPath = "/Resume.pdf";
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-black text-[#eeeeee] flex flex-col items-center p-6 md:p-12 font-inter">
      {/* Heading */}
      <h1 className="text-4xl font-bold mt-20 text-center">Resume Add portfolio link to frontend works </h1>
      <div className="w-20 h-[1px] bg-[#eeeeee] rounded-full mt-3 mb-10"></div>

      {/* Buttons */}
      <div className="flex gap-2 mb-10">
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm bg-white text-black border border-white rounded-l-md hover:bg-[#5050501A] hover:text-[#eeeeee] hover:border-white/30 transition-all duration-500"
        >
          View
        </a>
        <a
          href={pdfPath}
          download
          className="px-6 py-2 text-sm bg-[#5050501A] border border-white/30 text-[#eeeeee] rounded-r-md hover:bg-white hover:text-black transition-all duration-500"
        >
          Download
        </a>
      </div>

      {/* Preview Container */}
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] rounded-xl overflow-hidden">
        {!loaded && (
          <div className="animate-pulse bg-[#222] h-[80vh] w-full rounded-xl"></div>
        )}
        <iframe
          src={pdfPath + "#toolbar=0"}
          className={`w-full h-[80vh] rounded-xl ${loaded ? 'opacity-100' : 'opacity-0'}`}
          title="Resume Preview"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </main>
  );
};

export default ResumePage;