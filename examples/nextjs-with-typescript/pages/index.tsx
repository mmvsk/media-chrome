import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaLoadingIndicator,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaCaptionsButton,
  MediaAirplayButton,
  MediaPipButton,
  MediaFullscreenButton,
  MediaPosterImage,
} from 'media-chrome/dist/react';

const primaryColor = 'white';
const chromeStyles = {
  '--media-icon-color': primaryColor,
  '--media-range-thumb-background': primaryColor,
  '--media-range-bar-color': primaryColor,
  color: primaryColor,
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Media Chrome React+Next.JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://www.media-chrome.org" target="_blank">
            Media Chrome!
          </a>
        </h1>
        <MediaController
          ref={(node: HTMLElement) => console.log('ref', node)}
          style={chromeStyles}
          defaultSubtitles
        >
          <video
            slot="media"
            src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
            preload="auto"
            muted
            crossOrigin=""
          >
            <track
              label="thumbnails"
              default
              kind="metadata"
              src="https://image.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/storyboard.vtt"
            />
            <track
              label="English"
              kind="captions"
              srcLang="en"
              src="./vtt/en-cc.vtt"
            />
          </video>
          <MediaPosterImage
            slot="poster"
            src="https://image.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/thumbnail.jpg"
            placeholderSrc="data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAASACADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAgUGCP/EACkQAAEDAgMIAgMAAAAAAAAAAAEAAgMEBgUREgcUITFSkZTRQaEiscH/xAAYAQACAwAAAAAAAAAAAAAAAAAABQIDBv/EAB0RAAICAQUAAAAAAAAAAAAAAAABAgMFERUxwfD/2gAMAwEAAhEDEQA/AOZh2P2k/LOhq/Lf7VuPYvZxLQ6iqgXchvrxn9rpY7ojYCBU0IJ5HU3h9rU3NcGJVcVNJh2K4fDPTztlbm5reGRDhnxIzBPwkUc9RJ6dDHaLYojj2HWYeeH1nmSe1OzYXZJ54fW+ZJ7VeWrbO4SPuedpI/IOnB/TgsxJh4yIuGYu+TvAH9UXnafItWJmuTy1oZ0t7JoZ0t7Ii0InGhnS3smhnS3siIA//9k="
          ></MediaPosterImage>
          <MediaLoadingIndicator
            noautohide
            slot="centered-chrome"
            style={{ '--media-loading-indicator-icon-height': '200px' }}
          ></MediaLoadingIndicator>
          <MediaControlBar>
            <MediaPlayButton></MediaPlayButton>
            <MediaSeekBackwardButton seekOffset={10}></MediaSeekBackwardButton>
            <MediaSeekForwardButton seekOffset={10}></MediaSeekForwardButton>
            <MediaTimeRange></MediaTimeRange>
            <MediaTimeDisplay showDuration></MediaTimeDisplay>
            <MediaMuteButton></MediaMuteButton>
            <MediaVolumeRange></MediaVolumeRange>
            <MediaPlaybackRateButton></MediaPlaybackRateButton>
            <MediaCaptionsButton></MediaCaptionsButton>
            <MediaAirplayButton></MediaAirplayButton>
            <MediaPipButton></MediaPipButton>
            <MediaFullscreenButton></MediaFullscreenButton>
          </MediaControlBar>
        </MediaController>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
