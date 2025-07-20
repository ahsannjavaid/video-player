import type { ComponentType, SVGProps } from "react";

interface ControlIconButtonProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;  // Accepts any Lucide icon
  onClick: () => void;
  title?: string;
}

export default function ControlIconButton({
  Icon,
  onClick,
  title = "",
}: ControlIconButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="media-button"
    >
      <Icon size={20} />
    </button>
  );
}
