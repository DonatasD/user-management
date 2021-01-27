import { Component, FC } from "react";

export enum AppLink {
  Home = "/",
  Users = "/users",
  Permissions = "/permissions",
}

export interface AppRoute {
  path: AppLink;
  component: FC | Component;
  exact?: boolean;
}
