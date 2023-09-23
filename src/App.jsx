import "./App.css"
import "./components/card.css"
import Navigation from "./routes/Navigation"
import Title from "./components/Title/Title"
import Layout from "./components/Layout/Layout"




function App() {

  return (
    
    <Layout>
    <Title greeting={"Aportando un granito de harina al mundo.. 🍞"}/>
    <Navigation />
    </Layout>

    
  );
}
  
  export default App;