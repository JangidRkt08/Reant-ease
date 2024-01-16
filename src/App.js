import "./App.css"
import Pages from "./components/pages/Pages"
import chatbot from "./components/images/chat.png"

function App() {
  return <div className="app">
     < Pages />
     <div className="chatbot"><img src={chatbot} alt="" />

     </div>
     </div>
}

export default App
