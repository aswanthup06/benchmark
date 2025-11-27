const ArrowIcon = ({
  className = "",
  strokeWidth = 1.25,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6.75 13.5L11.25 9L6.75 4.5" />
    </svg>
  );
};

export default ArrowIcon;
