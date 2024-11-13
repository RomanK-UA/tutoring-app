import { Link } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
const Menu = () => {
  return (
    <ul className="space-y-2">
      {menuItemsData.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className="block p-4 text-left bg-gray-200 rounded shadow hover:bg-gray-300 transition"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
