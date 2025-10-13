import { Doc } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { Hint } from "@workspace/ui/components/hint";
import { CheckIcon } from "lucide-react";

export const ConversationStatusButton = ({
  status,
  onClick,
}: {
  status: Doc<"conversations">["status"];
  onClick: () => void;
}) => {
  if (status === "resolved") {
    return (
      <Hint text="Mark as unresolved">
        <Button onClick={onClick} size="sm" variant="tertiary">
          <CheckIcon />
          Resolved
        </Button>
      </Hint>
    );
  }
};
