<template>
  <b-col md="6" class="m-3">
    <b-card header="Add Product">
      <b-card-body>
        <b-form autocomplete="off">
          <b-form-group label="Name">
            <b-form-input v-validate="{required: true, min: 3}" v-model= "form.name" id="name" name= 'name' trim></b-form-input>
            <div v-if="submitted" class="error-message">
              {{ errors.first('name') }}
            </div>
          </b-form-group>
          <b-form-group label="Price ($)">
            <b-form-input v-validate="{required: true, numeric: true}" v-model= "form.price" id="price" name= 'price' trim> </b-form-input>
            <div v-if="submitted" class="error-message">
              {{ errors.first('price') }}
            </div>
          </b-form-group>
          <b-form-group label="Brand">
            <b-form-input v-validate="{required: true}" v-model= "form.brand" id="brand" name= 'brand' trim></b-form-input>
            <div v-if="submitted" class="error-message">
              {{ errors.first('brand') }}
            </div>
          </b-form-group>
          <b-form-group label="Inventory">
            <div v-if="submitted" class="error-message">
              {{ errors.first('inventoryStatus') }}
            </div>
            <b-form-radio v-validate="{required: true}" v-model= "form.inventoryStatus" name="inventoryStatus" value="true">In Stock</b-form-radio>
            <b-form-radio v-model= "form.inventoryStatus" name="inventoryStatus" value="false">Out of Stock</b-form-radio>
          </b-form-group>
        </b-form>
      </b-card-body>
      <b-button block variant="primary" @click="addProduct">Add Product</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  data(){
    return {
      form: {
        name: '',
        price: '',
        brand: '',
        inventoryStatus: ''
      },
      submitted: false
    }
  },
  methods: {
    /* eslint-disable-no-console */
    async addProduct(){
      this.submitted = true
      let result = await this.$validator.validate()
      if(result){
        this.$store.dispatch('addProduct', {
          name: this.form.name,
          price: '$' + this.form.price,
          brand: this.form.brand,
          inventoryStatus: this.form.inventoryStatus === 'true'
        })
        this.form = {
          name: '',
          price: '',
          brand: '',
          inventoryStatus: ''
        }
        this.submitted = false
      }
      console.log(result)
      console.log(this.form)
    }
  }

}
</script>

<style>

</style>