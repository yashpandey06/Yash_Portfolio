export default function ReactLogo() {
  return (
    <div  className="w-fit">
      <svg
        width="100%"
        height="100%"
        fill="none"
        viewBox="-10.5 -9.45 21 18.9"
        className="text-sm me-0 w-12 h-12 text-link dark:text-link-dark flex origin-center transition-all ease-in-out "
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    </div>
  );
}
