function AsyncComponent({ isLoading, isError, error, children }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occured. Reason: {error.message}</div>;
  }

  return children;
}

export default AsyncComponent;
