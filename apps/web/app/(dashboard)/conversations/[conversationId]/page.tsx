const Page = async ({
  params,
}: {
  params: Promise<{
    conversationId: string;
  }>;
}) => {
  const { conversationId } = await params;
  return <div className="">Conversation Id: {conversationId}</div>;
};

export default Page;
