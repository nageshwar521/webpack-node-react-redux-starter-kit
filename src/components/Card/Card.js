import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as CardComponent, CardHeader, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  stepper: {
    flex: 1,
  },
  cardActions: { padding: 0 },
  cardContent: { borderTop: '1px solid #DDD', padding: '0 20px 20px 20px' },
}));

const Card = ({ title, subtitle, children, getFooter, cardContentClass }) => {
  const classes = useStyles();

  return (
    <CardComponent className={classes.root}>
      <CardHeader title={title} subheader={subtitle} />
      <CardContent
        classes={{
          root: cardContentClass ? cardContentClass : classes.cardContent,
        }}
      >
        {children}
      </CardContent>
      <CardActions classes={{ root: classes.cardActions }}>{getFooter && getFooter()}</CardActions>
    </CardComponent>
  );
};

export default Card;
