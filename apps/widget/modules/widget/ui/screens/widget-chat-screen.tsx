"use client";

import { useAtomValue } from "jotai";

import { WidgetHeader } from "../components/widget-header";
import { Button } from "@workspace/ui/components/button";
import { ArrowLeftIcon } from "lucide-react";

export const WidgetChatScreen = () => {
  return (
    <>
      <WidgetHeader className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Button size="icon">
            <ArrowLeftIcon />
          </Button>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col gap-y-4 p-4 ">Chat Screen</div>
    </>
  );
};
