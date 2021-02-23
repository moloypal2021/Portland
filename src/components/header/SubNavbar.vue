<template>
  <div>
    <div class="bg-white">
      <div class="container px-0">
        <ul class="nav justify-content-center">
          <li class="nav-item py-2">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold pr-1"
              >TOP SALES</router-link
            >
          </li>
          <li class="nav-item py-2">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold pr-1"
              >BRAND FOCUS</router-link
            >
          </li>
          <li class="nav-item py-2">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold active pr-1"
              >HI-TECH</router-link
            >
          </li>
          <li class="nav-item py-2">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold pr-1"
              >BEST SELLERS</router-link
            >
          </li>
          <li class="nav-item py-2">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold pr-1"
              >PROJECTS</router-link
            >
          </li>
          <li class="nav-item py-2 ml-xl-auto">
            <router-link
              to="/"
              class="nav-link text-xs text-paragraph text-uppercase font-weight-bold pr-4"
              >SUPPORT</router-link
            >
          </li>
          <li class="nav-item">
            <form action="">
              <div
                class="input-group py-2 border border-top-0 border-paragraph"
              >
                <div class="input-group-prepend">
                  <div class="input-group-text pl-4 border-0 bg-transparent">
                    <i class="fas fa-search text-sm text-dark"></i>
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control font-weight-bold text-sm border-0"
                  id="inlineFormInputGroupUsername"
                  placeholder="I’m looking for ..."
                />
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>