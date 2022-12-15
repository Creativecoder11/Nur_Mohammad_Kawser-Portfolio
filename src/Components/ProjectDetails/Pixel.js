import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import project1 from "../../Assets/pixel/Pixel-1.png"
import project2 from "../../Assets/pixel/Pixel-2.png"
import project3 from "../../Assets/pixel/Pixel-3.png"
import project4 from "../../Assets/pixel/Pixel-4.png"

const Pixel = () => {
    return (
        <section className="m-0 w-3/4 mx-auto">
          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="lg:col-span-1 w-full">
                  <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img src={project1} alt={'title'} />
                    </div>
                    <div>
                      <img src={project2} alt={'title'} />
                    </div>
                    <div>
                      <img src={project3} alt={'title'} />
                    </div>
                    <div>
                      <img src={project4} alt={'title'} />
                    </div>
                  </Carousel>
              </div>

              <div className="lg:col-span-1 w-full text-left">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-white">Luxury Wheel Project</h1>
                  <p className="text-white text-sm">(Nov 12 - Nov -27)/2022</p>
                </div>
                <p className="text-white my-3">
                 Our Luxuey Wheel website vision is to buy and sell modern cars that define quality and luxury for the 21st century. Applying our expertise in this industry, we aspire to transform the exotic car market, where cars are the ultimate expression of modern dynamism and luxury.
                </p>
                <div className="my-3 flex items-center gap-5">
                  <a
                    href='https://luxury-wheel.web.app/'
                    className="text-white btn-primary text-center bg-red-600 py-2 rounded  uppercase text-xs px-5 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    href={'code'}
                    className="text-white btn-success text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client Code
                  </a>
                  <a
                    href={'code'}
                    className="text-white btn-success text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Server Code
                  </a>
                </div>
                <h2 className="text-white font-bold  uppercase">📑Features</h2>
                <ul className="text-white my-3 flex flex-col gap-3">
                  <li>
                    <p>1. Luxury Website made for Buy and Sell Used Car and whole website created react js functionality.</p>
                  </li>
                  <li>
                    <p>2. There are three types of roles on this website Admin, Seller, and Buyer. Each role has Different Functionality to use this website..</p>
                  </li>
                  <li>
                    <p>3. A buyer can buy a used car with his information and he/she should pay it with an online card payment.</p>
                  </li>
                  <li>
                    <p>4. A seller can add a product and he/she can manage the product. Seller also Advertise their product on the homepage and also delete it.</p>
                  </li>
                  <li>
                    <p>5. This Website Admin Role has Very Clean Functionality. Admin can see all buyers and sellers or he/she can add someone admin to this website. A buyer can report an item to the admin and the admin can show the reported item.</p>
                  </li>
                  <li>
                    <p>6. Luxury website users can easily buy and sell a used car on this platform. This website was fully created responsively.</p>
                  </li>
                </ul>
                <h2 className="text-white font-bold  uppercase">✈️Technology</h2>
                <div className="">
                  <ul className="flex flex-wrap gap-5">
                    <li className="glass px-3 border-white rounded text-sm">React JS</li>
                    <li className="glass px-3 border-white rounded text-sm">Node JS</li>
                    <li className="glass px-3 border-white rounded text-sm">Express JS</li>
                    <li className="glass px-3 border-white rounded text-sm">MongoDB</li>
                    <li className="glass px-3 border-white rounded text-sm">Firebase</li>
                    <li className="glass px-3 border-white rounded text-sm">Stripe</li>
                    <li className="glass px-3 border-white rounded text-sm">JWT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
};

export default Pixel;