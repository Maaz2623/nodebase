import { requireAuth } from "@/lib/auth-utils";
import React from "react";

const HomePage = async () => {
  await requireAuth();

  return <div>Home Page</div>;
};

export default HomePage;
