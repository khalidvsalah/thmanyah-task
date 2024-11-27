import { Hero } from "./components/Layout/Home/Hero";

import { AnalysisCard } from "./components/UI/Card/AnalysisCard";
import { BiggerThan } from "./components/UI/Card/BiggerThan";
import { PercentageCard } from "./components/UI/Card/PercentageCard";
import { PieCard } from "./components/UI/Card/PieCard";
import { ProfitCard } from "./components/UI/Card/ProfitCard";
import { LineCard } from "./components/UI/Card/LineCard";

const data = {
  analysisCard01: {
    card002: {
      head: "نسبة رضا الموظفين",
      bgUrl: "/assets/media/star.jpg",
      value: 80,
    },
    card003: {
      head: "جنس الموظفين",
      data: {
        colors: ["#EA5B38", "#F9F7F2"],
        info: [
          { label: "الذكور", value: 80 },
          { label: "الاناث", value: 100 },
        ],
      },
    },
  },
  analysisCard02: {
    card001: {
      head: "الحصة السوقية لراديو ثمانية",
      value: "250,000",
    },
    card002: {
      head: "الايرادات الشهري MRR",
      value: "+289",
      data: {
        series: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        labels: [
          "Page A",
          "Page B",
          "Page C",
          "Page D",
          "Page E",
          "Page F",
          "Page G",
        ],
      },
    },
    card003: {
      head: "عدد المستخدمين",
      data: {
        colors: ["#EA5B38", "#F9F7F2"],
        info: [
          { label: "المستخدمين النشطين", value: 80 },
          { label: "المستخدمين التراكمي", value: 100 },
        ],
      },
    },
  },
  analysisCard03: {
    card001: {
      head: "صافي الخسارة / سنوي",
      bgUrl: "/assets/media/loss.jpg",
      value: 24,
    },
    card002: {
      head: "صافي الربح / سنوي",
      bgUrl: "/assets/media/profit.jpg",
      value: 24,
    },
    card003: {
      name: "الايرادات",
      data: {
        annual: 24,
        quarters: [
          { name: "الربع الاول", value: 89 },
          { name: "الربع الثاني", value: 60 },
          { name: "الربع الثالث", value: 54 },
          { name: "الربع الرابع", value: 73 },
        ],
      },
    },
    card004: {
      head: "التكاليف",
      value: "200+",
      data: {
        series: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        labels: [
          "Page A",
          "Page B",
          "Page C",
          "Page D",
          "Page E",
          "Page F",
          "Page G",
        ],
      },
    },
  },
};

export default function Home() {
  return (
    <article className="px-48 pb-24">
      <Hero />
      <ul className="flex flex-wrap gap-6 justify-between">
        <AnalysisCard
          className="w-full"
          name="ثقافة المنظومة"
          description="اليوم, يعمل في شركة اكثر من ستين موظفا في الرياض والخبر وجدة والكويت والقاهرة ورام الله وعمان والمغرب والمانيا"
        >
          <BiggerThan
            first={{ number: 80, name: "عدد الموظفين" }}
            second={{ number: 20, name: "عدد القادة" }}
          />
          <PercentageCard
            className="w-[calc(25%-0.5rem)]"
            data={data.analysisCard01.card002}
          />
          <PieCard
            className="w-[calc(25%-0.5rem)]"
            data={data.analysisCard01.card003}
          />
        </AnalysisCard>
        <AnalysisCard
          className="flex-[0.5]"
          name="الوصول"
          description="اليوم, يعمل في شركة اكثر من ستين موظفا في الرياض والخبر وجدة والكويت والقاهرة ورام الله وعمان والمغرب والمانيا"
        >
          <div className="w-full h-60 px-8 py-12 flex flex-col justify-between gap-1 rounded-lg shadow-custom bg-[#FDFCFB] text-[#333]">
            <h2 className="text-md font-medium">الحصة السوقية لراديو ثمانية</h2>
            <h3 className="text-4xl font-bold">250,000</h3>
            <p className="text-sm font-medium">ريأل سعودي</p>
            <h6 className="text-xs font-medium pt-3">
              ملاحظة تخص الحصة السوقية ان وجد
            </h6>
          </div>
          <LineCard data={data.analysisCard02.card002} />
          <PieCard
            className="w-[calc(50%-0.5rem)]"
            data={data.analysisCard02.card003}
          />
        </AnalysisCard>
        <AnalysisCard
          className="flex-[0.5]"
          name="الاعمال"
          description="اليوم, يعمل في شركة اكثر من ستين موظفا في الرياض والخبر وجدة والكويت والقاهرة ورام الله وعمان والمغرب والمانيا"
        >
          <PercentageCard
            className="w-[calc(50%-0.5rem)]"
            color="#FF0000"
            data={data.analysisCard03.card001}
          />
          <PercentageCard
            className="w-[calc(50%-0.5rem)]"
            color="green"
            data={data.analysisCard03.card002}
          />
          <ProfitCard data={data.analysisCard03.card003} />
          <LineCard data={data.analysisCard03.card004} />
        </AnalysisCard>
      </ul>
    </article>
  );
}
