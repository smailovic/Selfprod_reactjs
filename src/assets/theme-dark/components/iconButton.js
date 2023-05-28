/** selfProductivity ver1 */
// Smael_self_productivity_tool Base Styles
import colors from "assets/theme-dark/base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
