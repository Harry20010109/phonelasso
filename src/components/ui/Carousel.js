import React, { useState } from "react";
import styled from "styled-components";
import ReactImageMagnify from 'react-image-magnify';

const Wrapper = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
`;
const IMG = styled.div`
  background-image: url("https://www.phonelasso.com/wp-content/uploads/product-image-1v20170903.jpg");
  background-color: #eee;
  width: 75%;
  padding-bottom: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 10px;
  background-position: 50%;
  cursor: pointer;
`;
const LargeIMG = styled.div`
  background-image: url("https://www.phonelasso.com/wp-content/uploads/pl1907-phone-lasso-kit-2019b.jpg");
  background-color: #eee;
  width: 100%;
  padding-bottom: 133%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: inline-block;
  grid-column: span 3;
`;

function Carousel({ photos, url }) {
  const [img, setImg] = useState(photos[0]);

  return (
    <Wrapper>
      {/* <LargeIMG img={`../photos/${url}/${img}`} />

      <div>
        {photos.map((p, i) => {
          return (
            <IMG
              onClick={() => setImg(p)}
              img={`../photos/${"https://www.phonelasso.com/wp-content/uploads/phone-lasso-backpacker-2.jpg"}/${p}`}
              key={i}
            />
          );
        })}
      </div> */}
      <div>
      <ReactImageMagnify {...{
         enlargedImagePosition: "over",
          smallImage: {
              alt: 'large image',
              isFluidWidth: true,
              src: "https://www.phonelasso.com/wp-content/uploads/pl1907-phone-lasso-kit-2019b.jpg"
          },
          largeImage: {
              src: "https://www.phonelasso.com/wp-content/uploads/pl1907-phone-lasso-kit-2019b.jpg",
              height: 1200,
              width: 900
                }
            }} /> 
      </div>
      <div>
        {[
          "https://www.phonelasso.com/wp-content/uploads/pl1907-phone-lasso-kit-2019b.jpg",
          "https://www.phonelasso.com/wp-content/uploads/product-image-1v20170903.jpg",
          "https://www.phonelasso.com/wp-content/uploads/product-image-1v20170903.jpg",
        ].map((p, i) => {
          return (
            <img
              key={i}
              style={{ height: "150px" }}
              alt="small image"
              src={`${p}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Carousel;
