/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface NrtManagerInterface extends ethers.utils.Interface {
  functions: {
    'BURN_ADDR()': FunctionFragment;
    'SECONDS_IN_MONTH()': FunctionFragment;
    'addToBurnPool()': FunctionFragment;
    'addToLuckPool()': FunctionFragment;
    'adminMode()': FunctionFragment;
    'annualNRT()': FunctionFragment;
    'burnPoolBalance()': FunctionFragment;
    'currentNrtMonth()': FunctionFragment;
    'getBurnAmount()': FunctionFragment;
    'getPerThousand(uint256)': FunctionFragment;
    'getPerThousands()': FunctionFragment;
    'getPlatform(uint256)': FunctionFragment;
    'getPlatformDetails()': FunctionFragment;
    'getPlatforms()': FunctionFragment;
    'lastReleaseTimestamp()': FunctionFragment;
    'luckPoolBalance()': FunctionFragment;
    'releaseMonthlyNRT()': FunctionFragment;
    'setInitialValues(bool,address[],uint256[])': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'BURN_ADDR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SECONDS_IN_MONTH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addToBurnPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addToLuckPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'adminMode', values?: undefined): string;
  encodeFunctionData(functionFragment: 'annualNRT', values?: undefined): string;
  encodeFunctionData(functionFragment: 'burnPoolBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentNrtMonth', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBurnAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPerThousand', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPerThousands', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPlatform', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPlatformDetails', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPlatforms', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastReleaseTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'luckPoolBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'releaseMonthlyNRT', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setInitialValues',
    values: [boolean, string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: 'BURN_ADDR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SECONDS_IN_MONTH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addToBurnPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addToLuckPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'adminMode', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'annualNRT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnPoolBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentNrtMonth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBurnAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPerThousand', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPerThousands', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatform', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatformDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatforms', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastReleaseTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'luckPoolBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'releaseMonthlyNRT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInitialValues', data: BytesLike): Result;

  events: {
    'Burn(uint256,uint256)': EventFragment;
    'BurnPoolAccrue(uint256,uint256,address)': EventFragment;
    'LuckPoolAccrue(uint256,uint256,address)': EventFragment;
    'NRT(uint256,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BurnPoolAccrue'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LuckPoolAccrue'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NRT'): EventFragment;
}

export class NrtManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NrtManagerInterface;

  functions: {
    /**
     * A destination for tokens which are destined to be unspendable forever.
     */
    BURN_ADDR(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    SECONDS_IN_MONTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Adds tokens to burn pool.
     */
    addToBurnPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

    /**
     * Adds tokens to luck pool.
     */
    addToLuckPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

    /**
     * To be used for migrating the existing stakings from existing ETH contract.
     */
    adminMode(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Annual amount which is released monthly during first year. On end         of a year, this amount decreases by 10%.
     */
    annualNRT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Amount of tokens accrued for burning as per Era Swap Whitepaper.
     */
    burnPoolBalance(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Number of NRT releases that have been happened.
     */
    currentNrtMonth(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Gets tokens allowed to be burned during upcoming NRT.
     */
    getBurnAmount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Gets NRT share of a platform.
     * @param _perThousandIndex : Index of platform.
     */
    getPerThousand(
      _perThousandIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Gets all nrt shares of platforms.
     */
    getPerThousands(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    /**
     * Gets platform address by index.
     * @param _platformIndex : Index of platform.
     */
    getPlatform(
      _platformIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets platforms and their NRT share.
     */
    getPlatformDetails(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
      1: BigNumber[];
    }>;

    /**
     * Gets all platform addresses.
     */
    getPlatforms(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    /**
     * Timestamp of the block in which last NRT transaction was sealed.
     */
    lastReleaseTimestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Amount of tokens accrued for the month by luck as per Era Swap Whitepaper.
     */
    luckPoolBalance(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Sends NRT share to the platforms and burns tokens from burn pool as per Era Swap Whitepaper.
     */
    releaseMonthlyNRT(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Sets initial enviornment values.
     * @param _adminMode : Status of admin mode.
     * @param _perThousands : Corresponding perThousand NRT share.
     * @param _platforms : Addresses of platform smart contracts or wallets.
     */
    setInitialValues(
      _adminMode: boolean,
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * A destination for tokens which are destined to be unspendable forever.
   */
  BURN_ADDR(overrides?: CallOverrides): Promise<string>;

  SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Adds tokens to burn pool.
   */
  addToBurnPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

  /**
   * Adds tokens to luck pool.
   */
  addToLuckPool(overrides?: PayableOverrides): Promise<ContractTransaction>;

  /**
   * To be used for migrating the existing stakings from existing ETH contract.
   */
  adminMode(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Annual amount which is released monthly during first year. On end         of a year, this amount decreases by 10%.
   */
  annualNRT(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Amount of tokens accrued for burning as per Era Swap Whitepaper.
   */
  burnPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Number of NRT releases that have been happened.
   */
  currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets tokens allowed to be burned during upcoming NRT.
   */
  getBurnAmount(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets NRT share of a platform.
   * @param _perThousandIndex : Index of platform.
   */
  getPerThousand(_perThousandIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets all nrt shares of platforms.
   */
  getPerThousands(overrides?: CallOverrides): Promise<BigNumber[]>;

  /**
   * Gets platform address by index.
   * @param _platformIndex : Index of platform.
   */
  getPlatform(_platformIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * Gets platforms and their NRT share.
   */
  getPlatformDetails(
    overrides?: CallOverrides
  ): Promise<{
    0: string[];
    1: BigNumber[];
  }>;

  /**
   * Gets all platform addresses.
   */
  getPlatforms(overrides?: CallOverrides): Promise<string[]>;

  /**
   * Timestamp of the block in which last NRT transaction was sealed.
   */
  lastReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Amount of tokens accrued for the month by luck as per Era Swap Whitepaper.
   */
  luckPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Sends NRT share to the platforms and burns tokens from burn pool as per Era Swap Whitepaper.
   */
  releaseMonthlyNRT(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Sets initial enviornment values.
   * @param _adminMode : Status of admin mode.
   * @param _perThousands : Corresponding perThousand NRT share.
   * @param _platforms : Addresses of platform smart contracts or wallets.
   */
  setInitialValues(
    _adminMode: boolean,
    _platforms: string[],
    _perThousands: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * A destination for tokens which are destined to be unspendable forever.
     */
    BURN_ADDR(overrides?: CallOverrides): Promise<string>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Adds tokens to burn pool.
     */
    addToBurnPool(overrides?: CallOverrides): Promise<void>;

    /**
     * Adds tokens to luck pool.
     */
    addToLuckPool(overrides?: CallOverrides): Promise<void>;

    /**
     * To be used for migrating the existing stakings from existing ETH contract.
     */
    adminMode(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Annual amount which is released monthly during first year. On end         of a year, this amount decreases by 10%.
     */
    annualNRT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Amount of tokens accrued for burning as per Era Swap Whitepaper.
     */
    burnPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Number of NRT releases that have been happened.
     */
    currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets tokens allowed to be burned during upcoming NRT.
     */
    getBurnAmount(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets NRT share of a platform.
     * @param _perThousandIndex : Index of platform.
     */
    getPerThousand(_perThousandIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets all nrt shares of platforms.
     */
    getPerThousands(overrides?: CallOverrides): Promise<BigNumber[]>;

    /**
     * Gets platform address by index.
     * @param _platformIndex : Index of platform.
     */
    getPlatform(_platformIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * Gets platforms and their NRT share.
     */
    getPlatformDetails(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
      1: BigNumber[];
    }>;

    /**
     * Gets all platform addresses.
     */
    getPlatforms(overrides?: CallOverrides): Promise<string[]>;

    /**
     * Timestamp of the block in which last NRT transaction was sealed.
     */
    lastReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Amount of tokens accrued for the month by luck as per Era Swap Whitepaper.
     */
    luckPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Sends NRT share to the platforms and burns tokens from burn pool as per Era Swap Whitepaper.
     */
    releaseMonthlyNRT(overrides?: CallOverrides): Promise<void>;

    /**
     * Sets initial enviornment values.
     * @param _adminMode : Status of admin mode.
     * @param _perThousands : Corresponding perThousand NRT share.
     * @param _platforms : Addresses of platform smart contracts or wallets.
     */
    setInitialValues(
      _adminMode: boolean,
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Burn(nrtMonth: BigNumberish | null, value: null): EventFilter;

    BurnPoolAccrue(nrtMonth: BigNumberish | null, value: null, sender: null): EventFilter;

    LuckPoolAccrue(nrtMonth: BigNumberish | null, value: null, sender: null): EventFilter;

    NRT(nrtMonth: BigNumberish | null, value: null, releaser: null): EventFilter;
  };

  estimateGas: {
    /**
     * A destination for tokens which are destined to be unspendable forever.
     */
    BURN_ADDR(overrides?: CallOverrides): Promise<BigNumber>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Adds tokens to burn pool.
     */
    addToBurnPool(overrides?: PayableOverrides): Promise<BigNumber>;

    /**
     * Adds tokens to luck pool.
     */
    addToLuckPool(overrides?: PayableOverrides): Promise<BigNumber>;

    /**
     * To be used for migrating the existing stakings from existing ETH contract.
     */
    adminMode(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Annual amount which is released monthly during first year. On end         of a year, this amount decreases by 10%.
     */
    annualNRT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Amount of tokens accrued for burning as per Era Swap Whitepaper.
     */
    burnPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Number of NRT releases that have been happened.
     */
    currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets tokens allowed to be burned during upcoming NRT.
     */
    getBurnAmount(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets NRT share of a platform.
     * @param _perThousandIndex : Index of platform.
     */
    getPerThousand(_perThousandIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets all nrt shares of platforms.
     */
    getPerThousands(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets platform address by index.
     * @param _platformIndex : Index of platform.
     */
    getPlatform(_platformIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets platforms and their NRT share.
     */
    getPlatformDetails(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets all platform addresses.
     */
    getPlatforms(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Timestamp of the block in which last NRT transaction was sealed.
     */
    lastReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Amount of tokens accrued for the month by luck as per Era Swap Whitepaper.
     */
    luckPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Sends NRT share to the platforms and burns tokens from burn pool as per Era Swap Whitepaper.
     */
    releaseMonthlyNRT(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Sets initial enviornment values.
     * @param _adminMode : Status of admin mode.
     * @param _perThousands : Corresponding perThousand NRT share.
     * @param _platforms : Addresses of platform smart contracts or wallets.
     */
    setInitialValues(
      _adminMode: boolean,
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * A destination for tokens which are destined to be unspendable forever.
     */
    BURN_ADDR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Adds tokens to burn pool.
     */
    addToBurnPool(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    /**
     * Adds tokens to luck pool.
     */
    addToLuckPool(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    /**
     * To be used for migrating the existing stakings from existing ETH contract.
     */
    adminMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Annual amount which is released monthly during first year. On end         of a year, this amount decreases by 10%.
     */
    annualNRT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Amount of tokens accrued for burning as per Era Swap Whitepaper.
     */
    burnPoolBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Number of NRT releases that have been happened.
     */
    currentNrtMonth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets tokens allowed to be burned during upcoming NRT.
     */
    getBurnAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets NRT share of a platform.
     * @param _perThousandIndex : Index of platform.
     */
    getPerThousand(
      _perThousandIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets all nrt shares of platforms.
     */
    getPerThousands(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets platform address by index.
     * @param _platformIndex : Index of platform.
     */
    getPlatform(
      _platformIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets platforms and their NRT share.
     */
    getPlatformDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets all platform addresses.
     */
    getPlatforms(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Timestamp of the block in which last NRT transaction was sealed.
     */
    lastReleaseTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Amount of tokens accrued for the month by luck as per Era Swap Whitepaper.
     */
    luckPoolBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Sends NRT share to the platforms and burns tokens from burn pool as per Era Swap Whitepaper.
     */
    releaseMonthlyNRT(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Sets initial enviornment values.
     * @param _adminMode : Status of admin mode.
     * @param _perThousands : Corresponding perThousand NRT share.
     * @param _platforms : Addresses of platform smart contracts or wallets.
     */
    setInitialValues(
      _adminMode: boolean,
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
