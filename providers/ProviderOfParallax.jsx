"use client";

import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

const ProviderOfParallax = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ProviderOfParallax;
