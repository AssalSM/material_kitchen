"use client";

import Link from "next/link";
import "./page.css";
import {  useState } from "react";


import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const myproducts = [
  {
    name: "protective cloth",
    prix: "99MAD",
    description: "1 pieces",
    img: "/protective.jpeg",
  },
  {
    name: "material kitchen",
    img: "/material.jpeg",
    prix: "169MAD",
    description: "12 pieces",
  },
  {
    name: "carbon pro stainlees steel",
    prix: "799MAD",
    img: "/carbon.jpeg",
    description: "13 pieces",
  },
  {
    name: "plates",
    prix: "99MAD",
    img: "/plates.jpeg",
    description: "3 pieces",
  },
  {
    name: "Under sink storage lifter kitchen",
    prix: "99MAD",
    img: "/Under.jpeg",
    description: "1 pieces",
  },
  {
    name: "slicer vegetable",
    prix: "99MAD",
    img: "/slicer.jpeg",
    description: "1 pieces",
  },
];


export default function Home({ item }) {
  const [arr, setArr] = useState(myproducts);
  return (
    <main className="a">
      <div className=" items page-import  ">
       <div className=" flex items between">
         <h1>material kitchen</h1>
         <Link className="contact flex items "  href={"https://wa.me/+212708768573"}>
         <WhatsAppIcon style={{fontSize:"40px"}} />
         <h1 >contact</h1>
      
         </Link>
       </div>
        <div className="containr flex">
          <div className="containr2">
            <h1 className="h1">welcome to my store</h1>
            <p className="paragraph">
              Upgrade your kitchen experience with our premium line of
              appliances, designed to elevate your culinary journey. From sleek
              and efficient coffee makers to powerful blenders and
              state-of-the-art cookware, our products bring style and
              functionality to Moroccan kitchens. Transform everyday cooking
              into a delightful adventure – discover the perfect blend of
              innovation and tradition with our kitchen essentials.
            </p>
          </div>
         { /*<img className="containr3" src="./logo12as.png" alt="dd" />*/}
        </div>
        <h2>products :</h2>
      </div>
      <div>
        <section className="  flex right-section">
          {arr.map((item) => {
            return (
              <article key={item.imgpath} className="card">
                <img src={item.img} alt="ddd" />
                <div className="flex items between">
                  <div style={{ width: "266px" }} className="  box">
                    <h1 className="title">{item.name}</h1>
                    <p className="subtitle">{item.description}</p>
                  </div>
                  <div className="prix">{item.prix}</div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
      <div>
        <div className="flex"><h1>contact in : </h1>  <Link className="contact flex items "  href={"https://wa.me/+212708768573"}>
         <WhatsAppIcon style={{fontSize:"40px"}} />
         <h1 >whatsapp</h1>
      
         </Link> </div>
      </div>
    </main>
  );
}
