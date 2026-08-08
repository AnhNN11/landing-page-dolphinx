"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { websiteProducts } from "../website/products";
import { StableLink as Link } from "./StableLink";

export function WebsiteProductMenu({ variant = "home" }: { variant?: "home" | "service" }) {
  return (
    <details className={`website-menu website-menu-${variant}`}>
      <summary>
        Website <ChevronDown size={14} />
      </summary>
      <div className="website-menu-panel">
        <div className="website-menu-intro">
          <span>WEBSITE STUDIO</span>
          <h3>Thiết kế để thương hiệu được nhớ và sản phẩm được chọn.</h3>
          <Link href="/website">Xem tất cả sản phẩm <ArrowRight size={15} /></Link>
        </div>
        <div className="website-menu-products">
          {websiteProducts.map((product) => (
            <Link href={`/website/${product.slug}`} key={product.slug}>
              <span className="website-menu-thumb"><Image src={product.image} alt="" fill sizes="90px" /></span>
              <span><small>{product.category}</small><b>{product.name}</b><em>{product.summary}</em></span>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
