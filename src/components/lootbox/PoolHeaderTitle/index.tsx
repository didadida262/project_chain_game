export default function PoolHeaderTitle() {
  return (
    <>
      <div className='mb-16  h-[118px] flex-col text-center md:flex hidden'>
        <span className='text-[48px]  font-medium leading-[71px] text-[#FFFFFF]'>
          Complete campaign for lottery tickets
        </span>
        <span className='bg-gradient-to-b from-[#FFFCF6] via-[#FFC74B] to-[#CC6C1A] bg-clip-text text-4xl font-medium leading-[59px] text-transparent'>
          Claim more rewards
        </span>
      </div>
      <div className='mb-16 h-[126px] text-center md:hidden block px-[17px] '>
        <div className='flex flex-col items-start rounded-[18px] border-[1px] border-b-[4px] border-solid border-[#2c3148] bg-[#111423] px-[20px] py-[16px]'>
          <span className='text-[24px]  font-[600] leading-[35px] text-[#FFFFFF] mb-[9px]'>
            SUI Treasure 1{' '}
          </span>
          <span className='text-[16px]  font-[500] leading-[23px] text-[#FFFFFF] mb-[4px]'>
            Complete campaign for lottery tickets
          </span>
          <span className='bg-gradient-to-b from-[#FFFCF6] via-[#FFC74B] to-[#CC6C1A] bg-clip-text text-[16px] font-[500] leading-[23px] text-transparent'>
            Claim more rewards
          </span>
        </div>
      </div>
    </>
  );
}
