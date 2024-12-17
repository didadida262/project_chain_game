import PoolCard from '@/components/lootbox/PoolCard';
import PoolHeaderContent from '@/components/lootbox/PoolHeaderContent';
import PoolHeaderTitle from '@/components/lootbox/PoolHeaderTitle';
import TableLogs from '@/components/lootbox/TableLogs';

export default function testpage() {
  const tableData = {
    dataList: [
      {
        id: 1,
        drawTime: 1000032323,
        ticketName: 'ticketName',
        ticketChain: 'ticketChain',
        ticketSource: 'ticketSource',
        rewardType: 'POINTS',
        rewardAmount: 11,
        status: 'CLAIMABLE',
      },
    ],
    total: 1,
  };
  return (
    <div className='relative min-h-screen font-Oswald w-full bg-[#0f0713] text-[#FFFFFF] '>
      <div
        className='bg-cover bg-center bg-no-repeat py-10 '
        style={{
          backgroundImage: 'url(./assets/treasure/lootboxdetail_bg.png)',
        }}
      >
        <PoolHeaderTitle />
        <PoolHeaderContent />
      </div>
      <PoolCard />
      <div className='w-[500px] h-[200px] mx-auto'>
        <TableLogs data={tableData} isLoading={false} />
      </div>
    </div>
  );
}
