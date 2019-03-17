/**
 *
 * ChallengeCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  CardHeader,
  Divider,
} from '@material-ui/core';

// 'default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'

const styles = theme => ({
  card: {
    maxWidth: 340,
    margin: 10,
    backgroundColor: theme.palette.primary.light,
  },
  media: {
    height: 160,
  },
  header: {
    color: 'black',
  },
});

function ChallengeCard(props) {
  const handleClick = () => {
    props.history.push(`/challenge/${props.id}`);
  };

  const { title, description, deadline, media } = props; // add link later
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image={`http://localhost:1337/${media.url}`}
            title="Contemplative Reptile"
          />
          <CardHeader
            classes={{
              title: classes.header,
              subheader: classes.header,
            }}
            className={classes.header}
            title={title}
            subheader={moment(deadline).format('MMM Do YY')}
          />
          <Divider />
          <CardContent>
            <Typography component="p" color="inherit">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

ChallengeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default withRouter(withStyles(styles)(ChallengeCard));
