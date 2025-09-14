import { Outlet } from "react-router";

const PageLayout = function () {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PageLayout;
