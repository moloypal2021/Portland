<template>
  <div class="bg-content-bg">
    <div class="container px-lg-0 px-4 py-12">
      <!-- Filter Section Start -->
      <div class="bg-white rounded px-4 mb-8">
        <form action="">
          <div class="form-row align-items-center">
            <div class="col-auto">
              <div
                class="d-flex align-items-center border-right border-paragraph pr-4 py-3"
              >
                <label
                  class="text-xs text-paragraph-alt font-weight-bold mb-0 mr-8"
                  for="inlineFormInput"
                  >SORT BY:</label
                >
                <select
                  class="border-0 text-xs text-uppercase font-weight-bold text-dark bg-transparent"
                >
                  <option class="px-4" selected>BEST MATCH</option>
                  <option class="px-4" value="1">BEST MATCH 2</option>
                  <option class="px-4" value="2">BEST MATCH 3</option>
                  <option class="px-4" value="3">BEST MATCH 4</option>
                </select>
              </div>
            </div>
            <div class="col-auto">
              <div
                class="row align-items-center border-right border-paragraph pr-3 mr-4"
              >
                <div class="col-auto d-flex align-items-center py-3">
                  <label
                    class="text-xs text-paragraph-alt font-weight-bold mb-0 mr-2"
                    for="inlineFormInput"
                    >KEYWORDS</label
                  >
                  <input
                    type="text"
                    class="form-control d-inline-flex bg-secondary-alt border-2 border-secondary shadow-0 rounded-pill text-xs font-weight-bold w-162px px-3"
                    placeholder="Tablet"
                  />
                </div>
                <div class="col-auto d-flex align-items-center py-3">
                  <label
                    class="text-xs text-paragraph-alt font-weight-bold mb-0 mr-2"
                    for="inlineFormInput"
                    >PRICE</label
                  >
                  <input
                    type="text"
                    class="form-control bg-secondary-alt border-2 border-secondary shadow-0 rounded-pill text-xs font-weight-bold w-72px px-4 mr-2"
                    placeholder="10"
                    value="10"
                  />
                  <input
                    type="text"
                    class="form-control bg-secondary-alt border-2 border-secondary shadow-0 rounded-pill text-xs font-weight-bold w-72px px-4 mr-2"
                    placeholder="1000"
                    value="1000"
                  />
                </div>
                <div class="col-auto d-flex align-items-center py-3">
                  <input
                    type="checkbox"
                    class="custom-checkbox-rounded font-weight-bold mr-2"
                    id="exampleCheck1"
                    checked
                  />
                  <label
                    class="text-dark text-sm font-weight-bold mb-0"
                    for="exampleCheck1"
                    >Free Shipping</label
                  >
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="d-flex align-items-center py-3">
                <label
                  class="text-xs text-paragraph-alt font-weight-bold mb-0 mr-10"
                  for="inlineFormInput"
                  >SHIP TO:</label
                >
                <select
                  class="border-0 text-sm text-uppercase text-dark font-weight-bold bg-transparent"
                >
                  <option class="px-4" selected>USA</option>
                  <option class="px-4" value="1">IN</option>
                  <option class="px-4" value="2">BD</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- Filter Section End -->
      <!-- Content Section Start -->
      <div class="row mb-6">
        <div class="col-lg-3">
          <div class="row">
            <div class="col-md-12 col-sm-6 py-4">
              <div class="accordion bg-white rounded" id="accordionExample">
                <!-- Section-1 -->
                <div class="">
                  <div
                    class="py-3 px-4 border-bottom border-secondary-alt"
                    id="headingOne"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <p class="text-sm text-dark font-weight-bold mb-0">
                        Top Sales
                      </p>
                      <span class="p text-paragraph mb-0"
                        ><i class="fas fa-angle-right"></i
                      ></span>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse bg-secondary-alt"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <ul class="list-unstyled mb-0">
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt font-weight-bold nav-link p-0"
                          >CELL PHONES</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CAMERAS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >TV, AUDIO</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >VIDEO GAMES</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Section-2 -->
                <div class="">
                  <div
                    class="py-3 px-4 border-bottom border-secondary-alt"
                    id="headingTwo"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <p class="text-sm text-dark font-weight-bold mb-0">
                        Brand Focus
                      </p>
                      <span class="p text-paragraph mb-0"
                        ><i class="fas fa-angle-right"></i
                      ></span>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse bg-secondary-alt"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <ul class="list-unstyled mb-0">
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CELL PHONES</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CAMERAS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >TV, AUDIO</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >VIDEO GAMES</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Section-3 -->
                <div class="">
                  <div
                    class="py-3 px-4 border-bottom border-secondary-alt"
                    id="headingThree"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <p class="text-sm text-dark font-weight-bold mb-0">
                        Hi-Tech
                      </p>
                      <span class="p text-paragraph mb-0"
                        ><i class="fas fa-angle-right"></i
                      ></span>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse show bg-secondary-alt"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <ul class="list-unstyled mb-0">
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CELL PHONES</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CAMERAS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >TV, AUDIO</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >VIDEO GAMES</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Section-4 -->
                <div class="">
                  <div
                    class="py-3 px-4 border-bottom border-secondary-alt"
                    id="headingFour"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <p class="text-sm text-dark font-weight-bold mb-0">
                        Home
                      </p>
                      <span class="p text-paragraph mb-0"
                        ><i class="fas fa-angle-right"></i
                      ></span>
                    </div>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse bg-secondary-alt"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <ul class="list-unstyled mb-0">
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CELL PHONES</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CAMERAS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >TV, AUDIO</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >VIDEO GAMES</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Section-5 -->
                <div class="">
                  <div
                    class="py-3 px-4 border-bottom border-secondary-alt"
                    id="headingFive"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <p class="text-sm text-dark font-weight-bold mb-0">
                        Sale
                      </p>
                      <span class="p text-paragraph mb-0"
                        ><i class="fas fa-angle-right"></i
                      ></span>
                    </div>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse bg-secondary-alt"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <ul class="list-unstyled mb-0">
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CELL PHONES</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >CAMERAS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >COMPUTERS</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >TV, AUDIO</router-link
                        >
                      </li>
                      <li class="px-4 py-3 border-bottom border-secondary-alt">
                        <router-link
                          to="/"
                          class="text-xs text-paragraph-alt nav-link font-weight-bold p-0"
                          >VIDEO GAMES</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-6 py-4">
              <div class="bg-white rounded">
                <div class="px-4 py-3 border-bottom border-secondary-alt">
                  <p class="text-xs font-weight-bold text-blue mb-0">
                    AVAILABLE
                  </p>
                </div>
                <form class="border-bottom border-secondary-alt">
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-radio"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleRadios1"
                      >
                        In Storage
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >45</span
                    >
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-radio"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleRadios2"
                      >
                        In Online-Shop
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >12</span
                    >
                  </div>
                </form>
                <div
                  class="d-flex justify-content-between px-4 py-3 border-bottom border-secondary-alt"
                >
                  <p class="text-xs text-blue font-weight-bold mb-0">BRANDS</p>
                  <router-link
                    to="/"
                    class="text-xs font-weight-bold border-bottom border-primary"
                    >ALL</router-link
                  >
                </div>
                <form class="border-bottom border-secondary-alt">
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-checkbox"
                        type="checkbox"
                        name="exampleCheckbox"
                        id="exampleCheckbox1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleCheckbox1"
                        >Apple
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >32</span
                    >
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-checkbox"
                        type="radio"
                        name="exampleCheckbox"
                        id="exampleCheckbox2"
                        value="option2"
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleCheckbox2"
                      >
                        JBL
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >14</span
                    >
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-checkbox"
                        type="radio"
                        name="exampleCheckbox"
                        id="exampleCheckbox3"
                        value="option3"
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleCheckbox3"
                      >
                        Bose
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >3</span
                    >
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center py-2 pl-2 pr-4"
                  >
                    <div class="from-check">
                      <input
                        class="form-check-input custom-checkbox"
                        type="radio"
                        name="exampleCheckbox"
                        id="exampleCheckbox4"
                        value="option4"
                      />
                      <label
                        class="form-check-label text-sm font-weight-bold text-dark ml-2"
                        for="exampleCheckbox4"
                      >
                        Nest
                      </label>
                    </div>
                    <span class="badge text-xs text-paragraph font-weight-bold"
                      >5</span
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-xl-4 col-md-6 py-4">
              <div class="bg-white rounded text-center p-8">
                <img
                  src="@/assets/images/img-2.jpg"
                  alt=""
                  class="w-200px h-200px object-cover object-center mb-7"
                />
                <p class="text-black font-weight-bold mb-2">Apple TV 32GB</p>
                <p class="text-xs text-paragraph font-weight-bold mb-2">
                  BLACK
                </p>
                <p class="text-xs text-dark font-weight-bold mb-2">$49.99</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 py-4">
              <div class="bg-white rounded text-center p-8">
                <img
                  src="@/assets/images/img-3.jpg"
                  alt=""
                  class="w-200px h-200px object-cover object-center mb-7"
                />
                <p class="text-black font-weight-bold mb-2">Pebble Time</p>
                <p class="text-xs text-paragraph font-weight-bold mb-2">RED</p>
                <p class="text-xs text-dark font-weight-bold">$29.99</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 py-4">
              <div class="bg-white rounded text-center p-8">
                <img
                  src="@/assets/images/img-4.jpg"
                  alt=""
                  class="w-200px h-200px object-cover object-center mb-7"
                />
                <p class="text-black font-weight-bold mb-2">
                  Zendure 4-Port USB
                </p>
                <p class="text-xs text-paragraph font-weight-bold mb-2">
                  WHITE
                </p>
                <p class="text-xs text-dark font-weight-bold">$49.99</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 py-4">
              <div class="bg-white rounded text-center px-8 py-5">
                <img
                  src="@/assets/images/img-5.jpg"
                  alt=""
                  class="w-200px h-200px object-cover object-center mb-7"
                />
                <p class="text-black font-weight-bold mb-2">
                  Withings Smart Body Analyzer ws-50
                </p>
                <p class="text-xs text-paragraph font-weight-bold mb-2">
                  BLACK
                </p>
                <p class="text-xs text-dark font-weight-bold">$39.99</p>
              </div>
            </div>
            <div class="col-xl-8 col-md-12 py-4">
              <div class="card border-0 bg-white">
                <img
                  src="@/assets/images/img-6.jpg"
                  class="card-img"
                  alt="card-img"
                />
                <div class="card-img-overlay h-300px">
                  <h1
                    class="badge bg-black text-white text-xs font-weight-normal px-3 py-2"
                  >
                    $39.99
                  </h1>
                </div>
                <div class="card-body py-1">
                  <div
                    class="d-flex flex-wrap justify-content-between align-items-center"
                  >
                    <div class="py-3">
                      <p class="text-black font-weight-bold mb-0">
                        JBL Charge 2+
                      </p>
                      <p class="text-xs text-paragraph font-weight-bold mb-0">
                        BLACK
                      </p>
                    </div>
                    <div class="py-3">
                      <div
                        class="btn-group bg-transparent border border-secondary-alt rounded-pill"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="btn w-110px text-xs font-weight-bold text-dark px-4 border-right border-secondary-alt"
                        >
                          16 GB
                        </button>
                        <button
                          type="button"
                          class="btn w-110px text-xs font-weight-bold text-dark px-4"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Content Section End -->

      <!-- Pagination Section Start -->
      <nav aria-label="" class="bg-white rounded mb-8">
        <ul class="pagination justify-content-center align-items-center mb-0">
          <li class="page-item disabled mr-auto">
            <a
              class="border-right controll-btn d-flex justify-content-center align-items-center text-dark text-sm"
              href="#"
              ><i class="fas fa-angle-left"></i
            ></a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold" href="#">1</a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold" href="#">2</a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold" href="#">3</a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold active" href="#">4</a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold" href="#">5</a>
          </li>
          <li class="page-item text-paragraph">
            <a class="text-dark font-weight-bold" href="#">6</a>
          </li>
          <li class="page-item ml-auto">
            <a
              class="border-left controll-btn d-flex justify-content-center align-items-center text-dark text-sm"
              href="#"
              ><i class="fas fa-angle-right"></i
            ></a>
          </li>
        </ul>
      </nav>
      <!-- Pagination Section End -->

      <!-- Best Seller Section End -->
      <div class="bg-white rounded">
        <div class="text-center py-4 border-bottom border-secondary-alt">
          <p class="text-sm text-dark font-weight-bold mb-0">BEST SELLERS</p>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="border-right border-secondary-alt text-center py-8">
              <img
                src="@/assets/images/img-7.jpg"
                alt=""
                class="w-200px h-200px object-cover object-center mb-7"
              />
              <p class="text-black font-weight-bold mb-2">Beanie</p>
              <p class="text-xs text-paragraph font-weight-bold mb-4">GREEN</p>
              <p class="text-xs text-dark font-weight-bold">
                <del class="text-paragraph mr-4">£39.99</del><span>£29.99</span>
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div
              class="border-right border-secondary-alt text-center py-8 pr-sm-8"
            >
              <img
                src="@/assets/images/img-8.jpg"
                alt=""
                class="w-200px h-200px object-cover object-center mb-7"
              />
              <p class="text-black font-weight-bold mb-2">
                T-Shirt With a Print
              </p>
              <p class="text-xs text-paragraph font-weight-bold mb-4">
                DARK BLUE
              </p>
              <p class="text-xs text-dark font-weight-bold">
                <del class="text-paragraph mr-4">£29.99</del><span>£19.99</span>
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div
              class="border-right border-secondary-alt text-center py-8 pr-sm-8"
            >
              <img
                src="@/assets/images/img-9.jpg"
                alt=""
                class="w-200px h-200px object-cover object-center mb-7"
              />
              <p class="text-black font-weight-bold mb-2">
                Pile-Lined Hooded Jacket
              </p>
              <p class="text-xs text-paragraph font-weight-bold mb-4">
                DARK BLUE
              </p>
              <p class="text-xs text-dark font-weight-bold">
                <del class="text-paragraph mr-4">£49.99</del><span>£39.99</span>
              </p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="text-center py-8 pr-sm-8">
              <img
                src="@/assets/images/img-10.jpg"
                alt=""
                class="w-200px h-200px object-cover object-center mb-7"
              />
              <p class="text-black font-weight-bold mb-2">Trainers</p>
              <p class="text-xs text-paragraph font-weight-bold mb-4">
                SPACE GREY
              </p>
              <p class="text-xs text-dark font-weight-bold">
                <del class="text-paragraph mr-4">£39.99</del><span>£29.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Best Seller Section End -->
    </div>
  </div>
</template>

