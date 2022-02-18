import css from "./Page.module.css";
import { PAGE_MODES } from "./types";

export const STYLES_BY_MODE = {
  [PAGE_MODES.center]: css.centerMode,
  [PAGE_MODES.top]: css.topMode,
} as const;
