import React from "react";
import { Banner } from "../../components/hero-banner";
import { Menu } from "../../components/section-brand-menyu";
import { Shop } from "../../components/section-shop";
import { Product } from "../../components/section-production1";
import{Brend} from "../../components/section-brandlar"
import {Product2} from "../../components/section-production2"
export const Men = () => {
  return (
    <div className="container">
      <section>
        <Banner />
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <Shop />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Brend/>
      </section>
      <section>
        <Product2/>
      </section>
    </div>
  );
};
