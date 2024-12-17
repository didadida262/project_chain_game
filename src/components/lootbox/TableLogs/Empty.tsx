import Image from 'next/image';
import { ReactNode } from 'react';

import rewards_log_empty from '@/assets/images/lootbox/rewards_log_empty.png';

interface IEmptyProps {
  className?: string;
  title?: ReactNode;
}
export function Empty(props: IEmptyProps) {
  const { className, title = 'No Data' } = props;

  return (
    <div className='flex flex-col items-center px-[10px] py-[10px] font-Poppins'>
      <Image
        alt='empty'
        className='aspect-[2.07] w-full md:w-[540px]'
        src={rewards_log_empty}
      />
      <p className='mt-[10px] font-Poppins text-[14px] md:mt-[0px] md:text-[20px]'>
        There is no any reward log.
      </p>
      <p className='text-center text-[14px] md:text-[20px] '>
        Go to the{' '}
        <span
          className='text-[#8558DD] hover:cursor-pointer'
          onClick={() => {
            // TODO 跳转
          }}
        >
          event page
        </span>{' '}
        to obtain reward tickets.
      </p>
    </div>
  );
}
