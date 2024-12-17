'use client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import lootbox_header_rewards_dragontrain from '@/assets/images/lootbox/lootbox_header_rewards_dragontrain.png';
import lootbox_header_rewards_lumens from '@/assets/images/lootbox/lootbox_header_rewards_lumens.png';
import lootbox_header_rewards_points from '@/assets/images/lootbox/lootbox_header_rewards_points.png';
import lootbox_header_rewards_usdc from '@/assets/images/lootbox/lootbox_header_rewards_usdc.png';
import lootbox_header_rewards_ustd from '@/assets/images/lootbox/lootbox_header_rewards_ustd.png';
import { transferNum } from '@/utils/lootbox';

export default function RewardsTypes() {
  const [logolist, setlogolist] = useState([
    {
      name: 'Lumens',
      value: 10000000,
      img: lootbox_header_rewards_lumens,
    },
    {
      name: 'Points',
      value: 1000,
      img: lootbox_header_rewards_points,
    },
    {
      name: 'USTD',
      value: 1000,
      img: lootbox_header_rewards_ustd,
    },
    {
      name: 'USDC',
      value: 1000,
      img: lootbox_header_rewards_usdc,
    },
    {
      name: 'Dragon Train...',
      img: lootbox_header_rewards_dragontrain,
    },
  ]);
  return (
    <div
      className={cn(
        'text-[#FFFFFFCC] mx-auto md:mt-[49px] flex w-full md:w-[720px] flex-col ',
        'md:rounded-[18px] md:border-[1px] md:border-b-[4px] md:border-solid md:border-[#2c3148] md:bg-[#111423] md:px-[36px] md:py-[17.5px]'
      )}
    >
      <span className='font-Poppins text-[12px] md:text-[20px] font-medium leading-[18px] md:leading-[30px] flex justify-start items-center'>
        Rewards:
      </span>
      <div className='logocontainer mt-[7px] flex items-center justify-start md:gap-x-[27px] gap-x-[16px]'>
        {logolist.map((logoItem: any, index: number) => (
          <div key={index} className='flex flex-col items-center text-[12px] '>
            <Image
              src={logoItem.img}
              alt=''
              className='w-[40px] h-[40px] md:h-[56px] md:w-[56px] duration-200 hover:scale-110 hover:cursor-pointer'
            />
            <span className='mt-[5px] md:mt-[8px]  font-medium md:leading-[17px] text-center'>
              {index !== 4 ? transferNum(logoItem.value) : ''} {logoItem.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
