import { AppLink, AppRoute } from "../../types/types";
import HomeView from "../../views/home/HomeView";

const homeRoute: AppRoute = {
  path: AppLink.Home,
  component: HomeView,
};

export default homeRoute;
