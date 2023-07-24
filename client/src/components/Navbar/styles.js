import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },

  brandContainer: {
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },

  links: {
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      marginLeft: theme.spacing(2),
    },
    "& a:hover": {
      color: theme.palette.success.main,
    },
  },
  loginBtn: {
    marginLeft: theme.spacing(2),
    "& button:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
}));
