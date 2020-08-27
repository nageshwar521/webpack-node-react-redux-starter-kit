import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import './ImageSlider.css';

export default function Auth({ match }) {
  const classes = useStyles();
  const images = [
    {
      original: '/main_bg_1.jpg',
    },
    {
      original: '/main_bg_2.jpg',
    },
    {
      original: '/main_bg_4.png',
    },
  ];
  return (
    <ImageGallery
      items={images}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets
      autoPlay
      slideInterval={10000}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
  },
  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  formSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.auth.backgorund,
  },
  introSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/main_bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
