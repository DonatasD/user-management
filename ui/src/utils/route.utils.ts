import { AppLink } from "../types/types";
import { People, SvgIconComponent, Lock } from "@material-ui/icons";

const routeNames: { [key: string]: string } = {
  [AppLink.Home]: "Home",
  [AppLink.Users]: "Users",
  [AppLink.Permissions]: "Permissions",
};

const routeIcons: { [key: string]: SvgIconComponent } = {
  [AppLink.Users]: People,
  [AppLink.Permissions]: Lock,
};

const defaultRouteName = "Home";

export const getRouteName = (path: string | AppLink) => {
  return routeNames[path] || defaultRouteName;
};

export const getRouteIcon = (
  path: string | AppLink
): SvgIconComponent | null => {
  return routeIcons[path] || null;
};
