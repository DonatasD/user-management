import { AppLink, AppRoute } from "../../types/types";
import GroupView from "../../views/group/GroupView";

const groupRoute: AppRoute = {
  path: AppLink.Groups,
  component: GroupView,
};

export default groupRoute;
