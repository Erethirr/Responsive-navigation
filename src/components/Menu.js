import { Link } from "react-router-dom";
import { menuData } from "../menuData";

export default function Menu(props) {
  const { className } = props;

  const Links = menuData.map((item) => {
    return (
      <Link to={item.to} className={item.className}>
        {item.text}
      </Link>
    );
  });

  return <div className={className}>{Links}</div>;
}

//<div className="hidden lg:inline">
