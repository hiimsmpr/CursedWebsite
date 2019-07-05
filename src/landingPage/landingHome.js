import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="cardDiv">
      <div className="topRow">
        <div className="topRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Featured Stream"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Featured Stream
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the featured stream description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
        <div className="topRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Featured News"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Featured News
        </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the featured News description aread. Dynamic Pull needs to be coded.
        </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
      </Button>
              <Button size="small" color="primary">
                Learn More
      </Button>
            </CardActions>
          </Card>
        </div>
        <div className="topRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Feature Video
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the featured video description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="bottomRow">
        <div className="bottomRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  News Story
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the news description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
        <div className="bottomRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  News Story
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the news description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
        <div className="bottomRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  News Story
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the news description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
        <div className="bottomRowCard">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  News Story
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the news description aread. Dynamic Pull needs to be coded.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
