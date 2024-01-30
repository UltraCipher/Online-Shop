import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "./FrequentlyAsked.module.scss";
import ContactUs from "./contactus";

const AllQuestions = [
  {
    id: 1,
    group: "Category1",
    question: "What should I do if I forget my password?",
    answer:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 2,
    group: "Category1",
    question: "How can I contact support?",
    answer:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 3,
    group: "Category2",
    question: "How to check the availability of goods?",
    answer:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 4,
    group: "Category2",
    question: "How can I cancel my order?",
    answer:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
  {
    id: 5,
    group: "Category3",
    question: "Should i order during office hours?",
    answer:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  },
];

function FrequentlyAsked() {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selected, setSelected] = useState(null);

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setSelected(null);
  };

  const filteredAllQuestions =
    selectedGroup === "all"
      ? AllQuestions
      : AllQuestions.filter((item) => item.group === selectedGroup);

  const toggle = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className={styles.frequentlyAskedContainer}>
      <div className={styles.customMenu}>
        <select value={selectedGroup} onChange={handleGroupChange}>
          <option value="all">All Questions</option>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
          <option value="Category3">Category3</option>
        </select>
      </div>

      <div className={styles.accordion}>
        {filteredAllQuestions.map((item, index) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.question} onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              <span className={styles.accordionIcon}>
                {selected === index ? <BsChevronUp /> : <BsChevronDown />}
              </span>
            </div>

            <div
              className={selected === index ? styles.answerShow : styles.answer}
            >
              {item.answer}
            </div>

            <hr
              style={{
                borderColor: "#F1EDE9",
                border: "2px solid #F1EDE9",
                borderRadius: "50px",
              }}
            />
          </div>
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

export default FrequentlyAsked;
