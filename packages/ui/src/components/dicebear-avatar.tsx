"use client";

import { useMemo } from "react";
import { cn } from "@workspace/ui/lib/utils";
import { glass } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Avatar, AvatarImage } from "@workspace/ui/components/avatar";

interface DicebearAvatarProps {
  seed: string;
  size?: number;
  className?: string;
  badgeClassName?: string;
  imageUrl?: string;
  badgeImageUrl?: string;
}

export const DicebearAvatar = ({
  seed,
  size = 32,
  className,
  imageUrl,
  badgeClassName,
  badgeImageUrl,
}: DicebearAvatarProps) => {
  const avatarSrc = useMemo(() => {
    if (imageUrl) {
      return imageUrl;
    }

    const avatar = createAvatar(glass, {
      seed: seed.toLocaleLowerCase().trim(),
      size,
    });

    return avatar.toDataUri();
  }, [seed, size]);

  const badgeSize = Math.round(size * 0.5); // TODO: Magic number

  return (
    <div
      className="relative inline-block"
      style={{
        width: size,
        height: size,
      }}
    >
      <Avatar
        className={cn("border", className)}
        style={{
          width: size,
          height: size,
        }}
      >
        <AvatarImage alt="Image" src={avatarSrc} />
      </Avatar>
      {badgeImageUrl && (
        <div
          className={cn(
            "absolute right-0 bottom-0 flex items-center justify-center overflow-hidden rounded-full border-2 border-background bg-background",
            badgeClassName
          )}
          style={{
            width: size,
            height: size,
            transform: "translate(15%, 15%",
          }}
        >
          <img
            alt="Badge"
            className="h-full w-full object-cover"
            height={badgeSize}
            src={badgeImageUrl}
            width={badgeSize}
          />
        </div>
      )}
    </div>
  );
};
