import { techIcons } from "@/content/techIcons";

export function TechIcon({
  name,
  size = 32,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const icon = techIcons[name];
  if (!icon) return null;

  return (
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={icon.color}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
