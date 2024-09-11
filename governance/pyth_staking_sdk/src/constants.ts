import { DISCRIMINATOR_SIZE } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

const ONE_MINUTE_IN_SECONDS = 60n;
const ONE_HOUR_IN_SECONDS = 60n * ONE_MINUTE_IN_SECONDS;
const ONE_DAY_IN_SECONDS = 24n * ONE_HOUR_IN_SECONDS;
const ONE_WEEK_IN_SECONDS = 7n * ONE_DAY_IN_SECONDS;

export const EPOCH_DURATION = ONE_WEEK_IN_SECONDS;

export const POSITION_BUFFER_SIZE = 200;
export const POSITIONS_ACCOUNT_HEADER_SIZE = DISCRIMINATOR_SIZE + 32;

export const STAKING_PROGRAM_ADDRESS = new PublicKey(
  "pytS9TjG1qyAZypk7n8rw8gfW9sUaqqYyMhJQ4E7JCQ",
);

export const INTEGRITY_POOL_PROGRAM_ADDRESS = new PublicKey(
  "pyti8TM4zRVBjmarcgAPmTNNAXYKJv7WVHrkrm6woLN",
);

export const PUBLISHER_CAPS_PROGRAM_ADDRESS = new PublicKey(
  "pytcD8uUjPxSLMsNqoVnm9dXQw9tKJJf3CQnGwa8oL7",
);