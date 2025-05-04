
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold font-display tracking-tight">
        Script<span className="text-script-accent">Writer</span>
      </span>
    </Link>
  );
};

export default Logo;
