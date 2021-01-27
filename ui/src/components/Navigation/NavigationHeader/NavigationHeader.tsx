import React, { FC } from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation } from "react-router-dom";
import { getRouteName } from "../../../utils/route.utils";
import { sidebarWidth } from "../Sidebar";
import clsx from "clsx";

interface NavigationHeaderProps {
  sidebarOpen: boolean;
  onMenuIconClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      display: "flex",
      flexDirection: "row",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    appBarShift: {
      marginLeft: sidebarWidth,
      width: `calc(100% - ${sidebarWidth}px)`,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavigationHeader: FC<NavigationHeaderProps> = ({
  onMenuIconClick,
  sidebarOpen,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const routeName = getRouteName(location.pathname);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={clsx(classes.appBar, { [classes.appBarShift]: sidebarOpen })}
      >
        {!sidebarOpen && (
          <IconButton
            onClick={onMenuIconClick}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {routeName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationHeader;
