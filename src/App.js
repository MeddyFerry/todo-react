import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import FormTodo from "./component/FormTodo/FormTodo";
function App() {
  return (
    <div className="h-[100vh] bg-slate-900">
      <Header />
      <FormTodo />
      <Footer />
    </div>
  );
}

export default App;
