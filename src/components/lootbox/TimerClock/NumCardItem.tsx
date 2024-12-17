/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-12-09 14:23:58
 * @LastEditors: didadida262
 * @LastEditTime: 2024-12-10 00:02:08
 */
import { cn } from '@/lib/utils';

interface IProps {
  time: string;
  title: string;
}
export default function NumCardItem(props: IProps) {
  const { time, title } = props;
  return (
    <div className=' flex flex-col items-center md:gap-y-[10px] gap-y-[5px] text-[#FFFFFF] font-semibold '>
      <div className='num flex items-center '>
        {time.split('').map((item: string, index: number) => (
          <div
            key={index}
            className={cn(
              'flex aspect-[0.683] w-[30px] items-center justify-center rounded-[4px] border-[1px] border-solid border-[#FFFFFF1A] bg-[#111423] text-[30px] font-semibold leading-[40px] md:w-[67px] md:rounded-[8.4px] md:text-[70px] md:leading-[70px]',
              index !== time.split('').length - 1 ? 'mr-[3px] md:mr-[6px]' : ''
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <span className='md:text-[15px] text-[12px]'>{title}</span>
    </div>
  );
}
