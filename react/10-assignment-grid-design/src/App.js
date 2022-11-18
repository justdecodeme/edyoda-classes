import { useState } from "react"

import Header from "./components/Header"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

let CARDS = [
  {
    image: "./img/learn_machine_learning_courses_online.png",
    title: "Introduction To A Machine Learning Online Course",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "23 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'ai'
  },
  {
    image: "./img/6.png",
    title: "LAMP Stack Vs MEAN stack.",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "24 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'cc'
  },
  {
    image: "./img/4.png",
    title: "Impact of Cloud Computing in various...",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "24 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'do'
  },
  {
    image: "./img/3.png",
    title: "Challenges of Machine Learning in Big Data Analytics",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "24 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'pl'
  },
  {
    image: "./img/5.png",
    title: "Breaking the Myths around Cybersecurity",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "26 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'ai'
  },
  {
    image: "./img/7.png",
    title: "Importance of Data Backup and Recovery ",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "26 Aug 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'ai'
  },
  {
    image: "./img/automation-testing-an-overview-2.png",
    title: "What is Web Scraping?",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "25 Sep 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'do'
  },
  {
    image: "./img/what_is_isa_blog_1.png",
    title: "What is Income Share Agreement?",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "14 Oct 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'cc'
  },
  {
    image: "./img/practical_machine_learning_1.png",
    title: "Practical Machine Learning with Python...",
    authorLink: "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    authorName: "EdYoda",
    date: "16 Oct 2019",
    description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
    category: 'tt'
  },

]

let categories = {
  'all': 'All',
  'ai': 'Artificial Intelligence',
  'cc': 'Cloud Computing',
  'do': 'DevOps',
  'pl': 'Programming Languages',
  'mad': 'Mobile Application Development',
  'tt': 'Technology and Tools',
  'jtc': 'Get a Job in a Tech Company',
  'ot': 'Others',
}

// categories.ai
// categories['ai']
// array[i]

function App() {
  const [activeKey, setActiveKey] = useState('all')
  const [cards, setCards] = useState(CARDS)

  const handleActiveKey = (key) => {
    console.log(key)
    setActiveKey(key)
    setCards(CARDS.filter(card => card.category === key))
  }

  return (
    <>
      {/* ↑ react fragment */}
      <Header />
      <Filter categories={categories} actKey={activeKey} handleKey={handleActiveKey} />
      <Cards cards={cards} />
      <Footer />
    </>
  );
}

export default App;
