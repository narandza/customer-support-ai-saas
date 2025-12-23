"use client";

import { BotIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import { Card, CardHeader } from "@workspace/ui/components/card";
import { Tabs } from "@workspace/ui/components/tabs";
import { useState } from "react";

interface VapiConnectedViewPros {
  onDisconnect: () => void;
}

export const VapiConnectedView = ({ onDisconnect }: VapiConnectedViewPros) => {
  const [activeTab, setActiveTab] = useState("phone-numbers");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* TODO: Add to constants */}
              <Image
                alt="Vapi"
                className="rounded-lg object-contain"
                height={48}
                width={48}
                src="/vapi.jpg"
              />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
