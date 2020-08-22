import { ethers } from 'ethers';

// use routine where ever you need a setInterval.
// you would need this where ever you want value to be updated live
// example: https://github.com/KMPARDS/timeally-tsx/blob/1d96743746bbfe8c332a3ba0e58b7ebe56c53ca3/src/components/Stakings/StakingList/StakingList.tsx#L35-L43
export function routine(fn: Function, msec: number): NodeJS.Timeout {
  let working = true;
  const result = fn();
  if (result instanceof Promise) {
    result.then(() => (working = false));
  } else {
    working = false;
  }

  const intervalId = setInterval(async () => {
    if (!working) {
      working = true;
      await fn();
      working = false;
    }
  }, msec);

  return intervalId;
}

export function isValidAmountInput(input: string): boolean {
  try {
    ethers.utils.parseEther(input);
    return true;
  } catch {
    return false;
  }
}

export const EraswapInfo = {
  baseUrl: 'https://eraswap.info',
  getAddressHref: function (address: string) {
    return `${this.baseUrl}/address/${address}`;
  },
  getTxHref: function (txHash: string) {
    return `${this.baseUrl}/txn/${txHash}`;
  },
};

export function renderSecondsRemaining(numberOfSeconds: number): string {
  const days = Math.floor(numberOfSeconds / 60 / 60 / 24);
  const hours = Math.floor((numberOfSeconds - days * 60 * 60 * 24) / 60 / 60);
  const minutes = Math.floor((numberOfSeconds - days * 60 * 60 * 24 - hours * 60 * 60) / 60);
  const seconds = numberOfSeconds - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60;

  return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}

export function renderTimestampRemaining(unixTimestampSeconds: number): string {
  const currentTimestamp = Math.round(Date.now() / 1000);
  let secondsRemaining = currentTimestamp - unixTimestampSeconds;
  if (secondsRemaining < 0) secondsRemaining = 0;
  return renderSecondsRemaining(secondsRemaining);
}
