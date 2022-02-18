import React, { PropsWithChildren } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import css from "./Page.module.css";
import { PageProps } from "./types";
import { STYLES_BY_MODE } from "./data";
import cn from "classnames";

const Page = ({ children, mode }: PropsWithChildren<PageProps>) => (
  <div className={css.container}>
    <Header className={css.header} />
    <main className={cn(css.main, STYLES_BY_MODE[mode])}>{children}</main>
    <Footer />
  </div>
);

export default Page;
