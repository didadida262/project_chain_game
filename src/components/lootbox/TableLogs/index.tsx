/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

'use client';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import { cn } from '@/lib/utils';

import { Empty } from './Empty';
import { Spinner } from './Spinner';
import { RewardCells, StatusCell, TimeCell } from './TableCell';

const getColumns = () => {
  const BasicColumns = [
    {
      header: 'Draw Time',
      cell: (props: any) => <TimeCell data={props.row.original} />,
    },
    {
      header: 'Tickets',
      accessorKey: 'ticketName',
    },
    {
      header: 'Network',
      accessorKey: 'ticketChain',
    },
    {
      header: 'Source',
      accessorKey: 'ticketSource',
    },
    {
      header: 'Rewards',
      cell: (props: any) => <RewardCells data={props.row.original} />,
    },
    {
      header: 'Status',
      cell: (props: any) => <StatusCell data={props.row.original} />,
    },
  ];
  return BasicColumns;
};

interface ITableProps {
  data: any;
  isLoading: boolean;
  headerRowClassName?: string;
  bodyRowClassName?: string;
  className?: string;
}

export default function TableLogs(props: ITableProps) {
  const {
    data: { dataList, total },
    isLoading,
    bodyRowClassName,
    className,
  } = props;
  const table = useReactTable({
    data: dataList || [],
    columns: getColumns(),
    getCoreRowModel: getCoreRowModel(),
    state: {},
    manualPagination: true,
  });

  return (
    <div className={cn('h-full w-full text-[10px] md:text-[14px]', className)}>
      {isLoading ? (
        <Spinner className='' />
      ) : !dataList?.length ? (
        <Empty className='mb-10 mt-6 sm:mt-20'></Empty>
      ) : (
        <div className='flex h-full w-full justify-between'>
          {/* table */}
          <div className={cn('h-full transform duration-200', 'w-full')}>
            <div className='relative h-full w-full'>
              <div className='sticky top-0'>
                {table.getHeaderGroups().map((headerGroup) => (
                  <div
                    key={headerGroup.id}
                    className='flex h-[40px] items-center justify-between px-[20px] text-[10px] md:text-[14px]'
                  >
                    {headerGroup.headers.map((header) => (
                      <div
                        key={header.id}
                        className={` text-left font-light leading-normal text-[#B3B3C0]`}
                        style={{
                          width: header.column.getSize(),
                        }}
                      >
                        <div className='flex items-center gap-2'>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className='h-[calc(100%_-_40px)] w-full overflow-y-scroll scrollbar  scrollbar-thumb-[#4e5672] scrollbar-track-rounded-[2px] scrollbar-thumb-rounded-[2px] scrollbar-w-[3px]'>
                {table.getRowModel().rows.map((row) => (
                  <div
                    key={row.id}
                    className={cn(
                      ' mb-[8px] flex items-center justify-between  !rounded-[8px] !bg-[#111423] px-[10px] py-[6px] md:px-[20px] md:py-[12px]',
                      bodyRowClassName
                    )}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <div
                          key={cell.id}
                          className={cn()}
                          style={{
                            width: cell.column.getSize(),
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
