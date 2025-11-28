const StarIcon = ({ className = "", color = "currentColor", ...props }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M8.00044 12.1733L3.29814 14.8054L4.34836 9.51985L0.391968 5.86112L5.74333 5.22662L8.00044 0.333252L10.2575 5.22662L15.6088 5.86112L11.6525 9.51985L12.7027 14.8054L8.00044 12.1733Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;
