const NavigationSidebar = () => {
  return (`
      <div class="list-group">
        <a class="list-group-item">
          <i class="fa-solid fa-t"></i>
        </a>
          <a id="home-nav" class="list-group-item d-flex align-items-center" 
          href="../home/index.html">
            <i class="fa-solid fa-house col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Home
            </div>
          </a>
          <a id="explore-nav" class="list-group-item d-flex align-items-center"
             href="../explore/index.html">
            <i class="fa-solid fa-hashtag col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Explore
            </div>
          </a>
          <a id="notifications-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-regular fa-bell col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Notifications
            </div>
          </a>
          <a id="messages-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-regular fa-envelope col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Messages
            </div>
          </a>
          <a id="bookmarks-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-regular fa-bookmark col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Bookmarks
            </div>
          </a>
          <a id="lists-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-solid fa-list col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Lists
            </div>
          </a>
          <a id="profile-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-regular fa-user col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              Profile
            </div>
          </a>
          <a id="more-nav" class="list-group-item d-flex align-items-center" href="#">
            <i class="fa-solid fa-ellipsis col-12 col-xl-2 col-xxl-2"></i>
            <div class="col-10 d-none d-xl-block d-xxl-block">
              More
            </div>
          </a>
      </div>
      <button class="btn btn-primary rounded-pill mt-3 fw-bold pt-2 pb-2"
              style="width: 100%"
              type="button">
        Tuit
      </button>

<!--   <div class="list-group">-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fab fa-twitter"></i></a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-house"></i> Home</a>-->
<!--     <a class="list-group-item active" href="/">-->
<!--       <i class="fa-solid fa-hashtag"></i> Explore</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-bell"></i> Notifications</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-envelope"></i> Messages</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-bookmark"></i> Bookmarks</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-list"></i> Lists</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-user"></i> Profile</a>-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fa-solid fa-ellipsis"></i> More</a>-->
<!--   </div>-->
<!--   <div class="d-grid mt-2">-->
<!--     <a href="tweet.html"-->
<!--        class="btn btn-primary btn-block rounded-pill">-->
<!--        Tweet</a>-->
<!--   </div>-->
 `);
}
export default NavigationSidebar;