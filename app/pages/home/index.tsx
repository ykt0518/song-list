import { SectionLayout } from "@/components/Layouts/section-layout";
import { AccordionList } from "./components/accordion-list";
import { MainLayout } from "@/components/Layouts/main-layout";

export function Home() {
  return (
    <MainLayout bgColor="gray">
      <SectionLayout>
        <div className="bg-white py-8 px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Song List</h2>
          <p className="text-base mb-6">
            <em className="text-lg font-bold not-italic">
              あなただけのsong list。
            </em>
            <br />
            カラオケで必ず歌う得意な曲リスト。
            <br />
            試しに歌ってみたい曲リスト。
            <br />
            自由にリストアップしてみて。
          </p>
          <AccordionList />
        </div>
      </SectionLayout>
    </MainLayout>
  );
}
