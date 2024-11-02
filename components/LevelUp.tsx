"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import PopUpModal from "./PopUpModal";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";

const LevelUp = () => {
  const [showModal, setShowModal] = useState(false);
  const handelShowModal = () => {
    setShowModal(!showModal);
  };
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 70 ? prev + 1 : 70));
    }, 70);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative isolate overflow-hidden bg-yellow-900 h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-brown-900 to-yellow-50 opacity-20"></div>
        </div>
        <div className="mt-[-50px] flex  h-screen items-center justify-center">
          <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <Fireworks />
            <h1 className="mt-3 sm:mt-15 text-3xl font-bold tracking-tight gradient-text sm:text-5xl uppercase">
              Level Up
            </h1>

            <Image
              src="/badge-icon.png"
              alt="Level Badge"
              width={150}
              height={150}
              className="mx-auto mt-12"
            />
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-brown-500 sm:text-3xl">
              Corporal
            </h1>
            <div className="relative p-4 mt-5 max-w-sm mx-auto">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-white">
                    XP:<span className="text-orange-400 pr-0.5"> 34,500</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-md font-semibold inline-block text-white">
                    50,000
                  </span>
                </div>
              </div>
              <div className="flex rounded-full h-4 bg-[#35241C]">
                <div
                  style={{ width: `${progress}%` }}
                  className="rounded-full progress-bar h-2 m-1"
                ></div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="claimButton px-3.5 py-2.5 text-md font-semibold text-brown-800 shadow-lg"
                onClick={() => setShowModal(true)}
              >
                Claim NFT Badge
              </motion.button>

              {showModal && <PopUpModal handelShowModal={handelShowModal} />}
            </div>
            <p className="mt-5 text-md font-bold text-brown-500">
              You&apos;ve leveled up and earned a new badge!
            </p>
            <p className="text-md font-thin leading-8 text-yellow-100">
              Claim your{" "}
              <span className="font-semibold text-yellow-600">NFT badge</span>{" "}
              now, or retrieve it later from your Inventory.
            </p>
            <p className="mt-5 pb-10 text-xs font-thin text-yellow-100">
              To claim your new badge, you&apos;ll need to transfer your
              previous badge from your wallet for it to be burned in exchange
              for the new one. If there&apos;s insufficient gas in your wallet,
              the transaction will be canceled. You can always visit your
              Inventory and claim your badge at any time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default LevelUp;
