import { createContext, useContext, useEffect, useState } from "react";

// Context
const LocalConfigContext = createContext({
  addItems: () => {},
  getItems: () => ({ mode: "light" }),
  isEmpty: () => true,
  removeItems: () => {},
  reset: () => {},
});

function LocalConfigProvider({ children }) {
  const [localConfig, setLocalConfig] = useState(
    JSON.parse(localStorage.getItem("localConfig") || "null") || {
      mode: "light",
    }
  );

  const addItems = (...configEntries) => {
    const extend = Object.fromEntries(configEntries);
    setLocalConfig((prev) => ({
      ...prev,
      ...extend,
    }));
  };

  const getItems = () => localConfig;

  const removeItems = (...configKeys) => {
    setLocalConfig((prev) => {
      Object.keys(prev).forEach((key) => {
        if (configKeys.includes(key)) {
          delete prev[key];
        }
      });
      return prev;
    });
  };

  const isEmpty = () => localConfig == null;

  const reset = () => {
    setLocalConfig({
      mode: "light",
    });
  };

  useEffect(() => {
    if (localConfig) {
      localStorage.setItem("localConfig", JSON.stringify(localConfig));
    } else {
      localStorage.removeItem("localConfig");
    }
  }, [localConfig]);

  return (
    <LocalConfigContext.Provider
      value={{
        addItems,
        getItems,
        removeItems,
        isEmpty,
        reset,
      }}
    >
      {children}
    </LocalConfigContext.Provider>
  );
}

export function useLocalConfig() {
  return useContext(LocalConfigContext);
}

export default LocalConfigProvider;
