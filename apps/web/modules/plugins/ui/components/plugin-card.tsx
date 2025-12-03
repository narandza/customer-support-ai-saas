import { type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";

export interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface PluginCardProps {
  isDisabled: boolean;
  serviceName: string;
  serviceImage: string;
  features: Feature[];
  onSubmit: () => void;
}

export const PluginCard = ({
  isDisabled,
  serviceImage,
  serviceName,
  features,
  onSubmit,
}: PluginCardProps) => {
  return (
    <div className="h-fit w-full rounded-lg border bg-background p-8"></div>
  );
};
