import { NavLink, useParams } from "react-router";

const Filters = () => {
  const { region } = useParams();

  return (
    <div>
      Filters {region}
      <ul>
        <li>
          <NavLink to="/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/africa">frica</NavLink>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Filters;
