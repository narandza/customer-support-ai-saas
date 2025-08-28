"use client";

import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";
export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p className="">apps/widget</p>
      <Button onClick={() => startCall()}>Start call</Button>
      <Button onClick={() => endCall()}>End call</Button>

      <p>isConnected: {`${isConnected}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>

      <p>{JSON.stringify(transcript)}</p>
    </div>
  );
}
