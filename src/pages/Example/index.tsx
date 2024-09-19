import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function index() {
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerEffect({
      name: "fade",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.to(targets, {
          duration: 1,
          opacity: 0,
        });
      },
    });
    boxesRef.current.forEach((box) => {
      box.addEventListener("mouseenter", function () {
        gsap.effects.fade(box);
      });
    });
  }, []);

  return (
    <div>
      <div id="demo" className="inline-block h-full relative">
        <h2 className="text-2xl text-center">GSAP Effects Simple Demo</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "bg-green-500",
            "bg-purple-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-purple-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-purple-500",
          ].map((color, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el!)} // Assign each box to the array of refs
              className={`w-12 h-12 ${color}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
