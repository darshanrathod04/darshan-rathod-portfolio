import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ScrollCamera({ children }: Props) {
  // No zoom, no tilt, no blur
  return <>{children}</>;
}