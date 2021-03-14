import { useState } from "react";
import Heading from "../Heading/Heading";
import Body from "../Body/Body";
import Carousel from "../Carousel/Carousel";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
} from "react-share";
import toMediaSuffixMap from "../../utils/toMediaSuffixMap";

// TODO: env var
const shareBaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
const mediaBaseUrl = process.env.NEXT_PUBLIC_MEDIA_BASE_URL;

const Share = ({ pageTitle, id }) => {
  const [selected, setSelected] = useState(0);
  const [shareUrl, setShareUrl] = useState(`${shareBaseUrl}/${id}-${0}/clip`);

  console.log(shareUrl);

  return (
    <div>
      <div>
        <Carousel
          selected={selected}
          onTransitionEnd={({ currentIndex }) => {
            setSelected(currentIndex);
            setShareUrl(`${shareBaseUrl}/${id}-${currentIndex}/clip`);
          }}
        >
          {toMediaSuffixMap.map((suffix) => {
            return (
              <div>
                <video
                  width="100%"
                  height="100%"
                  controls
                  poster={`${mediaBaseUrl}/${id}-${suffix}.png`}
                >
                  <source
                    src={`${mediaBaseUrl}/${id}-${suffix}.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
            );
          })}
        </Carousel>
        <Heading as="h2">Check out video</Heading>

        <Body size="M">
          Here’s the video you just took of Spot. Join others in posting your
          video with #PoseSpotwithFormant
        </Body>
      </div>
      <div>video</div>

      <div>
        <Heading as="h2">Share with friends</Heading>
        <Body size="M">
          Let everyone know how cool it is to pose Spot from anywhere in the
          world.
        </Body>

        <div>
          <FacebookShareButton url={shareUrl} quote={pageTitle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton url={shareUrl} title={pageTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        <div>
          <PinterestShareButton url={shareUrl} media={shareUrl}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>

        <div>
          <RedditShareButton
            url={shareUrl}
            title={pageTitle}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
      </div>
    </div>
  );
};

export default Share;
