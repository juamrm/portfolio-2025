import React from "react";
import { Link } from "react-router-dom";

interface RollingLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
}

const HEIGHT = 24; // px, matches text-base/h-6

const RollingLink: React.FC<RollingLinkProps> = ({
  children,
  href,
  to,
  className = "",
  onClick,
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to, onClick } : { href, onClick, ...rest };

  return (
    <span
      style={{ paddingLeft: 40, paddingRight: 40, display: "inline-block", width: "fit-content" }}
      className={`group relative overflow-hidden align-middle h-6 ${className}`}
    >
      <span style={{ display: "inline-block", width: "fit-content" }}>
        <span
          className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
          style={{ height: HEIGHT * 2, display: "block" }}
        >
          <span
            className="block h-6 text-main-black whitespace-nowrap"
            style={{ lineHeight: "24px" }}
          >
            <Wrapper {...wrapperProps} className="w-full h-full">
              {children}
            </Wrapper>
          </span>
          <span
            className="block h-6 text-app-secondary whitespace-nowrap"
            style={{ lineHeight: "24px" }}
          >
            <Wrapper
              {...wrapperProps}
              className="w-full h-full pointer-events-none"
              tabIndex={-1}
              aria-hidden
              onClick={null} /* Prevent click on hidden element */
            >
              {children}
            </Wrapper>
          </span>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;
