import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  footerLink: {
    color: theme.palette.common.white,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
