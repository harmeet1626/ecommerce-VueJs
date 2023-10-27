<template>
  <div>
    <section style="background-color: #eee;">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div class="card text-black">
              <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img :src="product.thumbnail" class="card-img-top" alt="Apple Computer" />
              <div class="card-body">

                <div class="text-center">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="text-muted mb-4">{{ product.description }}</p>
                </div>
                <!-- <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div> -->
                <div class="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span><span>${{ product.price }}</span>
                </div>
                <button type="button" class="btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    this.get_products()
  },
  methods: {
    async get_products() {
      await fetch(`https://dummyjson.com/products/${this.$route.params.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.product = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
