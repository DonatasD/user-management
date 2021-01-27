import React, { FC } from "react";
import { Sidebar } from "./Sidebar";
import { NavigationHeader } from "./NavigationHeader";

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navigationHeadMenuClickHandler = () => {
    setSidebarOpen(true);
  };
  const sidebarMenuClickHandler = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <NavigationHeader
        sidebarOpen={sidebarOpen}
        onMenuIconClick={navigationHeadMenuClickHandler}
      />
      <Sidebar open={sidebarOpen} onMenuIconClick={sidebarMenuClickHandler} />
    </div>
  );
};

export default Navigation;
