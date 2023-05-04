import React from "react";
import { Accordion } from "react-bootstrap"; 
import Lottie from "lottie-react"; 
import error from '../../assets/11053-faq.json'

const Faq = () => {
  return (
    <div className="row mx-5 my-5"> 
    <h2 className="text-center my-5">Frequently Asked Questions (FAQ)</h2> 
    <hr />
      <div className="col-md-6">
        <Accordion className="pt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are some popular Thai dishes I should try?</Accordion.Header>
            <Accordion.Body>
            Thai cuisine is known for its rich flavors and aromatic ingredients. Some popular Thai dishes you should try include Pad Thai (stir-fried noodles with shrimp, tofu, or chicken), Green Curry (a spicy curry made with coconut milk, green chili paste, and various vegetables), Tom Yum Soup (a hot and sour soup with shrimp or chicken), Massaman Curry (a mild curry with potatoes, peanuts, and tender meat), and Mango Sticky Rice (a sweet dessert made with fresh mangoes and sticky rice).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Are there vegetarian or vegan options available?</Accordion.Header>
            <Accordion.Body>
            Yes, most Thai restaurants offer a variety of vegetarian and vegan options. Some popular choices include Vegetable Pad Thai, Green Curry with tofu and vegetables, Vegetable Tom Yum Soup, and Stir-Fried Mixed Vegetables. Additionally, many Thai dishes can be customized to accommodate dietary preferences or restrictions, so feel free to ask your server for recommendations or modifications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How spicy is Thai food?</Accordion.Header>
            <Accordion.Body>
            Thai food is known for its bold and spicy flavors, but the level of spiciness can vary. The spiciness in Thai cuisine is often achieved using chili peppers or chili paste. If you're sensitive to spice, you can request milder versions of dishes, or ask for the spiciness to be adjusted according to your taste. Thai restaurants typically provide a spice scale (usually from mild to extra spicy) to guide customers in choosing the level of heat they prefer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What are some common ingredients used in Thai cooking?</Accordion.Header>
            <Accordion.Body>
            Thai cuisine incorporates a variety of fresh herbs, spices, and unique ingredients. Some common ingredients used in Thai cooking include lemongrass, galangal (a type of ginger), kaffir lime leaves, Thai basil, fish sauce, coconut milk, tamarind paste, and shrimp paste. These ingredients contribute to the distinct flavors and aromatic profiles of Thai dishes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Do you offer takeout or delivery services?</Accordion.Header>
            <Accordion.Body>
            Most Thai restaurants offer takeout and/or delivery services for your convenience. You can call ahead to place your order or check if they have an online ordering system. Takeout and delivery options allow you to enjoy delicious Thai food in the comfort of your own home. Make sure to inquire about any specific procedures or delivery areas when placing your order.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="col-md-6">
      <Lottie className="mx-auto mt-5" style={{width:'200px',height:'200px'}} animationData={error} loop={true} />
      </div>
    </div>
  );
};

export default Faq;
