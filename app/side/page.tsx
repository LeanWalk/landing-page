import Image from "next/image";



const Side = () => {
    return ( <div className="
    flex
    p-10
    flex-col md:flex-row md:justify-evenly
   
    ">
        <div className="flex-col md:flex-row gap-6 md:px-10 flex">
            <div className="md:w-2/3 w-full">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/content/video3.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col border p-4 rounded-xl md:w-2/5">
                <div className="text-4xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-l
                from-yellow-300
                to-blue-300
                bg-clip-text
                font-bold
                text-transparent
                
                
                ">
                    Full Stack Solution 



                </div>

                <div className="md:px-20 space-y-6 flex-col items-center justify-center">
                    <div className="text-lg pt-10 flex gap-4">
                        <Image
                        src="/images/mobilewallet.png"
                        alt="feature-1"
                        width={60}
                        height={60}
                    
                        />
                        <div className="flex flex-col gap-2">
                        Send funds directly to mobile money wallets and linked bank accounts.

                        </div>


                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/link.png"
                            alt="feature-1"
                            width={60} 
                            height={60}
                            />
                            <div>
                            Send links as invoices and get paid instantly.

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/application.png"
                            alt="feature-1"
                            width={60} 
                            height={60}
                            />
                            <div>
                            Get full stakc application with your logo and brand.

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/anti-theft.png"
                            alt="feature-1"
                            width={60} 
                            height={60}
                            />
                            <div>
                            Best in class security to protect your data and your customers.

                            </div>
                    </div>

                    </div>






                </div>


            </div>

        </div>
    

    </div> );
}
 
export default Side;