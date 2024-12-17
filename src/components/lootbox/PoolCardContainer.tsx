/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { Web3 } from 'web3';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import customToast from '@/components/customToast';

import lootbox_card from '@/assets/images/lootbox/lootbox_card.png';
import treasureBox_btn_logo2 from '@/assets/images/lootbox/treasureBox_btn_logo2.png';
import { EIP6963ProviderDetail } from '@/Chain/Wallet/eip6963/EthereumProviderTypes';
import { useEIP6963Wallets } from '@/Chain/Wallet/eip6963/useEIP6963Wallets';
import { mockData, PoolCardRewardImgMap } from '@/mock/cardgame';

// 目前只支持 metamask、trust、okx wallet
export function getSupportedWalletRdns() {
  return ['io.metamask', 'com.trustwallet.app', 'com.okex.wallet'];
}
export default function PoolCardContainer() {
  const [flipped, setFlipped] = useState(false);
  const [CardsList, setCardsList] = useState([]) as any;
  const [currentProvider, setCurrentProvider] = useState() as any;
  const { providers } = useEIP6963Wallets();

  const evmSupportedWalletProviders = useMemo(
    () =>
      providers.filter((item: EIP6963ProviderDetail) =>
        getSupportedWalletRdns().includes(item.info.rdns)
      ),
    [providers]
  );
  const [tickets, settickets] = useState([
    {
      name: 'Sui Tickets',
      count: 10,
      src: treasureBox_btn_logo2,
      chain: 'SUI',
    },
  ]);
  const collectingRewards = () => {
    initCardList();
    setFlipped(false);
  };
  const getImg = (type: any) => {
    if (!type) {
      return PoolCardRewardImgMap['NONE'];
    } else {
      return PoolCardRewardImgMap[type as keyof typeof PoolCardRewardImgMap];
    }
  };
  const handleMockData = () => {
    console.log('currentProvider>>>', currentProvider);
    if (!currentProvider) {
      console.log('please login in wallet！');
      return;
    }
    // 合约交互（付钱）
    const resultData = mockData.map((item: any) => {
      return {
        ...item,
        img: getImg(item.type),
      };
    });
    setCardsList(resultData);
    setFlipped(true);
  };
  const initCardList = () => {
    const CardsData = Array(10)
      .fill(null)
      .map((_, index) => {
        return {
          amount: 0, // val 属性,
          img: lootbox_card,
        };
      });
    setCardsList(CardsData);
  };
  const handleConnect = async (wallet: EIP6963ProviderDetail) => {
    const provider = new Web3(wallet.provider);
    await provider.eth.requestAccounts();
    setCurrentProvider(provider);
    console.log('success!!!', provider);
    customToast.success('连接成功');
  };

  useEffect(() => {
    initCardList();
  }, []);

  return (
    <div className='relative  bg-cover bg-center bg-no-repeat pb-8 font-Oswald '>
      <div className='mx-auto  w-full xl:w-[1093px]  relative'>
        {/* 头部 */}
        <div className='relative mx-auto flex w-full  items-center justify-center h-[80px]'>
          <span className='font-Oswald text-[43px] font-semibold'>
            Just try it
          </span>
        </div>
        {/* 扫描到的所有钱包 */}
        <div className='wallet'>
          {evmSupportedWalletProviders.map((item) => (
            <div key={item.info.rdns}>
              <Button>
                <span onClick={() => handleConnect(item)}>
                  Connect {item.info.name}
                </span>
              </Button>
            </div>
          ))}
        </div>
        {/* 卡牌部分 */}
        <div
          className={cn(
            'relative px-4 py-8 font-Oswald mx-auto mb-[20px] flex max-w-[1092px] flex-wrap gap-x-3 gap-y-[10px] bg-[#19133A4D] px-[20px] py-[30px] md:gap-x-6 md:gap-y-10 md:rounded-[16px] md:px-[40px] md:py-[40px]',
            'justify-around'
          )}
        >
          {CardsList.map((item: any, index: number) => (
            <div
              key={index}
              className={cn(
                `relative transform duration-500`,
                'hover:cursor-pointer',
                'hover:scale-110'
              )}
            >
              <Image
                src={lootbox_card}
                alt=''
                className={cn(
                  'aspect-[0.69]  w-[80px] md:w-[172px] select-none duration-1000',
                  `transition-transform ${
                    flipped ? 'rotate-y-180' : 'rotate-y-0'
                  }`
                )}
                style={{
                  backfaceVisibility: 'hidden',
                }}
              />
              <div
                className={cn(
                  'absolute left-0 top-0 aspect-[0.69] w-[80px] md:w-[172px] select-none duration-1000',
                  `transition-transform ${
                    flipped ? 'rotate-y-0' : 'rotate-y-180'
                  }`
                )}
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src={item.img}
                  alt=''
                  className='aspect-[0.69] w-[80px] select-none duration-1000 md:w-[172px]'
                />
                {item.type && (
                  <div
                    className={cn(
                      'absolute bottom-[14px] left-0 flex w-full flex-col items-center md:bottom-[30px]'
                    )}
                  >
                    <span className='text-[14px] md:text-[26px] font-semibold leading-[14px] md:leading-[36px]'>
                      {item.amount}
                    </span>
                    <span className='text-[10px] md:text-[24px] font-semibold leading-[12px] md:leading-[28px]'>
                      {item.type}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* 底部栏操作 */}
        <div className='flex justify-center items-center'>
          {!flipped ? (
            <Button variant='primary'>
              <span
                onClick={() => {
                  // setFlipped(true);
                  handleMockData();
                }}
              >
                Sui Tickets X {tickets[0].count}
              </span>
            </Button>
          ) : (
            <Button variant='primary'>
              <span
                onClick={() => {
                  collectingRewards();
                }}
              >
                Collecting Rewards
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
