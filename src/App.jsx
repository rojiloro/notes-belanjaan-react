import { useState } from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Form from "./components/form";
import Header from "./components/header";
import { content } from "./components/dataDummy";

function App(props) {
  const [items, setItems] = useState(content);
  const [sortBy, setSortBy] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleTogleItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const handleClear = () => {
    setItems([]);
  };

  const handleAction = () => {
    alert("action tertekan");
  };
  return (
    <>
      <Header />
      <Form onAddItem={handleAddItem} />
      <Content onHandleTogleItem={handleTogleItem} onDeleteItem={handleDeleteItem} items={items} />
      <Footer items={items} onHandleClear={handleClear} />
    </>
  );
}

export default App;
