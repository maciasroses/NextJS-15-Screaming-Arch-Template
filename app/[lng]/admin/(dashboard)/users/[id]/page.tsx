const AdminUserIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return <div>AdminUserIdPage: {id}</div>;
};

export default AdminUserIdPage;
