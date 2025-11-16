import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionItem = {
  value: string;
  title: string;
  content: React.ReactNode;
};

type AccordionLayoutProps = {
  defaultValue: string[];
  items: AccordionItem[];
};

export function AccordionLayout({ defaultValue, items }: AccordionLayoutProps) {
  return (
    <Accordion type="multiple" defaultValue={defaultValue}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="cursor-pointer">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
