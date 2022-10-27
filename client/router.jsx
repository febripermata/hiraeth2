import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import { App } from "/imports/ui/App";
import HomePage from "/imports/ui/pages/HomePage";
import AdminPage from "/imports/ui/pages/AdminPage";
import LoginPage from "/imports/ui/pages/LoginPage";

FlowRouter.route("/", {
  name: "Home",
  action() {
    if (sessionStorage.getItem("role") === "admin") {
      FlowRouter.go("/admin");
    } else {
      mount(App, {
        content: <HomePage />,
      });
    }
  },
});

FlowRouter.route("/admin", {
  name: "Home",
  action() {
    if (sessionStorage.getItem("role") === "admin") {
      mount(App, {
        content: <AdminPage />,
      });
    } else {
      FlowRouter.go("/login");
    }
  },
});

FlowRouter.route("/login", {
  name: "Home",
  action() {
    mount(App, {
      content: <LoginPage />,
    });
  },
});
