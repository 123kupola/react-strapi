import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"), // Redirect to /sl
  route(":locale", "routes/home.tsx"),
  route(":locale/articles", "routes/articles._index.tsx"),
  route(":locale/articles/:slug", "routes/articles.$slug.tsx"),
  route("*", "routes/$.tsx"), // Catch-all route for 404s
] satisfies RouteConfig;
