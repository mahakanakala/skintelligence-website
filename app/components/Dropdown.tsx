import React, { useState } from "react";
import styles from "../page.module.css";
import { IoIosArrowDown } from "react-icons/io";

interface QuestionAndAnswer {
  question: string;
  answer: string;
  image: string;
}

const questionsAndAnswers: QuestionAndAnswer[] = [
  {
    question: "How unique is this dataset?",
    answer: "Z-score calcualtion of the label, brand, price, and rank have been calculated using KDE (A kernel density estimate) plot which is a method for visualizing the distribution of observations in a dataset, analogous to a histogram.",
    image: "/images/z_score.png",
  },
  {
    question: "What brands have the most amount of toxins in their products?",
    answer: "Mostly American brands with minor ones from France and East Asia.",
    image: "/images/top_10_toxin_brands.png",
  },
  {
    question:
      "Is there a correlation between the number of toxins & price of the product?",
    answer: "The average cost difference between toxin-containing and non-toxin-containing products in the cosmetics industry implies a growing emphasis on product safety, consumer awareness, and the willingness of individuals to invest in safer alternatives. It indicates a shift towards cleaner and more conscious beauty choices among consumers.",
    image: "images/price_comparison_toxin_vs_non_toxin.png",
  },
  {
    question:
      "Is there a correlation between the brand prestige & the number of toxins?",
    answer: "The negative correlation of -0.35 between brand prestige and normalized toxicity in the cosmetic industry suggests that, on average, brands with higher prestige tend to have lower levels of toxicity** in their products. This correlation reflects the *growing consumer demand for safer and more environmentally friendly products*. It indicates that prestigious brands are likely prioritizing the development of safer and less toxic cosmetic products to meet consumer expectations.",
    image: "images/brand_prestige_vs_toxicity.png",
  },
  // {
  //   question:
  //     "Does geographic regulations affect the number of toxins in the products?",
  //   answer:
  //     "Map all of the brands and find their origins, then using bokeh find the number of toxins they have and make it a bubble map with the largest bubble with the most toxins",
  //   image: "images/usa_tod.png",
  // },
];

const DropDown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenIndex((openIndex) => (openIndex === index ? null : index));
  };

  return (
    <div className={styles.dropDownSection}>
      <div className={styles.graphBox}>
        <div className={styles.graph}>
          <div className={styles.graphImage}>
            {openIndex !== null && (
              <img
                src={questionsAndAnswers[openIndex].image}
                alt="Visual"
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.questionBox}>
        <hr className={styles.questionDivider} />
        {questionsAndAnswers.map((item, index) => (
          <DropdownItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};
interface DropdownItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className={styles.individualQuestion}>
      <div className={styles.questionContainer}>
        <div className={styles.question}>{question}</div>
        <button title="dropdown" onClick={onClick} className={styles.dropDownButton}>
          <IoIosArrowDown />
        </button>
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
      <hr className={styles.questionDivider} />
    </div>
  );
};

export default DropDown;
