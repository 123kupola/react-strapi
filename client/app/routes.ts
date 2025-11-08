import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route(":locale", "routes/home.tsx"),
  route(":locale/articles", "routes/articles._index.tsx"),
  route(":locale/articles/:slug", "routes/articles.$slug.tsx"),
  index("routes/home.tsx"), // Default to Slovenian
  route("*", "routes/$.tsx"), // Catch-all route for 404s
] satisfies RouteConfig;
