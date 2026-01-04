import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "sonner";

type SidebarState = {
  isOpen: boolean;
  onShow: () => void;
  onHide: () => void;
  toggle: () => void;
};

type AppContextType = {
  sidebar: SidebarState;
  showToast: {
    success: (message: string, description?: string) => void;
    error: (message: string, description?: string) => void;
    info: (message: string, description?: string) => void;
  };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const hideSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );

  const showToast = {
    success: (message: string, description?: string) =>
      toast.success(message, { description }),
    error: (message: string, description?: string) =>
      toast.error(message, { description }),
    info: (message: string, description?: string) =>
      toast.info(message, { description }),
  };

  const value: AppContextType = {
    sidebar: {
      isOpen: isSidebarOpen,
      onShow: showSidebar,
      onHide: hideSidebar,
      toggle: toggleSidebar,
    },
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
