"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { AlertTriangleIcon, ArrowLeftIcon } from "lucide-react";

import { WidgetHeader } from "../components/widget-header";
import { errorMessageAtom, screenAtom } from "../../atoms/widget-atoms";
import { WidgetFooter } from "../components/widget-footer";
import { Button } from "@workspace/ui/components/button";

export const WidgetInboxScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  return (
    <>
      <WidgetHeader>
        <div className="flex items-center gap-x-2">
          <Button
            variant="transparent"
            size="icon"
            onClick={() => setScreen("selection")}
          >
            <ArrowLeftIcon />
          </Button>
          <p>Inbox</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col  justify-center gap-y-4 p-4 ">
        <p className="tex-sm">Inbox</p>
      </div>
      <WidgetFooter />
    </>
  );
};
