export function LifeBar(props) {
  const currentHealth = (props.current / props.max) * 904;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0.0 0.0 960.0 56.0"
        fill="none"
        stroke="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
      >
        <clipPath id="p.0">
          <path
            d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z"
            clipRule="nonzero"
          />
        </clipPath>
        <g clipPath="url(#p.0)">
          <path
            fill="#000000"
            d={`m0 0l960 0l0 56l-910 0z`}
            fillRule="evenodd"
          />
          <path
            fill="#55aa55"
            d={`m0 0l${currentHealth + 48} 0l0 48l-${currentHealth} 0z`}
            fillRule="evenodd"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="4.0"
            strokeLinejoin="round"
            strokeLinecap="butt"
            d={`m0 0l${currentHealth + 50} 0l0 50l-${currentHealth} 0z`}
            fillRule="evenodd"
          />
        </g>
      </svg>
    </>
  );
}
