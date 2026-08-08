import type { ComponentPropsWithoutRef } from "react";

type StableLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

/**
 * Native navigation avoids a vinext dev-runtime bug in Next Link's client
 * transition bundle while preserving accessible links and normal browser UX.
 */
export function StableLink({ href, children, ...props }: StableLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
