/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import rewardslog_LUMENS from '@/assets/images/lootbox/rewardslog_LUMENS.png';
import rewards_POINTS from '@/assets/images/lootbox/rewardslog_POINTS.png';
import rewardslog_USDC from '@/assets/images/lootbox/rewardslog_USDC.png';
import rewardslog_USDT from '@/assets/images/lootbox/rewardslog_USTD.png';
import sui_logo from '@/assets/images/lootbox/sui_logo.png';

export const REWARDSLOG_MAP = {
  LUMENS: rewardslog_LUMENS,
  USDC: rewardslog_USDC,
  USDT: rewardslog_USDT,
  POINTS: rewards_POINTS,
  SUI: sui_logo,
};

export const getTargetREWARDSLOG = (type: keyof typeof REWARDSLOG_MAP) => {
  return REWARDSLOG_MAP[type];
};
