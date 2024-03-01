import { useState } from "react";
import { createContext, useContext } from "react";

export const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export const SidebarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
        isOrder,
        setIsOrder,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
