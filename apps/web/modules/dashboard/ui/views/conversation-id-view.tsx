"use client";

import { api } from "@workspace/backend/_generated/api";
import { Id } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { useQuery } from "convex/react";
import { MoreHorizontalIcon } from "lucide-react";

interface ConversationIdViewProps {
  conversationId: Id<"conversations">;
}

export const ConversationIdView = ({
  conversationId,
}: ConversationIdViewProps) => {
  const conversation = useQuery(api.private.conversations.getOne, {
    conversationId,
  });
  return (
    <div className="flex h-full flex-col bg-muted">
      <div className="flex items-center justify-between border-b bg-background p-2.5">
        <Button variant="ghost" size="sm">
          <MoreHorizontalIcon />
        </Button>
      </div>
    </div>
  );
};
