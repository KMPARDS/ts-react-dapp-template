import { ethers } from 'ethers';
import { NrtManager } from './ethereum/typechain/NrtManager';
import { TimeAllyManager } from './ethereum/typechain/TimeAllyManager';
import { ValidatorManager } from './ethereum/typechain/ValidatorManager';
import { PrepaidEs } from './ethereum/typechain/PrepaidEs';
import { CustomWallet } from './ethereum/custom-wallet';

// mark the typings of your global variables
declare global {
  interface Window {
    provider: ethers.providers.JsonRpcProvider;
    wallet: CustomWallet | undefined; // marking this as undefined helps to prevent many runtime bugs when wallet is not loaded
    nrtManagerInstance: NrtManager;
    timeallyManagerInstance: TimeAllyManager;
    validatorManagerInstance: ValidatorManager;
    prepaidEsInstance: PrepaidEs;
    ethereum: ethers.providers.ExternalProvider;
  }
}
