import AsyncComponent from "./AsyncComponent";

function DataList({
  isLoading,
  isError,
  error,
  data,
  keyExtractor,
  RenderEach,
}) {
  return (
    <AsyncComponent isLoading={isLoading} isError={isError} error={error}>
      {data ? (
        data.length ? (
          data.map((item, index) => (
            <RenderEach
              key={keyExtractor ? keyExtractor(item) : item._id || index}
              item={item}
            />
          ))
        ) : (
          <div>List is empty</div>
        )
      ) : null}
    </AsyncComponent>
  );
}

export default DataList;
