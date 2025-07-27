const ShinyText = ({ text, disabled, speed = 2, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-transparent bg-clip-text inline-block ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(181, 181, 181, 0.64) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(181, 181, 181, 0.64) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        animation: disabled
          ? "none"
          : `shine ${animationDuration} infinite linear`,
      }}
    >
      {text}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShinyText;
