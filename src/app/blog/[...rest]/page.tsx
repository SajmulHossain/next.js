const RestPage = async ({
  params,
}: {
  params: Promise<{ rest: string[] }>;
}) => {
  const { rest } = await params;
  return (
    <section>
      <h1>This is RestPage component</h1>
      <p>URL: {rest.join("/")}</p>
    </section>
  );
};

export default RestPage;
