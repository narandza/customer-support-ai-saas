"use client";

import { useAtomValue } from "jotai";

import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetChatScreen } from "../screens/widget-chat-screen";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";
import { WidgetErrorScreen } from "../screens/widget-error-screen";
import { WidgetLoadingScreen } from "../screens/widget-loading-screen";
import { WidgetSelectionScreen } from "../screens/widget-selection-screen";

interface Props {
  organizationId: string | null;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    error: <WidgetErrorScreen />,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO Voice</p>,
    inbox: <p>TODO Inbox</p>,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    contact: <p>TODO Contact</p>,
  };

  return (
    <main className="flex min-h-screen min-w-screen h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
