export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  56: {
    DAI_ADDRESS: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", // duplicate
    USDC_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    HEC_ADDRESS: "0x7D8461077e7D774a12F407124Af3c7CC06AD3Cbb",
    STAKING_ADDRESS: "0xE68b55ffcEEA568562Ba0D5Fa019815A154531b8", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xa87dBD7B56c1F65aa537bF5540d7Dec9CB310C32", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40",
    OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146",
    SHEC_ADDRESS: "0x0dE7613296ba41e7Eea81F8442581776ea3daC95",
    OLD_SHEC_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0x0b8D3Bd8df47da1d3635C90b4B71EBD90E769654",
    BONDINGCALC_ADDRESS: "0xbe88d6c88f572435bF5B6b00a1464f7E3248864F",
    TREASURY_ADDRESS: "0x4DcA68AdEE7C4eA75EAFD20d8b1755e3dF8013D9",
    REDEEM_HELPER_ADDRESS: "0x656dF1F51AD2ab96F271356A792BADb8c95b9bb3",
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
