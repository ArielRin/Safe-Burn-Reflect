// ethers.js

import { ethers } from "ethers";

const getEthersProvider = () => {
  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.ninicoin.io");

  return { provider };
};

export default getEthersProvider;
