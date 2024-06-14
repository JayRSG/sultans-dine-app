export default function NotificationCount({ number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <circle
        cx="7"
        cy="7"
        r="7"
        fill="#FFE5DC"
      />

      <text
        x="3"
        y="10"
        fill="red"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Inter"
      >
        {parseInt(number)}
      </text>
    </svg>
  );
}
