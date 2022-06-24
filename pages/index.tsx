import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: auto;
  /* height: 200vh; */
`;
const Banner = styled.div`
  background-image: url("./banner.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 250px;
  position: relative;
  min-height: 100vh;
  z-index: 1;
  overflow: hidden;
  .banner-shape {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url("./banner-shape.png");
    background-repeat: no-repeat;
    background-size: cover;
    img {
      visibility: hidden;
      /* position:  ; */
    }
    width: 100%;
  }
`;
const BannerContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
  }
  .content-shape {
    position: absolute;
    left: -190px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -11;
  }

  .description {
    max-width: 564px;
  }
  .btn-group {
    margin: 40px 0px;
  }
  .image > img {
    max-width: 500px;
  }
`;

const Test = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  img {
    max-width: 100%;
    height: auto;
    opacity: 0.2;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Banner>
        <Test>
          <img src="/strock.png"></img>
        </Test>
        <BannerContent>
          <div className="description">
            <div style={{ color: "red" }}>#Get Your 14 Days Free Trial</div>
            <h1>Manage All Of Your Stuff Using A Pakap</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</div>
            <div className="btn-group">
              <button>Learn More</button>
            </div>
          </div>

          <div className="image">
            <img src="./banner-1.png"></img>
          </div>
          <div className="content-shape">
            <img src="./content-shape.png"></img>
          </div>
        </BannerContent>
        <div className="banner-shape">
          <img src="./banner-shape.png"></img>
        </div>
      </Banner>
      <p>PP13e213</p>

      {/* <div style={{ border: "2px solid green" }}>Cuong</div> */}
    </Wrapper>
  );
};

export default Home;
