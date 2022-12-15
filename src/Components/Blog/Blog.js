import React from 'react';
import './Blog.css'
import { HiCode } from "react-icons/hi"
import { MdOutlineDevices } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const Blog = () => {
    return (
          <section id='blog'>
            <h5>Get To Know</h5>
            <h2>Blog</h2>
            <div className="blog_cards w-2/4">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
              >
              <p className='text-2xl animate-bounce'>Coming Soon</p>
              </div>
          </div>
          </section>
    );
};

export default Blog;