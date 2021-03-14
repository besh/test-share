const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  env: {
    // base url for all API calls
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL || "https://geppetto.formant.io/api",

    // base url for clip mp4 and clip thumbnail png
    NEXT_PUBLIC_MEDIA_BASE_URL:
      process.env.NEXT_PUBLIC_MEDIA_BASE_URL ||
      "https://geppetto-clips.formant.io",

    // base url for the app. used for the share url
    NEXT_PUBLIC_APP_BASE_URL:
      process.env.NEXT_PUBLIC_APP_BASE_URL || "http://geppetto.formant.io",

    // time in seconds when to begin the teleop countdown until record
    NEXT_PUBLIC_START_RECORDING_COUNTDOWN_TIME:
      process.env.NEXT_PUBLIC_START_RECORDING_COUNTDOWN_TIME || 10,

    // the number of clips to generate during the teleop session
    NEXT_PUBLIC_CLIP_RECORD_COUNT:
      process.env.NEXT_PUBLIC_CLIP_RECORD_COUNT || 3,

    // the countdown in seconds until recording begins
    NEXT_PUBLIC_RECORDING_COUNTDOWN_TIME:
      process.env.NEXT_PUBLIC_RECORDING_COUNTDOWN_TIME || 3,

    // the time in milliseconds to delay media-clip generation. Should be 10000 at least.
    NEXT_PUBLIC_CLIP_RECORD_OFFSET:
      process.env.NEXT_PUBLIC_CLIP_RECORD_OFFSET || 10000,

    // the poll interval for /accepting-reservations in milliseconds
    NEXT_PUBLIC_ACCEPTING_RESERVATIONS_POLL_INTERVAL:
      process.env.NEXT_PUBLIC_ACCEPTING_RESERVATIONS_POLL_INTERVAL || 10000,

    // the poll interval for /wait-time in milliseconds
    NEXT_PUBLIC_WAIT_TIME_POLL_INTERVAL:
      process.env.NEXT_PUBLIC_WAIT_TIME_POLL_INTERVAL || 10000,

    // the poll interval for /refresh-reservatiln in milliseconds
    NEXT_PUBLIC_REFRESH_RESERVATION_POLL_INTERVAL:
      process.env.NEXT_PUBLIC_REFRESH_RESERVATION_POLL_INTERVAL || 10000,

    // session length in seconds. used to determine your place in line.
    NEXT_PUBLIC_SESSION_LENGTH: process.env.NEXT_PUBLIC_SESSION_LENGTH || 120,
  },
  include: path.resolve(__dirname, "./svg"),
  webpack(config, options) {
    return config;
  },
});
