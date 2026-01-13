import { Link } from "next-view-transitions";

const Button = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className="group"
    >
      <button
        className={`bg-accent text-white rounded-lg cursor-pointer group-hover:-translate-y-[0.1rem] group-hover:shadow-lg ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
