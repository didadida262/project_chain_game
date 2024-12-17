import { isNumber } from 'lodash';

// 千分号格式化数字
export function transferNum(num: any) {
  if (!isNumber(num)) return '-';
  return num.toLocaleString();
}

// 时间戳以年月日格式输出
export function generateDateStyle(timestamp: any) {
  if (!isNumber(timestamp)) return '-';
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，所以要加 1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours} : ${minutes}`;
}

export function generateDeadline(start: any, end: any) {
  if (!isNumber(start) || !isNumber(end)) return '-';
  const diff = Math.abs(end - start);
  const days = Math.floor(diff / (24 * 60 * 60));
  const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = Math.floor(diff % 60);

  return `${String(days).padStart(2, '0')}D : ${String(hours).padStart(
    2,
    '0'
  )} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(
    2,
    '0'
  )}`;
}

export function getPoolStatus(start: any, end: any): number {
  if (!isNumber(start) || !isNumber(end)) return -1;
  const now = new Date().getTime() / 1000;
  if (now < start) {
    return 0;
  } else if (now <= end && now >= start) {
    return 1;
  } else {
    return 2;
  }
}

export const getTablePagination = (page = 1, itemsPerPage = 10): any => ({
  pageIndex: page - 1,
  pageSize: itemsPerPage,
});
