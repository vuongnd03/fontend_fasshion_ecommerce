import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./FaqContent.module.css";

const faqsData = [
  {
    question: "Chất liệu của áo thun là gì?",
    answer:
      "Cung cấp thông tin chi tiết về loại vải (ví dụ: cotton, polyester, pha trộn), trọng lượng và các tính năng đặc biệt.",
  },
  {
    question: "Hướng dẫn bảo quản áo thun như thế nào?",
    answer:
      "Mô tả các phương pháp giặt, sấy và ủi được khuyến nghị để duy trì chất lượng và độ bền.",
  },
  {
    question: "Thiết kế hoặc in trên áo thun được làm bằng gì?",
    answer:
      "Giải thích vật liệu được sử dụng cho thiết kế (ví dụ: vinyl, in lụa, thêu) và độ bền của nó.",
  },
  {
    question: "Áo thun là unisex hay dành cho giới tính cụ thể?",
    answer:
      "Cho biết áo có phù hợp cho cả nam và nữ hay nhắm đến một giới tính cụ thể.",
  },
  {
    question: "Các tùy chọn và chi phí vận chuyển là gì?",
    answer:
      "Cung cấp thông tin về phương thức vận chuyển, thời gian giao hàng ước tính và phí liên quan.",
  },
  {
    question: "Chính sách đổi trả cho áo thun là gì?",
    answer:
      "Mô tả thời gian đổi trả, điều kiện và quy trình hoàn tiền hoặc đổi hàng.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className={styles.title}>
        Câu hỏi thường gặp
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className={styles.trigger}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;

