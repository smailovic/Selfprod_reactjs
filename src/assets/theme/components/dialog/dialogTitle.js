/** selfProductivity ver1 */
// Smael_self_productivity_tool base styles
import typography from "assets/theme/base/typography";

// Smael_self_productivity_tool helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
