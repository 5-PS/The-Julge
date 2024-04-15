import Pagination from '../pagination/pagination';

interface StateBadgeProps {
  state: 'pedding' | 'approve' | 'choose';
}

const STORE_INFORMATION: {
  title: string;
  date: string;
  money: number;
  state: 'pedding' | 'approve' | 'choose';
}[] = [
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'choose',
  },
  {
    title: '너구리네 국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'approve',
  },
  {
    title: '너구리네 돈까스집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'choose',
  },
  {
    title: '너구리네 국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'approve',
  },
  {
    title: '너구리네 돈까스집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
];

function StateBadge({ state }: StateBadgeProps) {
  if (state === 'pedding') {
    return (
      <span className="state-badge bg-green-10 text-green-20">
        <strong>대기중</strong>
      </span>
    );
  }
  if (state === 'approve') {
    return (
      <span className="state-badge bg-blue-10 text-blue-20">
        <strong>승인 완료</strong>
      </span>
    );
  }
  if (state === 'choose') {
    return (
      <div className="flex gap-[12px]">
        <button
          type="button"
          className="py-[10px] px-[20px] text-[14px] rounded-[6px] border border-red-40 text-red-40"
        >
          <strong>거절하기</strong>
        </button>
        <button
          type="button"
          className="py-[10px] px-[20px] text-[14px] rounded-[6px] border border-blue-20 text-blue-20 "
        >
          <strong>승인하기</strong>
        </button>
      </div>
    );
  }
}

function Table({ query }: { query: { page: string } }) {
  const pageLength = Math.ceil(STORE_INFORMATION.length / 5);
  const sliceIndex = (parseInt(query?.page, 10) - 1) * 5;
  return (
    <div className="w-[964px] rounded-[10px] overflow-hidden border border-gray-20 m-auto">
      <table className="text-left text-black">
        <tr className="text-[14px] bg-red-10 border-b border-gray-20">
          <th className="w-[228px] tb-head">가게</th>
          <th className="w-[300px] tb-head">일자</th>
          <th className="w-[200px] tb-head">시급</th>
          <th className="w-[236px] tb-head">상태</th>
        </tr>
        {STORE_INFORMATION.slice(sliceIndex, sliceIndex + 5).map((store) => (
          <tr className="border-b border-gray-20">
            <td className="tb-data">{store.title}</td>
            <td className="tb-data">{store.date}</td>
            <td className="tb-data">{store.money}</td>
            <td className="tb-data" aria-label="badge">
              <StateBadge state={store.state} />
            </td>
          </tr>
        ))}
      </table>
      <Pagination page={query.page} pageLength={pageLength} />
    </div>
  );
}

export default Table;