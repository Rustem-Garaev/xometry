import React from "react";
import cn from "classnames";
import css from "./Footer.module.css";
import { ReactComponent as LogoIcon } from "assets/icons/footer/logo.svg";
import { ReactComponent as XometryIcon } from "assets/icons/footer/xometry.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/footer/phone.svg";
import { ReactComponent as LocationIcon } from "assets/icons/footer/location.svg";

const Footer = () => (
  <footer className={css.container}>
    <section className={css.section}>
      <div className={css.logoWrapper}>
        <LogoIcon />
        <span className={css.logoLabel}>Customer Area</span>
      </div>
      <div className={cn(css.about, css.greyText)}>
        © 2017-2021, Xometry Europe GmbH
        <br />
        Account: #1973, Owner: Marina Nekrasova
      </div>
    </section>
    <section className={css.section}>
      <XometryIcon />
      <span className={css.sectionLabel}>Info</span>
      <a href="/" className={cn(css.link, css.greyText)}>
        General Terms & Conditions
      </a>
    </section>
    <section className={css.section}>
      <PhoneIcon />
      <span className={css.sectionLabel}>Call</span>
      <a href="tel:+11234567890" className={cn(css.link, css.greyText)}>
        1 123 4567890
      </a>
    </section>
    <section className={css.section}>
      <LocationIcon />
      <span className={css.sectionLabel}>Mail</span>
      <a
        className={cn(css.link, css.greyText)}
        href="mailto:support@xometry.com"
      >
        support@xometry.com
      </a>
    </section>
  </footer>
);

export default Footer;
