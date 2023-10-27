<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <h4 class="text-center mb-5">
        <strong>Product Category</strong>
      </h4>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="i in products" :key="i.id">
          <div style="cursor: pointer" class="bg-image hover-zoom ripple shadow-1-strong rounded">
            <img style="padding-left: 75px" src="https://source.unsplash.com/160x160/?${{i}}" class="w-10" />
            <a>
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.3)">
                <div class="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span class="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      {{ i }}
                    </span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(253, 253, 253, 0.15)"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.get_products();
  },
  methods: {
    async get_products() {
      await fetch("https://dummyjson.com/products/categories")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
