import { AppLink, AppRoute } from "../../types/types";
import PermissionView from "../../views/permission/PermissionView";

const userRoute: AppRoute = {
  path: AppLink.Permissions,
  component: PermissionView,
};

export default userRoute;
