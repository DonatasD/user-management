import { AppLink } from "../types/types";
import {
  SvgIconComponent,
  Lock,
  Home,
  Group,
  Person,
} from "@material-ui/icons";

const routeNames: { [key: string]: string } = {
  [AppLink.Home]: "Home",
  [AppLink.Users]: "Users",
  [AppLink.Permissions]: "Permissions",
  [AppLink.Groups]: "Groups",
  [AppLink.Roles]: "Roles",
};

const routeIcons: { [key: string]: SvgIconComponent } = {
  [AppLink.Home]: Home,
  [AppLink.Users]: Person,
  [AppLink.Groups]: Group,
  [AppLink.Permissions]: Lock,
  [AppLink.Roles]: Lock,
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
