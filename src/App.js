import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Form from './components/Form';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero nextPage="/form" heading="Hello There!" subtext={["Let's buy some insurance. It is going to take only a few steps"]} buttonText="Start" />} />
          <Route path="form" element={<Form nextPage="/summary" prevPage="/" heading="Tell us about yourself" backButtonText="Back" buttonText="Next" />} />
          <Route path="summary" element={<Hero nextPage="/" prevPage="/form" heading="Summary" backButtonText="Back" buttonText="Buy" />} />
          <Route path="error" element={<Hero heading="Ooops" nextPage='/' subtext={["Your age is over our accepted limit.", "We are sorry but we cannot insure you now"]} buttonText="Ok :(" />} />
          <Route path="*" element={<Hero nextPage="/form" heading="Hello There!" subtext={["Let's buy some insurance. It is going to take only a few steps"]} buttonText="Start" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
