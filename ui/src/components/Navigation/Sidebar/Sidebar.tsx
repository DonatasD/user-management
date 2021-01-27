import React, { FC } from "react";
import {
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import { AppLink } from "../../../types/types";
import { getRouteIcon, getRouteName } from "../../../utils/route.utils";
import { useHistory } from "react-router-dom";
import { sidebarWidth } from "./sidebar.constants";

interface SidebarProps {
  open?: boolean;
  onMenuIconClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: sidebarWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

const Sidebar: FC<SidebarProps> = ({ open = false, onMenuIconClick }) => {
  const sidebarLinks = [AppLink.Users, AppLink.Permissions];
  const classes = useStyles();
  const history = useHistory();
  return (
    <Drawer
      className={classes.drawer}
      open={open}
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onMenuIconClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {sidebarLinks.map((link, index) => {
          const Icon = getRouteIcon(link);
          const onClickHandler = () => {
            history.push(link);
          };
          return (
            <ListItem button key={index} onClick={onClickHandler}>
              <ListItemIcon>{Icon !== null && <Icon />}</ListItemIcon>
              <ListItemText primary={getRouteName(link)} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
