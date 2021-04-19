import { AppRoute } from "../types/types";
import userRoute from "./user";
import homeRoute from "./home";
import permissionRoute from "./permission";
import groupRoute from "./group";
import roleRoute from "./role";

const routes: AppRoute[] = [
  userRoute,
  permissionRoute,
  homeRoute,
  groupRoute,
  roleRoute,
];

export default routes;
