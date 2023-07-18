import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  field: {
    marginBottom: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(3, 0, 2),
  },
}));
