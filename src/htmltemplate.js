const generateHTML = function (newpost) {
    return `
    // async functions
              <!-- p 1 -->
              <div class="bg-white p-4 rounded shadow mt-3">
                  <!-- author -->
                  <div class="d-flex justify-content-between">
                    <!-- avatar -->
                    <div class="d-flex">
                        <!--#######################-->
                      <img
                        src="????????????"
                        alt="avatar"
                        class="rounded-circle me-2"
                        style="width: 38px; height: 38px; object-fit: cover"
                      />
                      <div>
                          <!--#################################-->
                        <p class="m-0 fw-bold">????????????????????????</p>
                        <span class="text-muted fs-7">???????????????</span>
                      </div>
                    </div>
                    <!-- edit -->
                    <i
                      class="fas fa-ellipsis-h"
                      type="button"
                      id="post1Menu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <!-- edit menu -->
                    <ul
                      class="dropdown-menu border-0 shadow"
                      aria-labelledby="post1Menu"
                    >
                      <li class="d-flex align-items-center">
                        <a
                          class="
                            dropdown-item
                            d-flex
                            justify-content-around
                            align-items-center
                            fs-7
                          "
                          href="#"
                        >
                          Edit Post</a
                        >
                      </li>
                      <li class="d-flex align-items-center">
                        <a
                          class="
                            dropdown-item
                            d-flex
                            justify-content-around
                            align-items-center
                            fs-7
                          "
                          href="#"
                        >
                          Delete Post</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- post content -->
                  <div class="mt-3">
                    <!-- content -->
                    <div>
                     
                      <img
                        src="https://source.unsplash.com/random/12"
                        alt="post image"
                        class="img-fluid rounded"
                      />
                    </div>
                    `
  }