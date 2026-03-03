import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const WorkflowIdPage = async ({ params }: PageProps) => {
  const { workflowId } = await params;
  await requireAuth();
  return <div>WorkflowIdPage: {workflowId}</div>;
};

export default WorkflowIdPage;
