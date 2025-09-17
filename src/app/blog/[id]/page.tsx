const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <h1>This is blog details for id: {id}</h1>
    </div>
  );
};

export default BlogDetailsPage;
