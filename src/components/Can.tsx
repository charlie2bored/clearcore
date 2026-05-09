type CanProps = {
  /** Tailwind color classes for the can body gradient stops, e.g. "from-red to-light-brown" */
  gradient?: string;
  /** Accent splash color */
  splash?: string;
  /** Display label on the can */
  label?: string;
  /** Small flavor text */
  flavor?: string;
  /** Optional className passthrough for sizing/positioning */
  className?: string;
};

/**
 * Brand-neutral SVG placeholder for a slim 12oz beverage can.
 * Designed to be tinted via the `gradient` prop and slotted into
 * any composition where a stylised product visual is needed.
 */
export default function Can({
  gradient = "from-red to-light-brown",
  splash = "#a02128",
  label = "core",
  flavor = "ORIGINAL",
  className = "",
}: CanProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 220 480"
        className="w-full h-full drop-shadow-2xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`body-${label}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* can body */}
        <rect
          x="14"
          y="40"
          width="192"
          height="410"
          rx="20"
          className={`bg-gradient-to-r ${gradient}`}
          fill={`url(#body-${label})`}
        />

        {/* drip splash at top */}
        <path
          d="M14 80 Q 30 60 50 80 T 90 80 T 130 75 T 170 85 T 206 78 L 206 130 Q 180 110 160 130 T 120 125 T 80 135 T 40 120 T 14 130 Z"
          fill={splash}
          opacity="0.85"
        />
        <path
          d="M14 130 Q 40 120 60 140 T 100 138 T 140 145 T 180 135 T 206 142 L 206 160 L 14 160 Z"
          fill={splash}
          opacity="0.55"
        />

        {/* can lid */}
        <ellipse
          cx="110"
          cy="40"
          rx="96"
          ry="14"
          fill="#cdcdd0"
        />
        <ellipse cx="110" cy="38" rx="92" ry="10" fill="#e8e8eb" />

        {/* bottom shadow */}
        <ellipse
          cx="110"
          cy="450"
          rx="96"
          ry="10"
          fill="#000"
          opacity="0.18"
        />

        {/* label */}
        <text
          x="110"
          y="240"
          textAnchor="middle"
          fontFamily="Pacifico, cursive"
          fontSize="46"
          fill="#faeade"
        >
          {label}
        </text>
        <rect
          x="50"
          y="260"
          width="120"
          height="22"
          rx="4"
          fill="#faeade"
          opacity="0.95"
        />
        <text
          x="110"
          y="276"
          textAnchor="middle"
          fontFamily="Antonio, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill={splash}
          letterSpacing="1.5"
        >
          CAFFEINATED
        </text>
        <text
          x="110"
          y="320"
          textAnchor="middle"
          fontFamily="Antonio, sans-serif"
          fontSize="32"
          fontWeight="700"
          fill="#faeade"
          letterSpacing="2"
        >
          {flavor}
        </text>

        {/* protein badge */}
        <circle cx="110" cy="380" r="26" fill="#faeade" />
        <text
          x="110"
          y="378"
          textAnchor="middle"
          fontFamily="Antonio, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill={splash}
        >
          20g
        </text>
        <text
          x="110"
          y="394"
          textAnchor="middle"
          fontFamily="Antonio, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={splash}
          letterSpacing="1"
        >
          PROTEIN
        </text>
      </svg>
    </div>
  );
}
