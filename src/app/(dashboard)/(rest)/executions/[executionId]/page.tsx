import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const ExecutionIdPage = async ({ params }: PageProps) => {
  const { executionId } = await params;
  await requireAuth();
  return <div>executionIdPage: {executionId}</div>;
};

export default ExecutionIdPage;
