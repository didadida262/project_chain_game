/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Image from 'next/image';

import {
  getTargetREWARDSLOG,
  REWARDSLOG_MAP,
} from '@/components/lootbox/CommonMap';

import { generateDateStyle } from '@/utils/lootbox';

export const TimeCell = (props: any) => {
  const { data } = props;

  return (
    <div>
      <span>{generateDateStyle(data.drawTime * 1000)}</span>
    </div>
  );
};
export const RewardCells = (props: any) => {
  // rewardType?: 'NONE' | 'USDT' | 'LUMENS' | 'POINTS';

  const { data } = props;
  return (
    <div className='text-[10px] md:text-[14px]'>
      {data.rewardType !== 'NONE' ? (
        <div className='flex items-center'>
          <Image
            src={getTargetREWARDSLOG(
              data.rewardType as keyof typeof REWARDSLOG_MAP
            )}
            alt=''
            className='mr-[4px] h-[24px] w-[24px]'
          ></Image>
          <span className='flex items-center '>
            {data.rewardAmount}{' '}
            <span className='ml-[2px] hidden md:block'>{data.rewardType}</span>
          </span>
        </div>
      ) : (
        <span>-</span>
      )}
    </div>
  );
};

export const StatusCell = (props: any) => {
  const { data } = props;
  return (
    <div>
      <span>{data.status}</span>
    </div>
  );
};
