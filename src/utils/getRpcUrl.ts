import random from "lodash/random";

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NETWORK_URL];

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1);
  return nodes[randomIndex];
};

export default getNodeUrl;
