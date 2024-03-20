type SemaphoreProps = {
  angle1: number;
  angle2: number;
  size?: number;
};
export function Semaphore({ angle1, angle2, size = 100 }: SemaphoreProps) {
  // Define the central point and length of the flags
  const centerX = size / 2;
  const centerY = size / 2;
  const flagLength = size * 0.4;

  // Function to calculate the end coordinates of each flag
  function calculateCoordinates(angle: number) {
    angle = angle - 90; // each direction is 45 degrees apart
    const radian = (angle * Math.PI) / 180; // convert to radians for Math functions
    return {
      x: centerX + flagLength * Math.cos(radian),
      y: centerY + flagLength * Math.sin(radian),
    };
  }

  const end1 = calculateCoordinates(angle1);
  const end2 = calculateCoordinates(angle2);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={centerX}
        cy={centerY}
        r={size * 0.05}
        fill="hsl(var(--primary))"
      />
      <line
        x1={centerX}
        y1={centerY}
        x2={end1.x}
        y2={end1.y}
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      <line
        x1={centerX}
        y1={centerY}
        x2={end2.x}
        y2={end2.y}
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
    </svg>
  );
}
