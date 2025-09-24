"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { AlertTriangleIcon, ArrowLeftIcon } from "lucide-react";

import { WidgetHeader } from "../components/widget-header";
import {
  contactSessionIdAtomFamily,
  errorMessageAtom,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";
import { WidgetFooter } from "../components/widget-footer";
import { Button } from "@workspace/ui/components/button";
import { usePaginatedQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export const WidgetInboxScreen = () => {
  const setScreen = useSetAtom(screenAtom);

  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const conversations = usePaginatedQuery(
    api.public.conversations.getMany,
    contactSessionId ? { contactSessionId } : "skip",
    { initialNumItems: 10 }
  );

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
        {JSON.stringify(conversations)}
      </div>
      <WidgetFooter />
    </>
  );
};
