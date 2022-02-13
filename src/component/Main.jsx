import Header from "./Header";
import Improve from "./section/Improve";
import Indicator from "./section/Indicator";
import KeepOn from "./section/KeepOn";
import Peak from "./section/Peak";
import SidebarBig from "./section/SidebarBig";
import Try from "./section/Try";
import UserProgress from "./section/UserProgress";
function Main() {
  return (
    <main className="md:pl-20 w-full flex flex-col gap-y-4">
      <Header />
      <div className="flex w-full gap-x-4">
        <div className="w-full flex flex-col gap-y-4 xl:w-[70%]">
          <UserProgress />
          <Indicator />
          <div className="flex flex-wrap w-full sm:flex-nowrap gap-4 ">
            <div className="w-[100%]  sm:w-[65%] ">
              <KeepOn />
            </div>
            <div className="w-[100%] sm:w-[35%]">
              <Peak />
            </div>
          </div>
          <Improve />
          <Try />
          <div className="xl:hidden mb-[56px] md:mb-0">
            <SidebarBig />
          </div>
        </div>
        <div className="hidden xl:block w-[30%]">
        <SidebarBig/>
        </div>
      </div>
    </main>
  );
}

export default Main;
