"use client";

import { api } from "@workspace/backend/_generated/api";
import { Id } from "@workspace/backend/_generated/dataModel";
import { useQuery } from "convex/react";

interface ConversationIdViewProps {
  conversationId: Id<"conversations">;
}

export const ConversationIdView = ({
  conversationId,
}: ConversationIdViewProps) => {
  const conversation = useQuery(api.private.conversations.getOne, {
    conversationId,
  });
  return <div className="">Conversation ID view: {conversationId}</div>;
};
