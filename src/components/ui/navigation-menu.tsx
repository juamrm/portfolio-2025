import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";

type NavigationMenuProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & { className?: string; children?: React.ReactNode };
const NavigationMenu = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Root>, NavigationMenuProps>(
  ({ children, className, ...props }, ref) => (
    <NavigationMenuPrimitive.Root ref={ref} className={className} {...(props as any)}>
      {children}
    </NavigationMenuPrimitive.Root>
  )
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

type NavigationMenuListProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & { className?: string; children?: React.ReactNode };
const NavigationMenuList = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.List>, NavigationMenuListProps>(
  ({ children, className, ...props }, ref) => (
    <NavigationMenuPrimitive.List ref={ref} className={className} {...(props as any)}>
      {children}
    </NavigationMenuPrimitive.List>
  )
);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

type NavigationMenuItemProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & { className?: string; children?: React.ReactNode };
const NavigationMenuItem = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Item>, NavigationMenuItemProps>(
  ({ children, className, ...props }, ref) => (
    <NavigationMenuPrimitive.Item ref={ref} className={className} {...(props as any)}>
      {children}
    </NavigationMenuPrimitive.Item>
  )
);
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & { className?: string; children?: React.ReactNode };
const NavigationMenuTrigger = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>, NavigationMenuTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...(props as any)}
    >
      {children} {" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

type NavigationMenuContentProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & { className?: string; children?: React.ReactNode };
const NavigationMenuContent = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Content>, NavigationMenuContentProps>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
        className,
      )}
      {...(props as any)}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  )
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

// Use the Radix primitive directly for Link to avoid type issues
const NavigationMenuLink = NavigationMenuPrimitive.Link;

type NavigationMenuViewportProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & { className?: string; children?: React.ReactNode };
const NavigationMenuViewport = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>, NavigationMenuViewportProps>(
  ({ className, children, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...(props as any)}
    >
      {children}
    </NavigationMenuPrimitive.Viewport>
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & { className?: string; children?: React.ReactNode };
const NavigationMenuIndicator = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Indicator>, NavigationMenuIndicatorProps>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className,
      )}
      {...(props as any)}
    >
      {children ?? <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />}
    </NavigationMenuPrimitive.Indicator>
  )
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
