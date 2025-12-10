import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(App, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx("div", { children: "Home" }) }
    ]
  }
];
function App() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Root" }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const createApp = ViteReactSSG(
  App,
  { routes }
);
export {
  createApp
};
