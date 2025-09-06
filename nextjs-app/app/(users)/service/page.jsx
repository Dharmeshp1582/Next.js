"use client";

import React, { useEffect, useRef } from "react";
import style from "./service.module.css"; // Importing CSS module styles
import Image from "next/image";
import user from "@/public/user.png";
import { motion } from "motion/react";
import gsap from "gsap";

// export const metadata = {
//   title: "Service Page",
//   description: "Explore our services and offerings",
//   authors: [{name:"Dharmesh Patel"},{name:"Harsh Patel",url:"dharmesh-patel.vercel.app"}],
//   keywords: ["nextjs", "reactjs", "web development","fullStack"] //these are words for identify or search your page
// };

const Service = () => {
  const cardRef = useRef();
  const hoverTween = useRef(null);

  useEffect(() => {
    gsap.context(() => {
      const element = cardRef.current;
      if (!element) return;
      //set
      gsap.set(element, { opacity: 0, y: 50, scale: 1 });

      //to
      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "easeInOut",
        duration: 1.5,
      });
    }, cardRef.current);
    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = () => {
  if(!cardRef.current) return

    if (hoverTween.current) {
      hoverTween.current.kill();
    }
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.5,
      y: -50,
      scale: 1.1,
      ease: "easeInOut",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    });
  };

  const handleMouseLeave = () => {
    if(!cardRef.current) return

    if (hoverTween.current) {
      hoverTween.current.kill();
    }
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.5,
      y: 0,
      scale: 1.1,
      ease: "easeInOut",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    });
  };

  return (
    <section className="font-roboto">
      <h1 className={style.common_heading}>Hello from Services page</h1>
      <section className="">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Team
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* Team member 1 */}
            <motion.div
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Image
                  src="/coder.png"
                  alt="Team Member"
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>
              <motion.h3
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                className="text-lg font-semibold text-center text-gray-800"
              >
                Dharmesh Patel
              </motion.h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Web Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                React.js | Next.js | Tailwind CSS
              </p>
            </motion.div>

            {/* Team member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">SB</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Sandip Bharadva
              </h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Web Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Python Developer
              </p>
            </div>

            {/* Team member 3 */}
            <div
              ref={cardRef} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all"
            >
              <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">HM</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Harsh Patel
              </h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Web Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Java | Springboot | Hibernate
              </p>
            </div>

            {/* Team member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all">
              <div className="w-24 h-24 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">HD</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Hemang Prajapati
              </h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Web Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                React.js | Tailwind CSS
              </p>
            </div>

            {/* Team member 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">JR</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Jigar Raval
              </h3>
              <p className="text-sm text-center text-gray-600 mt-2">
                Web Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                MERN stack enthusiast
              </p>
            </div>

            {/* Team member 6 */}
            <div className="bg-white  rounded-lg shadow-md hover:shadow-lg duration-300 hover:-translate-y-2 transition-all">
              <div className="relative w-full h-full bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={user}
                  alt="Team Member"
                  fill={true}
                  quality={100}
                  priority={false}
                  placeholder="blur"
                  blurDataURL=""
                />
              </div>
              {/* <h3 className="text-lg font-semibold text-center text-gray-800">Jayesh Raval</h3>
       <p className="text-sm text-center text-gray-600 mt-2">Web Developer</p>
       <p className="text-xs text-gray-500 text-center mt-1">MERN stack developer</p> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Service;
