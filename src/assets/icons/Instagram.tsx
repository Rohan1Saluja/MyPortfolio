interface Props {
  className?: string;
  stroke?: string;
}

const Instagram: React.FC<Props> = ({
  className,
  stroke = "stroke-accent hover:stroke-accent-500",
}) => {
  return (
    <svg
      className={`hover:cursor-pointer ${stroke} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.75 -0.75 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      id="Instagram--Streamline-Feather"
      height="24"
      width="24"
    >
      <desc>Instagram Streamline Icon: https://streamlinehq.com</desc>
      <title>Instagram</title>
      <path
        d="M6.5625 1.875h9.375s4.6875 0 4.6875 4.6875v9.375s0 4.6875 -4.6875 4.6875H6.5625s-4.6875 0 -4.6875 -4.6875V6.5625s0 -4.6875 4.6875 -4.6875"
        strokeWidth="1.5"
      ></path>
      <path
        d="M15 10.659374999999999A3.75 3.75 0 1 1 11.840625000000001 7.5 3.75 3.75 0 0 1 15 10.659374999999999z"
        strokeWidth="1.5"
      ></path>
      <path d="m16.40625 6.09375 0.009375 0" strokeWidth="1.5"></path>
    </svg>
  );
};

export default Instagram;
