import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      <button 
        className="bg-zinc-900 mt-10 p-4 rounded-xl text-white cursor-pointer hover:scale-[1.13] hover:text-zinc-400 transition-transform duration-300 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        Check Out My Resume
      </button>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          onMouseMove={handleMouseMove}
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50"
        >
          {/* Circular div with arrow pointing northeast ↗ */}
          {!isHoveringResume && (
            <div 
              className="absolute w-16 h-16 flex p-3 items-center justify-center bg-sky-50/50 text-black font-light rounded-full backdrop-blur-md pointer-events-none transition-transform duration-100 text-sm"
              style={{
                top: cursorPos.y - 48, 
                left: cursorPos.x - 48
              }}
            >
              <ArrowUpRight className="w-12 h-12 " />
            </div>
          )}

          {/* Resume Container */}
          <div 
            className="relative bg-transparent w-[70%] md:w-[50%] lg:w-[30%] h-[65%] md:h-[65%] lg:h-[80%] rounded-lg shadow-lg p-5 pointer-events-auto"
            onMouseEnter={() => setIsHoveringResume(true)}  // Hide circle on hover
            onMouseLeave={() => setIsHoveringResume(false)} // Show circle when leaving
          >
            <iframe 
              src="/Adam_Resume.pdf" 
              className="w-full h-full border-0 rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
