"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
export const copyPopup = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const copyPopup2 = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: -10, opacity: 0 },
};

const PopUpModal = ({ handelShowModal }: { handelShowModal: () => void }) => {
  return (
    <AnimatePresence>
      <div className="absolute -bottom-2 right-6 z-10 p-2 rounded-md bg-gray-700 text-white">
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-brown-900 to-yellow-50 opacity-20"></div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        >
          <div className="bg-[url('/background-reward-popup.png')] justify-center text-center p-8 rounded-lg shadow-lg max-w-3xl  w-full h-4/6 relative">
            {/* Close Button */}
            <button
              onClick={handelShowModal}
              className="absolute top-4 right-4 text-white border-solid border-2 rounded-md border-white p-1 text-l font-light"
            >
              ✕
            </button>
            {/* Header */}
            <div className="text-center mb-6">
              <h2
                className="text-[#F3BA2F] text-3xl font-black"
                style={{ textShadow: "0px 0px 31px rgba(243, 186, 47, 0.69)" }}
              >
                Congratulations!
              </h2>

              <p className="text-[#F3BA2F] font-medium text-2xl">
                Command completed Successfully!
              </p>
            </div>
            {/* Message */}
            <p className="text-sm font-thin text-yellow-100 mb-4">
              You have successfully completed a command! Here are your
              well-earned rewards. Keep exploring the Command Center for more
              exciting missions and bigger rewards! You have gained:
            </p>
            {/* Divider */}
            <div className="flex items-center justify-center my-4 p-5">
              <div className="w-1/4">
                <Image src="/Arrow2.png" alt="arrow" width={400} height={10} />
              </div>
              <div className="w-1/4">
                <span className="text-white text-md font-thin">Rewards</span>
              </div>
              <div className=" w-1/4">
                <Image
                  src="/firstArrow.png"
                  alt="arrow"
                  width={400}
                  height={10}
                />
              </div>
            </div>
            {/* Rewards Icons */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="text-center relative">
                <svg
                  width="146"
                  height="157"
                  viewBox="0 0 146 157"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-0"
                >
                  <path
                    d="M142.229 8.82885L137.179 3.7553C136.054 2.62518 134.546 2 132.943 2H30.242C28.6624 2 27.1306 2.62518 26.0057 3.7553L21.3625 8.42009C20.2377 9.55021 18.7059 10.1754 17.1262 10.1754H11.0231C9.49132 10.1754 8.00742 10.7765 6.88252 11.8345L3.86685 14.744C2.67015 15.8741 2 17.4611 2 19.0962V88.1061V90.5106V143.915C2 145.502 2.62228 147.041 3.74718 148.171L8.79724 153.245C9.92213 154.375 11.4539 155 13.0335 155H115.758C117.338 155 118.869 154.375 119.994 153.245L124.637 148.58C125.762 147.45 127.294 146.825 128.874 146.825H134.953C136.485 146.825 137.969 146.223 139.094 145.165L142.133 142.256C143.33 141.126 144 139.539 144 137.904V90.5347V88.1301V13.0849C144 11.4979 143.354 9.95898 142.229 8.82885Z"
                    stroke="#F3BA2F"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M2 68L6.19689 64.1139C6.71503 63.6342 7 62.9865 7 62.2909V36.6207C7 35.2534 6.40415 33.934 5.36788 32.9745L2.15544 30L2 68Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M31 155L35.1151 150.82C35.6396 150.287 36.3255 150 37.0517 150L96.98 150C98.4324 150 99.8445 150.574 100.853 151.639L104 154.836L31 155Z"
                    fill="#F3BA2F"
                  />
                </svg>
                <svg
                  width="143"
                  height="25"
                  viewBox="0 0 143 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-18px]  z-0"
                >
                  <path
                    d="M11.5387 25L0.499542 12.5704C-0.000457561 8 -0.13974 0.499998 2.32495 0.499998L15.825 0.499998L21.825 0.499999L140.5 0.5C145.429 0.5 142.004 10.5 138.496 14L129.002 15L115 23.4392L11.5387 25Z"
                    fill="#F3BA2F"
                  />
                </svg>
                <p className="text-black mt-[-25px] font-bold z-10 uppercase">
                  20 XP
                </p>
                <Image
                  src="/reward2.png"
                  alt="reward"
                  width={125}
                  height={100}
                  className="z-10 mt-[-135px] pl-7"
                />
              </div>
              <div className="text-center relative">
                <svg
                  width="146"
                  height="157"
                  viewBox="0 0 146 157"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-0"
                >
                  <path
                    d="M142.229 8.82885L137.179 3.7553C136.054 2.62518 134.546 2 132.943 2H30.242C28.6624 2 27.1306 2.62518 26.0057 3.7553L21.3625 8.42009C20.2377 9.55021 18.7059 10.1754 17.1262 10.1754H11.0231C9.49132 10.1754 8.00742 10.7765 6.88252 11.8345L3.86685 14.744C2.67015 15.8741 2 17.4611 2 19.0962V88.1061V90.5106V143.915C2 145.502 2.62228 147.041 3.74718 148.171L8.79724 153.245C9.92213 154.375 11.4539 155 13.0335 155H115.758C117.338 155 118.869 154.375 119.994 153.245L124.637 148.58C125.762 147.45 127.294 146.825 128.874 146.825H134.953C136.485 146.825 137.969 146.223 139.094 145.165L142.133 142.256C143.33 141.126 144 139.539 144 137.904V90.5347V88.1301V13.0849C144 11.4979 143.354 9.95898 142.229 8.82885Z"
                    stroke="#F3BA2F"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M2 68L6.19689 64.1139C6.71503 63.6342 7 62.9865 7 62.2909V36.6207C7 35.2534 6.40415 33.934 5.36788 32.9745L2.15544 30L2 68Z"
                    fill="#F3BA2F"
                  />
                  <path
                    d="M31 155L35.1151 150.82C35.6396 150.287 36.3255 150 37.0517 150L96.98 150C98.4324 150 99.8445 150.574 100.853 151.639L104 154.836L31 155Z"
                    fill="#F3BA2F"
                  />
                </svg>
                <svg
                  width="143"
                  height="25"
                  viewBox="0 0 143 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-18px]  z-0"
                >
                  <path
                    d="M11.5387 25L0.499542 12.5704C-0.000457561 8 -0.13974 0.499998 2.32495 0.499998L15.825 0.499998L21.825 0.499999L140.5 0.5C145.429 0.5 142.004 10.5 138.496 14L129.002 15L115 23.4392L11.5387 25Z"
                    fill="#F3BA2F"
                  />
                </svg>
                <p className="text-black mt-[-25px] font-bold z-10">
                  250,000,000
                </p>
                <Image
                  src="/reward1.png"
                  alt="reward"
                  width={125}
                  height={100}
                  className="z-10 mt-[-135px] pl-7"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PopUpModal;
