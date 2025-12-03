"use client";

import { PluginCard } from "../components/plugin-card";

export const VapiView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-muted p-8">
      <div className="mx-auto w-full max-w-screen-md">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl ">Vapi Plugin</h1>
          <p className="text-muted-foreground">
            Connect Vapi to enable AI voice calls and phone support
          </p>
        </div>

        <div className="mt-8">
          <PluginCard serviceName="Vapi" serviceImage="/vapi.jpg" />
        </div>
      </div>
    </div>
  );
};
