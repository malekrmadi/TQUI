import { Link } from "@tanstack/react-router";
import "./Logo.css";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`lync-logo ${light ? "light" : ""}`}>
      <span className="mark" aria-hidden>
        <span className="mark-inner" />
      </span>
      <span className="word">Tqui</span>
    </Link>
  );
}
