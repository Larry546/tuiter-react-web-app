import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import TuitList from "./tuits/tuit-list";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer
  }
})

function Tuiter() {
  return (
      <Provider store={store}>
        <>
          <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2 col-xxl-2 pt-3">
              <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 col-xxl-6 pt-2 ps-4 pe-4">
              <Routes>
                <Route index element={<TuitList/>}/>
                <Route path="home" element={<TuitList/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
              </Routes>
            </div>
            <div
                className="col-4 d-none d-lg-block d-xl-block d-xxl-block pt-3">
              <WhoToFollowList/>
            </div>
          </div>
        </>
      </Provider>
  )
}

export default Tuiter