import { Layout } from "@/layouts/layout";
import { Outlet } from "react-router";

export default function AuthenticatedLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
