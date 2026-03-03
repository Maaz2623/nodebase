import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const CredentialIdPage = async ({ params }: PageProps) => {
  const { credentialId } = await params;
  await requireAuth();
  return <div>CredentialIdPage: {credentialId}</div>;
};

export default CredentialIdPage;
