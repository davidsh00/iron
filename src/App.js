import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import { UserProvider } from "./context/UserContext";
function App() {
return <div className="flex py-2 px-4 gap-4">
  <div className="z-[100] fixed bottom-0 right-6 left-4 sm:right-4 md:static md:block">
  <Sidebar/>
  </div>

 <UserProvider>
 <Main/>
 </UserProvider> 
  </div>;
}

export default App;
