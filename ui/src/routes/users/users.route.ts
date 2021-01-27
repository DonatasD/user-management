import { AppLink, AppRoute } from "../../types/types";
import UserView from "./UserView";

const userRoute: AppRoute = {
  path: AppLink.Users,
  component: UserView,
};

export default userRoute;
