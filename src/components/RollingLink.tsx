import React from "react";
import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;


interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;

import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;

import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;

import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;

import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
        <span
          className="block h-6 text-app-secondary"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full pointer-events-none" tabIndex={-1} aria-hidden>
            {children}
          </Wrapper>
        </span>
      </span>
    </span>
  );
};

export default RollingLink;

import { Link } from "react-router-dom";

interface RollingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...rest
}) => {
  const Wrapper: any = to ? Link : "a";
  const wrapperProps = to ? { to } : { href, ...rest };

  return (
    <span
      className={`group relative inline-block overflow-hidden align-middle h-6 ${className}`}
      style={{ width: "max-content" }}
    >
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6"
        style={{ height: HEIGHT * 2, display: "block" }}
      >
        <span
          className="block h-6 text-main-black"
          style={{ lineHeight: "24px" }}
        >
          <Wrapper {...wrapperProps} className="w-full h-full">
            {children}
          </Wrapper>
        </span>
          "group relative inline-flex items-center justify-center overflow-hidden cursor-pointer h-6 text-base" +
          (className ? " " + className : "")
        }
        style={{ verticalAlign: "middle" }}
      >
        <span
          className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform group-hover:-translate-y-full w-full"
        >
          <span className="h-6 flex items-center w-full leading-none text-main-black">
            {React.createElement("a", aProps, children)}
          </span>
          <span className="h-6 flex items-center w-full leading-none text-app-secondary">
            {React.createElement("a", aPropsHidden, children)}
          </span>
        </span>
      </span>
    );
  }
};

export default RollingLink;
