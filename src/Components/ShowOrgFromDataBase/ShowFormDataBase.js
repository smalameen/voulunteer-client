import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../App";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
    display: "flex",
  },
  media: {
    height: 140,
    marginBottom: 2,
  },
});

const ShowFormDataBase = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const classes = useStyles();
  const [showOrg, steShowOrg] = useState([]);
  console.log(showOrg);

  const deleteOne = ()=> {
    let cancel = showOrg.id;
    console.log(cancel);
    steShowOrg([]);
  }
  useEffect(() => {
    fetch(`http://localhost:3002/organizations?email=`+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => steShowOrg(data));
  }, []);
  return (
    <div className="container">
      {showOrg.map((org) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={org.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
               Organization name: {org.orgName}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
               Id: {org.id}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick ={()=>deleteOne ()} variant="outlined" color="primary">
              Cancel
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ShowFormDataBase;
