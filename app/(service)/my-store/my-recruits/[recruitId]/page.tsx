import Table from '@/components/table/table';

import RecuitsCard from './_components/recruitsCard';

interface MyRecruitDetailPageProps {
  searchParams: { page: string };
}

function MyRecruitDetailPage({ searchParams }: MyRecruitDetailPageProps) {
  return (
    <main>
      <section className="my-recuits-detail-section">
        <div className="mb-4 md:mb-6">
          <span className="text-[14px] inline-block mb-2 font-bold text-primary md:text-[16px]">식당</span>
          <h1 className="text-[20px] font-bold md:text-[28px]">도토리 식당</h1>
        </div>
        <RecuitsCard />
      </section>
      <section className="my-recuits-detail-section">
        <h1 className="text-[20px] font-bold mb-4 md:text-[28px] md:mb-8 ">신청자 목록</h1>
        <Table query={searchParams} type="applicantList" />
      </section>
    </main>
  );
}

export default MyRecruitDetailPage;