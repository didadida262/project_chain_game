'use client';

import { useState } from 'react';

import RewardsTypes from '@/components/lootbox/RewardsTypes';
import TimerClock from '@/components/lootbox/TimerClock';

export default function PoolHeaderContent() {
  const [time, settime] = useState([
    {
      name: 'YEAR',
      val: '24',
    },
    {
      name: 'MOUNTH',
      val: '12',
    },
    {
      name: 'DAY',
      val: '20',
    },
    {
      name: 'DAY',
      val: '20',
    },
  ]) as any;
  return (
    <div className=''>
      <div className='hidden md:flex  md:flex-col md:text-center duration-200 transition'>
        <TimerClock data={time} type='colon' />
        <RewardsTypes />
      </div>
      <div className='block md:hidden px-[18px]'>
        <div className='flex flex-col items-start rounded-[18px] border-[1px] border-b-[4px] border-solid border-[#2c3148] bg-[#111423] px-[10px] py-[16px]'>
          <TimerClock data={time} type='colon' />
          <div className='mb-[20px] w-full  border-t border-dashed border-[#FFFFFF] mt-[20px]'></div>
          <RewardsTypes />
        </div>
      </div>
    </div>
  );
}
