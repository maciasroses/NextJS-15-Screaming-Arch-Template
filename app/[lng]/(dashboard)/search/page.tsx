const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  return <div>Searching: {(await searchParams).q}</div>;
};

export default SearchPage;
