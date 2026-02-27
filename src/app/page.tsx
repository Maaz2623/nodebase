import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import React from "react";

const HomePage = async () => {
  await requireAuth();

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};

export default HomePage;
