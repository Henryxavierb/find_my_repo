import React from "react";

import "./index.css";
import userBlog from "../../assets/blog.svg";
import accountDetail from "../../assets/people.svg";
import userLocation from "../../assets/location.svg";

interface PrefaceModel {
  bio?: string;
  name?: string;
  blog?: string;
  avatar?: string;
  userUrl?: string;
  username?: string;
  location?: string;
  following?: string;
  followers?: string;
}

const Repository: React.FC<PrefaceModel> = (props) => {
  const {
    bio,
    name,
    blog,
    avatar,
    userUrl,
    location,
    username,
    followers,
    following,
  } = props;

  function ellipses(word: string) {
    const numberLimitCharacters = 28;

    return word.length > numberLimitCharacters
      ? `${word.slice(0, numberLimitCharacters)}...`
      : word;
  }

  return (
    <div className="ownerSection">
      <div className="aboutUser">
        <img
          src={avatar}
          draggable="false"
          alt="owner avatar"
          className="avatar"
        />

        <div>
          <div className="userName">{name}</div>

          <div>{username}</div>
        </div>
      </div>

      <div className="userBio">{bio}</div>

      <a href={userUrl} className="moreDetailsAboutUser">
        More
      </a>

      <div className="follow">
        <img src={accountDetail} alt="details" />

        <div>
          <span>{followers}</span>
          <div>followers</div>
        </div>

        <div>
          <span>{following}</span>
          <div> following</div>
        </div>
      </div>

      <div className="detailsUser">
        {location && (
          <div>
            <img src={userLocation} alt="location" />
            <span>{location}</span>
          </div>
        )}

        {blog && (
          <div>
            <img src={userBlog} alt="blog" />
            <a href={blog}>{ellipses(blog)}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Repository;
