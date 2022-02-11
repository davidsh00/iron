import Header from "./Header";
import Indicator from "./section/Indicator";
import KeepOn from "./section/KeepOn";
import Peak from "./section/Peak";
import UserProgress from "./section/UserProgress";
function Main() {
  return (
    <main className="w-full pl-16 flex flex-col gap-y-4">
      <Header />
      <UserProgress/>
      <Indicator/>
      <div className="flex flex-wrap w-full sm:flex-nowrap gap-4">
        <div className="w-[100%] sm:w-[65%]"><KeepOn/></div>
        <div className="w-[100%] sm:w-[35%]"><Peak/></div>
      </div>
    </main>
  );
}

export default Main;
