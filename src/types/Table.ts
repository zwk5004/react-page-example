import { ReactElement } from "react";
import { PropTypes } from "@material-ui/core";

export type Column = {
  label: string;
  field: string;
  renderValue?: (object: object, field: string) => string | ReactElement;
};

export type TableAction = {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: PropTypes.Color;
};
