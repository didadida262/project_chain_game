'use client';

import NumCardItem from '@/components/lootbox/TimerClock/NumCardItem';

interface IProps {
  data: any;
  type: string;
}
export default function TimerClock(props: IProps) {
  const { data, type } = props;

  return (
    <div className='flex items-center mx-auto text-[#FFFFFF] md:gap-x-5 gap-x-[4px]'>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className='flex justify-start md:gap-x-5 gap-x-[4px] items-center'
        >
          <NumCardItem time={String(item.val)} title={item.name} />
          {index !== data.length - 1 &&
            (type !== 'colon' ? (
              <div className=' flex flex-col items-center text-[#FFFFFF] font-semibold w-[10px]h-[72px] md:h-[132px] justify-center pb-[24px] md:pb-[30px]'>
                -
              </div>
            ) : (
              <div className=' flex flex-col items-center text-[#FFFFFF] font-semibold w-[10px] h-[72px] md:h-[132px] justify-center pb-[24px] md:pb-[30px]'>
                <div className='aspect-[1] w-[4px] rounded-full bg-white md:w-2 mb-[8px]'></div>
                <div className=' aspect-[1] w-[4px] rounded-full bg-white md:w-2'></div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
