import React from "react";

const ProfileComponent = ({
  info = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
  }
}) => {
  return (
      <>
        <div className="row">
          <div className="d-flex">
            <div className="col-1">
              <i className="bi bi-arrow-left fs-5"></i>
            </div>

            <div
                className="col-3 d-flex align-items-center text-white fw-bolder">
              <div>
                {info.firstName} {info.lastName}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <img className="w-100"
                 src={"/images/banner.jpeg"}
                 alt=""/>
          </div>

          <div className="ms-4 position-relative">
            <div
                className="position-absolute top-0 translate-middle-y">
              <img className="col-4 border border-dark border-3 rounded-circle"
                   src={"/images/react.png"}
                   alt=""
              />
            </div>

            <div className="float-end me-5">
              <button
                  className="btn btn-light rounded-pill fw-bolder mt-3 border border-1 border-dark">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-5 ps-4 pe-3">
            <div className="text-white fw-bolder fs-5">
              {info.firstName} {info.lastName}
            </div>

            <div>
              {info.handle}
            </div>

            <div className="mt-3 text-white">
              {info.bio}
            </div>

            <div className="mt-3 d-flex">
              <div className="me-4">
                <i className="bi bi-geo-alt me-2"></i>
                {info.location}
              </div>
              <div className="me-4">
                <i className="bi bi-balloon me-2"></i>
                Born {info.dateOfBirth}
              </div>
              <div>
                <i className="bi bi-calendar3 me-2"></i>
                Joined {info.dateJoined}
              </div>
            </div>

            <div className="mt-3 d-flex">
              <div className="me-4 d-flex">
                <div className="text-white fw-bolder me-2">
                  {info.followingCount}
                </div>
                Following
              </div>

              <div className="d-flex">
                <div className="text-white fw-bolder me-2">
                  {info.followersCount}
                </div>
                Followers
              </div>
            </div>
          </div>

        </div>
      </>
  );
};

export default ProfileComponent;