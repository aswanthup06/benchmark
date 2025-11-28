const LandmarkIcon = ({
  className = "",
  strokeWidth = 1.25,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
      <path d="M14 5L17 2L20 5" />
      <path d="M14 10L17 7L20 10" />
      <path d="M17 14V2" />
      <path d="M17 14H7L2 22H22L17 14Z" />
      <path d="M8 14V22" />
      <path d="M9 14L14 22" />
    </svg>
  );
};

export default LandmarkIcon;
