import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";

// Admin-only and error routes are split out so a visitor landing on "/" never
// downloads them.
const AdminMedia = lazy(() => import("@/pages/AdminMedia"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin/media" component={AdminMedia} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
