import React from "react";
import cn from "classnames";
import { ReactComponent as LogoIcon } from "assets/icons/header/logo.svg";
import { ReactComponent as LogInIcon } from "assets/icons/header/log-in.svg";
import { ReactComponent as ArrowDownIcon } from "assets/icons/select/arrow-down.svg";
import css from "./Header.module.css";
import { HeaderProps } from "./types";
import { Select } from "antd";
import { LANGUAGE_OPTIONS } from "./data";

const { Option } = Select;

const Header = ({ className }: HeaderProps) => (
  <header className={cn(css.container, className)}>
    <a href="/">
      <LogoIcon className={css.logo} />
    </a>
    <span className={css.title}>Customer Area</span>
    <Select
      defaultValue={LANGUAGE_OPTIONS[1].value}
      className={css.languageSelect}
      bordered={false}
      suffixIcon={<ArrowDownIcon />}
    >
      {LANGUAGE_OPTIONS.map(({ Icon, value, label }) => (
        <Option value={value} key={value}>
          <div className={css.languageSelectOption}>
            <Icon /> {label}
          </div>
        </Option>
      ))}
    </Select>
    <button className={css.logInButton}>
      <LogInIcon />
      Log in
    </button>
  </header>
);

export default Header;
