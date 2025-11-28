const CalendarIcon = ({
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
      <path d="M15.2281 16.852L14.3051 16.469" />
      <path d="M15.2281 19.148L14.3051 19.531" />
      <path d="M16 2V6" />
      <path d="M16.47 14.305L16.852 15.228" />
      <path d="M16.852 20.772L16.469 21.696" />
      <path d="M19.1479 15.228L19.5309 14.305" />
      <path d="M19.5299 21.696L19.1479 20.772" />
      <path d="M20.772 16.852L21.696 16.469" />
      <path d="M20.772 19.148L21.696 19.531" />
      <path d="M21 10.592V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H11" />
      <path d="M3 10H21" />
      <path d="M8 2V6" />
      <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" />
    </svg>
  );
};

export default CalendarIcon;
