import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GradientText({
  children,
  className = "",
  colors = ["#ffffff", "#a556fb", "#4922e5"],
  animationSpeed = 8,
  showBorder = false,
  stagger = 50,
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onAnimationComplete,
  enableSplitAnimation = false,
}) {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  const gradientStyle = {
    backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  useEffect(() => {
    if (
      !enableSplitAnimation ||
      typeof window === "undefined" ||
      !ref.current ||
      !children
    ) {
      return;
    }

    const el = ref.current.querySelector(".gradient-text-content");
    if (!el) return;

    animationCompletedRef.current = false;

    // Simple text splitting without external library
    const text = el.textContent;
    let targets = [];

    if (splitType === "chars") {
      el.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span class="char" data-char="${i}">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");
      targets = el.querySelectorAll(".char");
    } else if (splitType === "words") {
      el.innerHTML = text
        .split(" ")
        .map((word, i) => `<span class="word" data-word="${i}">${word}</span>`)
        .join(" ");
      targets = el.querySelectorAll(".word");
    } else {
      // Default to chars
      el.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span class="char" data-char="${i}">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");
      targets = el.querySelectorAll(".char");
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for split animation");
      return;
    }

    // Apply gradient styles to each split element
    targets.forEach((target) => {
      target.style.display = "inline-block";
      target.style.willChange = "transform, opacity";
      target.style.backgroundImage = gradientStyle.backgroundImage;
      target.style.backgroundClip = "text";
      target.style.webkitBackgroundClip = "text";
      target.style.backgroundSize = "300% 100%";
      target.style.color = "transparent";
      target.style.animation = `gradientMove ${animationSpeed}s linear infinite`;
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
    const sign =
      marginValue < 0
        ? `-=${Math.abs(marginValue)}${marginUnit}`
        : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      delay,
      ease,
      stagger: stagger / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
      // Restore original text
      if (el) {
        el.innerHTML = text;
      }
    };
  }, [
    children,
    stagger,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onAnimationComplete,
    enableSplitAnimation,
    gradientStyle.backgroundImage,
    animationSpeed,
  ]);

  return (
    <>
      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-border {
          animation: gradientMove 8s linear infinite;
        }
      `}</style>

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] transition-shadow duration-500 cursor-pointer ${className}`}
        style={{ textAlign }}
      >
        {showBorder && (
          <div
            className="absolute inset-0 gradient-border z-0 pointer-events-none"
            style={{
              ...gradientStyle,
              backgroundSize: "300% 100%",
            }}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
        <div
          className={`gradient-text-content inline-block relative z-10 ${
            enableSplitAnimation
              ? "split-parent overflow-hidden whitespace-normal"
              : "text-transparent bg-clip-text"
          }`}
          style={
            !enableSplitAnimation
              ? {
                  ...gradientStyle,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  backgroundSize: "300% 100%",
                  animation: `gradientMove ${animationSpeed}s linear infinite`,
                }
              : {}
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}
