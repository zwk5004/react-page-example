import { createMuiTheme } from "@material-ui/core";
import * as Colors from "./colors";

export const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        color: Colors.WHITE,
        "& label": {
          color: Colors.WHITE
        },
        "& label.Mui-focused": {
          color: Colors.WHITE
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: Colors.WHITE
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: Colors.WHITE
          },
          "&:hover fieldset": {
            borderColor: Colors.LIGHT_GREY
          },
          "&.Mui-focused fieldset": {
            borderColor: Colors.GREY
          }
        }
      }
    },
    MuiInputBase: {
      root: {
        color: Colors.WHITE
      },
      input: {
        borderBottomColor: Colors.WHITE,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 1000px ${Colors.DARK_BLUE} inset`,
          WebkitTextFillColor: Colors.WHITE
        }
      }
    },
    MuiSelect: {
      root: {
        color: Colors.WHITE
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: Colors.BLUE
      },
      containedSecondary: {
        backgroundColor: Colors.LIGHT_BLUE
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: Colors.DARK_BLUE
      }
    },
    MuiTypography: {
      root: {
        color: Colors.WHITE
      }
    }
  }
});
