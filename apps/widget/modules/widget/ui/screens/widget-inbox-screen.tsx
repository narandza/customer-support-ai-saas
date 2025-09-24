"use client";

import { useAtomValue } from "jotai";
import { AlertTriangleIcon } from "lucide-react";

import { WidgetHeader } from "../components/widget-header";
import { errorMessageAtom } from "../../atoms/widget-atoms";

export const WidgetInboxScreen = () => {
  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi there! 👋</p>
          <p className=" text-lg">Let&apos;s get you started</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col  justify-center gap-y-4 p-4 ">
        <p className="tex-sm">Inbox</p>
      </div>
    </>
  );
};
