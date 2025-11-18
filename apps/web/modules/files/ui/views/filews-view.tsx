"use client";
import { Table } from "@workspace/ui/components/table";

import { useInfiniteScroll } from "@workspace/ui/hooks/use-infinite-scroll";
import { InfiniteScrollTrigger } from "@workspace/ui/components/infinite-scroll-trigger";
import { usePaginatedQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

import type { PublicFile } from "@workspace/backend/private/files";

export const FilesView = () => {
  const files = usePaginatedQuery(
    api.private.files.list,
    {},
    { initialNumItems: 10 }
  );

  return (
    <div className="flex min-h-screen flex-col bg-muted p-8">
      <div className="mx-auto w-full max-w-screen-md">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Upload and manage documents for your AI assistant
          </p>
        </div>
      </div>
      {JSON.stringify(files)}
    </div>
  );
};
