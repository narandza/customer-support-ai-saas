"use client";

import { BotIcon, SettingsIcon, UnplugIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Tabs } from "@workspace/ui/components/tabs";
import { useState } from "react";
import Link from "next/link";

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
              <div className="">
                <CardTitle>Vapi Integration</CardTitle>
                <CardDescription>
                  Manage your phone numbers and AI assistants
                </CardDescription>
              </div>
            </div>

            <Button onClick={onDisconnect} size="sm" variant="destructive">
              <UnplugIcon /> Disconnect
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                <SettingsIcon className="size-6 text-muted-foreground" />
              </div>
              <div className="">
                <CardTitle>Widget Configuration</CardTitle>
                <CardDescription>
                  Set up voice calls for your char widget
                </CardDescription>
              </div>
            </div>
            <Button asChild>
              <Link href="/customization">
                <SettingsIcon /> Configure
              </Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
