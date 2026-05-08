"use server";

import { googleFormTriggerChannel } from "@/inngest/channels/google-form-trigger";
import { httpRequestChannel } from "@/inngest/channels/http-request";
import { manualTriggerChannel } from "@/inngest/channels/manual-trigger";
import { inngest } from "@/inngest/client";
import { getSubscriptionToken, type Realtime } from "@inngest/realtime";

export type GoogleFormTriggerToken = Realtime.Token<
  typeof googleFormTriggerChannel,
  ["status"]
>;

export async function fetchGoogleFormRealtimeToken(): Promise<GoogleFormTriggerToken> {
  const token = await getSubscriptionToken(inngest, {
    channel: googleFormTriggerChannel(),
    topics: ["status"],
  });

  return token;
}
