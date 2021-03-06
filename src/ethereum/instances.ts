import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';

import { NrtManagerFactory } from './typechain/NrtManagerFactory';
import { TimeAllyManagerFactory } from './typechain/TimeAllyManagerFactory';
import { ValidatorManagerFactory } from './typechain/ValidatorManagerFactory';
import { PrepaidEsFactory } from './typechain/PrepaidEsFactory';

// store your smart contract addresses here
const config = {
  ESN: {
    nrtManager: '0xd434fCAb3aBd4C91DE8564191c3b2DCDcdD33E37',
    timeallyManager: '0x21E8E3fB904d414047C9ED7Df5F67Bf0EeCCE7D3',
    timeallyStakingTarget: '0xF2bAa3D9b3F0321bE1Bf30436E58Ac30EeFADE5e',
    validatorSet: '0xA3C6cf908EeeebF61da6e0e885687Cab557b5e3F',
    validatorManager: '0x8418249278d74D46014683A8029Fd6fbC88482a1',
    randomnessManager: '0xE14D14bd8D0E2c36f5E4D00106417d8cf1000e22',
    blockRewardManager: '0x44F70d80642998F6ABc424ceAf1E706a479De8Ce',
    prepaidEs: '0x2AA786Cd8544c50136e5097D5E19F6AE10E02543',
  },
};

window.provider = new ethers.providers.JsonRpcProvider('https://node0.testnet.eraswap.network');

// if you are running a local blockchain to quickly test your contracts, you might find this useful
if (process.env.REACT_APP_LOCAL_BLOCKCHAIN === 'true') {
  config.ESN = {
    nrtManager: '0xAE519FC2Ba8e6fFE6473195c092bF1BAe986ff90',
    timeallyManager: '0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF',
    timeallyStakingTarget: '0x7d73424a8256C0b2BA245e5d5a3De8820E45F390',
    validatorSet: '0x08425D9Df219f93d5763c3e85204cb5B4cE33aAa',
    validatorManager: '0xA10A3B175F0f2641Cf41912b887F77D8ef34FAe8',
    randomnessManager: '0x6E05f58eEddA592f34DD9105b1827f252c509De0',
    blockRewardManager: '0x79EaFd0B5eC8D3f945E6BB2817ed90b046c0d0Af',
    prepaidEs: '0x2Ce636d6240f8955d085a896e12429f8B3c7db26',
  };
  window.provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
}

// Temporary wallet
if (process.env.REACT_APP_TEST_WALLET_PRIVATE_KEY) {
  window.wallet = new CustomWallet(process.env.REACT_APP_TEST_WALLET_PRIVATE_KEY, window.provider);
}

// NrtManagerFactory is typechain outputs got after contract compiles
// use of typescript react is recommended only because of typechain <3
// you will get type intellisence with your code editor if you have typescript installed (default in vscode)
window.nrtManagerInstance = NrtManagerFactory.connect(config.ESN.nrtManager, window.provider);

// you need this window.property marked in the global.ts file in src dir
window.timeallyManagerInstance = TimeAllyManagerFactory.connect(
  config.ESN.timeallyManager,
  window.provider
);

// you need this window.property marked in the global.ts file in src dir
window.validatorManagerInstance = ValidatorManagerFactory.connect(
  config.ESN.validatorManager,
  window.provider
);

// you need this window.property marked in the global.ts file in src dir
window.prepaidEsInstance = PrepaidEsFactory.connect(config.ESN.prepaidEs, window.provider);
