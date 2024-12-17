import lootbox_card_lumens from '@/assets/images/lootbox/lootbox_card_lumens.png';
import lootbox_card_none from '@/assets/images/lootbox/lootbox_card_none.png';
import lootbox_card_usdt from '@/assets/images/lootbox/lootbox_card_usdt.png';

export const mockData = [
  {
    type: 'LUMENS',
    amount: 6,
  },
  {
    type: 'LUMENS',
    amount: 6,
  },
  {
    type: '',
    amount: 36,
  },
  {
    type: '',
    amount: 35,
  },
  {
    type: 'LUMENS',
    amount: 6,
  },
  {
    type: 'LUMENS',
    amount: 6,
  },
  {
    type: 'USDT',
    amount: 25,
  },
  {
    type: '',
    amount: 50,
  },
  {
    type: 'USDT',
    amount: 22,
  },
  {
    type: 'USDT',
    amount: 40,
  },
];

export const PoolCardRewardImgMap = {
  LUMENS: lootbox_card_lumens,
  USDT: lootbox_card_usdt,
  NONE: lootbox_card_none,
};
