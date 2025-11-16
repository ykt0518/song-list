import { AccordionLayout } from "@/components/Layouts/accordion-layout";

export function AccordionList() {
  return (
    <>
      <AccordionLayout
        defaultValue={[""]}
        items={[
          {
            value: "item-1",
            title: "カラオケ必須曲リスト",
            content: (
              <ul>
                <li>曲01</li>
                <li>曲02</li>
                <li>曲03</li>
                <li>曲04</li>
                <li>曲05</li>
              </ul>
            ),
          },
          {
            value: "item-2",
            title: "試しに歌いたい曲リスト",
            content: (
              <ul>
                <li>曲01</li>
                <li>曲02</li>
                <li>曲03</li>
                <li>曲04</li>
                <li>曲05</li>
              </ul>
            ),
          },
          {
            value: "item-3",
            title: "聴きたい曲リスト",
            content: (
              <ul>
                <li>曲01</li>
                <li>曲02</li>
                <li>曲03</li>
                <li>曲04</li>
                <li>曲05</li>
              </ul>
            ),
          },
        ]}
      />
    </>
  );
}
