import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import { UserProvider } from "./context/UserContext";
function App() {
return <div className="flex py-2 px-4 gap-4">
 <Sidebar/>
 <UserProvider>
 <Main/>
 </UserProvider> 
  </div>;
}

export default App;
