"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import { motion } from "framer-motion";



const Header = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { screenWidth, setToggle, toggle } = context;

  return (
    <div
      style={{
        backgroundImage:
          screenWidth < 376
            ? `url(/assets/mobile/bg-pattern-header.svg)`
            : screenWidth < 769
            ? `url(/assets/tablet/bg-pattern-header.svg)`
            : `url(/assets/desktop/bg-pattern-header.svg)`,
      }}
      className="w-full h-[136px] bg-cover md:h-[160px] lg:h-[162px]     relative    "
    >
      <div className="container w-[87.2%] md:w-[89.71%] lg:w-[77.03%] mx-auto pt-[32px] md:pt-[18px] lg:pt-[45px]">
        <div className="nav flex flex-row items-center justify-between">
          <svg width="115" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.612 24.08c1.022 0 1.967-.178 2.838-.531a6.998 6.998 0 002.29-1.498l.109 1.711h4.252V0h-4.502v9.49a7.369 7.369 0 00-2.251-1.387 7.394 7.394 0 00-2.736-.499c-1.458 0-2.764.356-3.915 1.07-1.152.712-2.056 1.689-2.712 2.93C.328 12.844 0 14.257 0 15.842c0 1.584.328 2.996.985 4.237.656 1.241 1.56 2.218 2.712 2.93 1.151.714 2.457 1.07 3.915 1.07zm1.017-3.961c-1.147 0-2.095-.407-2.845-1.22s-1.126-1.832-1.126-3.057c0-1.225.375-2.245 1.126-3.058.75-.813 1.698-1.22 2.845-1.22 1.146 0 2.094.407 2.844 1.22s1.126 1.833 1.126 3.058c0 1.225-.375 2.244-1.126 3.057-.75.813-1.698 1.22-2.844 1.22zm20.258 3.96c1.084 0 2.217-.18 3.4-.538 1.182-.36 2.378-1.02 3.587-1.98l-2.72-3.296a7.804 7.804 0 01-1.946 1.37c-.714.354-1.613.531-2.696.531-1.011 0-1.894-.274-2.65-.823a4.154 4.154 0 01-1.555-2.139h12.192v-1.378c0-1.595-.354-3.01-1.063-4.246a7.772 7.772 0 00-2.9-2.915c-1.224-.707-2.623-1.061-4.196-1.061-1.584 0-2.999.356-4.244 1.07a7.897 7.897 0 00-2.947 2.914c-.719 1.23-1.078 2.632-1.078 4.206 0 1.595.375 3.018 1.125 4.27.75 1.25 1.787 2.233 3.11 2.946 1.324.713 2.85 1.07 4.58 1.07zm2.985-9.41h-7.659a4.047 4.047 0 011.383-2.233c.704-.581 1.535-.872 2.494-.872.948 0 1.76.286 2.438.856.677.57 1.126 1.32 1.344 2.25zm16.273 9.093l6.174-15.841h-4.736l-2.61 7.715a23.244 23.244 0 00-.509 1.774c-.193.76-.351 1.452-.477 2.075h-.062a32.377 32.377 0 00-.43-2.09c-.182-.772-.346-1.358-.492-1.76l-2.83-7.714h-4.892l6.487 15.841h4.377zM58.399 5.07c.75 0 1.355-.232 1.813-.697.459-.464.688-1.077.688-1.837s-.23-1.373-.688-1.838C59.754.232 59.149 0 58.399 0s-1.355.232-1.813.697c-.459.465-.688 1.077-.688 1.838 0 .76.229 1.373.688 1.837.458.465 1.062.697 1.813.697zM54.882 32c1.865 0 3.293-.504 4.283-1.513.99-1.008 1.485-2.453 1.485-4.333V7.921h-4.502v17.71c0 .75-.237 1.34-.711 1.767-.474.428-1.076.642-1.806.642-.542 0-1.1-.122-1.672-.365v3.739c.99.39 1.964.586 2.923.586zm16.835-7.92c1.605 0 3.032-.357 4.283-1.07a7.903 7.903 0 002.962-2.93c.724-1.242 1.086-2.654 1.086-4.238 0-1.585-.362-2.997-1.086-4.238A7.903 7.903 0 0076 8.674c-1.25-.714-2.678-1.07-4.283-1.07-1.605 0-3.035.356-4.291 1.07a7.887 7.887 0 00-2.97 2.93c-.724 1.24-1.086 2.653-1.086 4.238 0 1.584.362 2.996 1.086 4.237a7.887 7.887 0 002.97 2.93c1.256.714 2.686 1.07 4.29 1.07zm0-3.961c-1.147 0-2.095-.407-2.845-1.22s-1.126-1.832-1.126-3.057c0-1.225.376-2.245 1.126-3.058.75-.813 1.698-1.22 2.845-1.22 1.146 0 2.094.407 2.845 1.22.75.813 1.125 1.833 1.125 3.058 0 1.225-.375 2.244-1.125 3.057-.75.813-1.699 1.22-2.845 1.22zm20.79 3.96c1.469 0 2.777-.356 3.923-1.07 1.146-.712 2.048-1.689 2.704-2.93.657-1.24.985-2.653.985-4.237 0-1.585-.328-2.997-.985-4.238-.656-1.241-1.558-2.218-2.704-2.93-1.146-.714-2.454-1.07-3.924-1.07-.98 0-1.89.166-2.735.499a7.369 7.369 0 00-2.251 1.386V0h-4.502v23.762h4.252l.11-1.71a6.978 6.978 0 002.297 1.497c.876.353 1.819.53 2.83.53zm-1.017-3.96c-1.146 0-2.094-.407-2.844-1.22s-1.126-1.832-1.126-3.057c0-1.225.375-2.245 1.126-3.058.75-.813 1.698-1.22 2.844-1.22 1.147 0 2.095.407 2.845 1.22s1.126 1.833 1.126 3.058c0 1.225-.375 2.244-1.126 3.057-.75.813-1.698 1.22-2.845 1.22zm17.304 3.96c1.136 0 2.173-.198 3.111-.594.938-.396 1.688-.969 2.25-1.719.564-.75.845-1.642.845-2.677 0-1.035-.263-1.872-.79-2.51a5.958 5.958 0 00-1.93-1.537c-.76-.386-1.5-.721-2.22-1.006a18.284 18.284 0 01-1.727-.777c-.484-.253-.727-.575-.727-.966 0-.348.175-.583.524-.705.35-.121.67-.182.961-.182.511 0 1.134.119 1.868.356.735.238 1.332.51 1.79.816l1.985-3.47a9.31 9.31 0 00-2.837-1.148 13.27 13.27 0 00-2.962-.356c-1.917 0-3.4.433-4.447 1.299-1.047.866-1.571 1.97-1.571 3.31 0 .972.247 1.765.742 2.377a5.807 5.807 0 001.845 1.497 28.35 28.35 0 002.196 1.038c.688.285 1.295.575 1.821.871.526.296.79.681.79 1.156 0 .328-.141.597-.422.808-.282.212-.652.317-1.11.317-.594 0-1.269-.177-2.025-.53-.755-.354-1.58-.832-2.477-1.434l-2.126 3.437c1.053.793 2.155 1.379 3.306 1.759 1.152.38 2.264.57 3.337.57z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>

          <div className=" flex flex-row gap-4 items-center">
            <motion.svg
            whileInView={{scale: !toggle ? [1, 1.5] : 1, rotate: !toggle ? 360 : 0}}
            transition={{duration: 2}}
            width="20" height="19" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z"
                fill={!toggle ? 'yellow' : "#FFF"}
                fill-rule="nonzero"
              />
            </motion.svg>

            {/* <span onClick={() => console.log('hiiiiiiiiii')}>switch</span>
            <input type="checkbox" name="" id="" /> */}

            <label className="switch">
              <input type="checkbox" onChange={() => setToggle(!toggle)} />
              <span className="slider round"></span>
            </label>

            <motion.svg 
            whileInView={{scale: toggle ? [1, 2] : 1, rotate: toggle ? 360 : 0}}
            transition={{duration: 2}}
            width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z"
                fill={toggle ? 'yellow' : "#FFF"}
                fill-rule="nonzero"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

