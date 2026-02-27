import prisma from "@/lib/db";

const HomePage = async () => {
  const users = await prisma.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
};

export default HomePage;
