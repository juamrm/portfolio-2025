import * as React from "react";

// A minimalist black LinkedIn SVG icon
export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect width="24" height="24" rx="4" fill="none"/>
    <path
      d="M6.94 8.75a1.13 1.13 0 1 1 0-2.25 1.13 1.13 0 0 1 0 2.25ZM7.5 10.25h-1.1a.4.4 0 0 0-.4.4v6.1c0 .22.18.4.4.4h1.1c.22 0 .4-.18.4-.4v-6.1a.4.4 0 0 0-.4-.4Zm3.5 0h-1.1a.4.4 0 0 0-.4.4v6.1c0 .22.18.4.4.4h1.1c.22 0 .4-.18.4-.4v-6.1a.4.4 0 0 0-.4-.4Zm.55 2.5c0-1.1.9-2 2-2s2 .9 2 2v3.6c0 .22-.18.4-.4.4h-1.1a.4.4 0 0 1-.4-.4v-3.2c0-.22-.18-.4-.4-.4s-.4.18-.4.4v3.2c0 .22-.18.4-.4.4h-1.1a.4.4 0 0 1-.4-.4v-3.6Z"
      fill="currentColor"
    />
  </svg>
);

export default LinkedinIcon;
