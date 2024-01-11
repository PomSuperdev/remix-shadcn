import SettingsLayout from "../components/pages/form/layout";
import { Outlet } from "@remix-run/react";
export default function FormsPage() {
  return (
    <>
      <SettingsLayout>
        <Outlet />
      </SettingsLayout>
    </>
  );
}
