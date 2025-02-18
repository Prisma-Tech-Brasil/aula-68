import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "antd";
const { Content } = Layout;

import CreateClass from "./components/createClass";
import AvailableClasses from "./components/availableClasses";
import ListStudents from "./components/listStudents";
import AppHeader from "./components/appHeader";

function App() {
  return (
    <Router>
      <AppHeader />
      <Content style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<AvailableClasses />} />
          <Route path="/createClass" element={<CreateClass />} />
          <Route path="/listStudents/:id" element={<ListStudents />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
