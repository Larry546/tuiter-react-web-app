import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-lg-1 col-xl-2 col-xxl-2 pt-3">
            <NavigationSidebar/>
          </div>
          <div className="col-10 col-lg-7 col-xl-6 col-xxl-6 pt-1 ps-4 pe-4">
            <Routes>
              <Route index element={<HomeComponent/>}/>
              <Route path="home" element={<HomeComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>
          </div>
          <div
              className="col-4 d-none d-lg-block d-xl-block d-xxl-block pt-3">
            <WhoToFollowList/>
          </div>
        </div>
      </>
  )
}

export default Tuiter