function useQueryHandler() {
  const handleSuccess = (data) => {
    console.log(data);
  };

  const handleError = (error, logoutFn) => {
    console.log(error);
  };

  return { handleSuccess, handleError };
}

export default useQueryHandler;
