import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import { UserProvider } from "./context/UserContext";
function App() {
return <div className="w-full flex py-2 px-4 ">
  <div className="z-[100] fixed bottom-0 right-4 left-4  md:static ">
  <Sidebar/>
  </div>

 <UserProvider>
 <Main/>
 </UserProvider> 
  </div>;
}

export default App;
