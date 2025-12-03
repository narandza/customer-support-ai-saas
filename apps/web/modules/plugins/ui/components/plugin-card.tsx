import { ArrowLeftRightIcon, type LucideIcon } from "lucide-react";
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
    <div className="h-fit w-full rounded-lg border bg-background p-8">
      <div className="mb-6 flex items-center justify-center gap-6">
        <div className="flex flex-col items-center">
          {/* TODO: add to constant */}
          <Image
            alt={serviceName}
            className="rounded object-contain"
            height={40}
            width={40}
            src={serviceImage}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowLeftRightIcon />
        </div>

        <div className="flex flex-col items-center">
          {/* TODO: add to constant */}
          <Image
            alt="Platform"
            className=" object-contain"
            height={40}
            width={40}
            src="/logo.svg"
          />
        </div>
      </div>
    </div>
  );
};
