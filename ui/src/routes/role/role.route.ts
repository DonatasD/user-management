import { AppLink, AppRoute } from "../../types/types";
import RoleView from "../../views/role/RoleView";

const roleRoute: AppRoute = {
  path: AppLink.Roles,
  component: RoleView,
};

export default roleRoute;
