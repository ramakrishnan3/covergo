import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="flex items-center flex-col">
      <Outlet />
    </section>
  )
};

export default Layout;