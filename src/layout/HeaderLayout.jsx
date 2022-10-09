import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <div>
      <p>header</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default HeaderLayout;
