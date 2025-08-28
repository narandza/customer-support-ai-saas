"use client";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  return (
    <main className="flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      Widget View {organizationId}
    </main>
  );
};
