import React, { useState } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { PRODUCT_PRICE } from "../../constants";
import { calculatePriceWithTwoDecimal } from "../../helper";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const FlexWrapper = styled.div`
  margin: 20px 0 40px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  > label {
    line-height: 34px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    text-transform: capitalize;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 30px 0 60px;
  align-items: baseline;
`;
const Description = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
`;
const Details = styled.div`
  clear: both;
  font-size: 14px;
  margin-top: 20px;
  > ul {
    margin: 0;
    padding: 0 20px 0;
    > li {
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
`;

function ProductDetails(props) {
  const [product, setProduct] = useState(props.product);
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const { variants } = props;

  const handleChange = (name) => (event) => {
    const newProduct = Object.assign(
      { ...product },
      {
        [name]: event.target.value,
      }
    );
    setProduct(newProduct);

    const index = event.target.selectedIndex;
    const selectedOption = event.target.childNodes[index];
    const sku_id = selectedOption.getAttribute("sku_id");
    const price = selectedOption.getAttribute("price");
    if (sku_id) props.updateSkuPrice(sku_id, price);
  };

  return (
    <div>
      <span style={{ marginTop: "0", fontSize: "26px", fontWeight: 600 }}>
        {product.name}
      </span>
      <p>
        <span style={{ color: "#f04e25", fontSize: "2.25em", fontWeight: 400 }}>
          ${PRODUCT_PRICE}
        </span>{" "}
        <sub>each</sub>
      </p>
      <p style={{ fontSize: "20px", fontWeight: 600 }}>Be Fearless</p>
      <Description>{product.description}</Description>
      {product.details && (
        <Details>
          <ul>
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </Details>
      )}
      <div style={{ backgroundColor: "#f7f7f7", padding: "1px 29px 1px 30px" }}>
        {!!variants.length && (
          <FlexWrapper>
            {variants.map((variant, i) => {
              return (
                <Row key={i}>
                  <label>{variant.name.replace("_", " ")}</label>
                  <Select
                    native
                    value={product[variant.name]}
                    onChange={handleChange(variant.name)}
                    style={{ width: "155px", fontSize: "14px", height: "29px" }}
                  >
                    {variant.options.map((option, j) => {
                      if (isNaN(option.label)) {
                        option.label =
                          option.label.charAt(0).toUpperCase() +
                          option.label.slice(1);
                      }
                      return (
                        <option
                          key={j}
                          value={option.label}
                          sku_id={option.sku_id}
                          price={option.price}
                        >
                          {option.label}
                        </option>
                      );
                    })}
                  </Select>
                </Row>
              );
            })}
          </FlexWrapper>
        )}

        <div style={{ fontWeight: "600", textAlign: "right" }}>
          {/* ${props.price } */}$
          {calculatePriceWithTwoDecimal(
            parseInt(props.quantity) * PRODUCT_PRICE
          )}
        </div>
        <Right>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.addToCart(product)}
          >
            Add To Cart
          </Button>
          <TextField
            value={props.quantity}
            onChange={(e) => props.setQuantity(e.target.value)}
            type="number"
            margin="normal"
            style={{ width: "40px", margin: "0 30px 0" }}
          />
        </Right>
      </div>
      <AppBar style={{ marginTop: "30px" }} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab style={{ color: "black" }} label="More Info" {...a11yProps(0)} />
          <Tab style={{ color: "black" }} label="Q&A" {...a11yProps(1)} />
          <Tab
            style={{ color: "black" }}
            label="Directions"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <h5>What’s in the Box Includes</h5>
          <p>
            1 branded patch with aluminum carabiner, 1 refill patch with
            aluminum carabiner, adjustable neck-length lanyard, adjustable
            wristlet lanyard.
            <br /> (Purchase options include white or black patches with black
            carabiner; both options include black lanyards).
          </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h5> Asked and Answered</h5>
          <p>
            Q: What if I only want to use the Phone Lasso when I’m boating or
            hiking or skiing?
            <br /> A: No worries! Simply peel off the patch when you’re done
            with it. Just be sure to get some replacement patches so you have
            plenty on hand for your next great adventure! Q: What if someone
            yanks it – isn’t it dangerous? A: We thought of that, too, that’s
            why we use a breakaway ball adjuster. This allows the lanyard to
            pull through the ball, keeping you safe.
            <br />
            Got more questions? Just ask.
          </p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>
            Before you can use Phone Lasso four ways, you have to get it on your
            phone! Once you’ve figured out where you want your patch, on your
            phone or on your case, trim if necessary so it fits just right.
            Next, peel off the backing and get ready to see that insanely sticky
            patch in action! After you’ve got your patch placed, remove the clip
            and slide the tab through your charging port. Once through the port,
            return clip and add your wrist or neck lanyard, or even leave it as
            is. You’re now ready to use it four ways, on your neck, wrist,
            waist, or gear!
          </p>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default ProductDetails;
