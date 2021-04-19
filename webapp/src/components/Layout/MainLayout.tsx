import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { sidebarWidth } from "../Navigation/Sidebar";
import clsx from "clsx";

interface MainLayoutProps {
  sidebarOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
      padding: theme.spacing(2),
    },
    shiftContent: {
      marginLeft: sidebarWidth,
    },
  })
);

const MainLayout: FC<MainLayoutProps> = ({ sidebarOpen, children }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.content, { [classes.shiftContent]: sidebarOpen })}
    >
      {children}
    </div>
  );
};

export default MainLayout;
