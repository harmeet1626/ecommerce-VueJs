<template>
  <div class="input-group rounded" style="width: 37%; padding-left: 100px">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
  </div>
  <div class="text-center container py-1">
    <h2 class="my-2 mt-3 mb-1">
      <strong>Products</strong>
    </h2>
    <section class="py-5" style="">
      <div class="container px-4 px-lg-5 mt-1">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <div class="col mb-5" v-for="i in products" :key="i.id">
            <div
              class="card h-100"
              style="
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                  0 6px 20px 0 rgba(0, 0, 0, 0.19);
              "
            >
              <div
                class="badge bg-danger text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <img
                class="card-img-top"
                :src="i.thumbnail"
                width="96"
                height="110"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h2 class="fw-bolder"></h2>
                  <span class="text-muted text-decoration">
                    {{ i?.title }} &nbsp;
                  </span>
                  ${{ i?.price }}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="display: flex; justify-content: center">
      <ul class="pagination">
        <li class="page-item">
          <a style="cursor: pointer" class="page-link"> Previous </a>
        </li>
        <li class="page-item">
          <a style="cursor: pointer" class="page-link"> Next </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.get_products();
  },
  methods: {
    async get_products() {
      await fetch("https://dummyjson.com/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.products = data.products;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
