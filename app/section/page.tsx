'use client'

import React from "react";
import Image from "next/image";


const features = [
    {
        name: "Customizable stack",
        description:
          "Choose from wide-range of features, and change anything you want to create your remittance brand.",
        image: "/images/iconcloud.png",
        alt: "Customizable",
      },
      {
        name: "Plug and play",
        description:
          "Offer different options for payout, and integrated with popular mobile money carriers.",
        image: "/images/plug-and-play.png",
        alt: "Customizable",
      },
      {
        name: "End-to-end transfers.",
        description:
          "Delight your cusotmers with end-to-end transfers faster, and cheaper , and conviniently.",
        image: "/images/end-to-end.png",
        alt: "Customizable",
      },
      {
        name: "Get paid hassle free",
        description:
          "Allow your cusotmers to pay hassle-frees, and collect funds uninterupted.",
        image: "/images/checked.png",
        alt: "Customizable",
      },
      {
        name: "Loyality",
        description:
          "Set up your coupon program and start rewarding your customers for their transactions.",
        image: "/images/coupon.png",
        alt: "Customizable",
      },
      {
        name: "Customer Support",
        image: "/images/iconsupport.png",
        description: "Manage cusotmer support with excellency and chat your customers directly.",
        alt: "Customizable",
      },
    ]

const Section = () => {
    return ( 
    <div className="">
        <div className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
        
        ">
            <div className="p-5 justify-center md:w-1/3">
                <div className="
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10
                
                ">
                Build your application with PayVal Software, and go live effortless.

                </div>
                <div className="text-2xl mb-8">
                Built for high street agents, PayVal is the only software you need to build digital money transfer brand from the ground-ups.

                </div>
                <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
                        Get Started
                </button>
                </div>
                

                <video className="rounded-xl md:w-2/5 p-4 md:p-0 "  autoPlay muted loop >
                    <source src="/content/video2.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col items-center justify-center">
                <div className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent

                
                
                ">
               Product Features


                </div>

                <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
                    {features.map((feature, index) => (
                        <div
                        key={index}
                        className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
                        >
                            <div className="
                            text-gray-600 text-3xl font-bold
                            ">
                                <Image
                                src={feature.image}
                                alt={feature.alt}
                                width={300}
                                height={300}
                                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                />
                                <div>
                                    <div className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    ">{
                                    feature.name}
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                                        {feature.description}




                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>



  );
}
 
export default Section;