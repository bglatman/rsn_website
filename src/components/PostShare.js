import React from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";

import config from "../../config";

const PostShare = props => {
  const {slug, title, excerpt} = props;

  const url = config.siteUrl + config.pathPrefix + slug;

  const iconSize = 36;
  const filter = count => (count > 0 ? count : "");

  return (
    <React.Fragment>
      <div className="share">
        <div className="links">
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share"
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton
            url={url}
            additionalProps={{
              "aria-label": "Google share"
            }}
          >
            <GooglePlusIcon round size={iconSize} />
            <GooglePlusShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={excerpt}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}
          >
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostShare;