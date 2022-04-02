import "./Profile.css";
import { Left } from "../Components/Left";

export const Profile = () => {
  return (
    <>
      <div className="loginnameDisplay"></div>
      <div className="main126">
        <div>
          <Left />
        </div>

        <div className="right126">
          {/* <div className="MyProfile">My profile</div> */}
          <h2 className="MyProfile">My profile</h2>
          <div className="row1126">
            <div className="box1">
              <div className="showcase126">
                <h5>Showcase</h5>
                <h6>Coaches</h6>
              </div>

              <div className="showCaseImg">
                <img
                  src="https://user-images.githubusercontent.com/95956045/160841142-1d3df56d-fce8-4a38-8939-4a5242755762.png"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="datejoin">
                <h4>User Statistics</h4>
              </div>
              <div className="datejoin">
                <p>Date Joined</p>
                <p>Enegy point earn</p>
                <p>Video Completed</p>
              </div>
            </div>

            <div className="box2">
              <div className="badge126">
                <h5>Badges Count</h5>
                <h6>Coaches</h6>
              </div>
              {/* <hr /> */}
              <div className="showCaseImg">
                <img
                  src="https://user-images.githubusercontent.com/95956045/160854904-eb6c58e2-2514-46b2-9b9a-31a57f4b7f03.png"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="badge126">
              <h5>Project</h5>
              <h6>Coaches</h6>
            </div>
            <div className="showCaseImg">
              <h5 id="pro">You Do not have any project yet</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
