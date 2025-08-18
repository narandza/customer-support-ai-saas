"use client";

import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { SignIn, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p className="">apps/web</p>
          <Button onClick={() => addUser()}>Add user</Button>
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
          <div className="">
            <UserButton />
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        Must be signed in
        <SignIn />
      </Unauthenticated>
    </>
  );
}
