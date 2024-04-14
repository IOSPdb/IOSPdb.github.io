import FaqData from "./FaqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl">FAQ </h3>
      <p>Here are some of the most common questions that we get.</p>
      {FaqData.map((item) => {
        return (
          <Accordion type="single" collapsible key={item.id}>
            <AccordionItem value={item.id} className="justify-start">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Faq;
