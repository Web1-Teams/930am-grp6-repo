import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Desc from "./components/Desc";
import Footer from "./components/Footer";



function App() {
  return (
    <div dir="rtl">
      <NavBar />
      <Desc/>
      <div className="container">
        <div className="row pt-5">
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة." 
            photo="C:\Users\alaan\OneDrive\سطح المكتب\demo1\src\Imges\the-seven-habits-book.jpg"
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
          <Card
            title="نظرية المزرعة"
            desc="نمط فكري يدعي ان النجاح يمر بنفس المراحل التي تمر بها المزرعة."
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
