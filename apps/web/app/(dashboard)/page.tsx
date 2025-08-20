"use client";

import { useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { OrganizationSwitcher, SignIn, UserButton } from "@clerk/nextjs";

export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p className="">apps/web</p>
        <OrganizationSwitcher hidePersonal />
        <Button onClick={() => addUser()}>Add user</Button>
        <div className="">
          <UserButton />
        </div>
      </div>
    </>
  );
}
