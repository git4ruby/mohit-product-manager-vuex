<template>
  <div>
     <b-button @click="modalShow = !modalShow"><i class="fas fa-edit"></i></b-button>
     <b-modal 
      v-model="modalShow"
      title="UpdateProduct"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleSubmit"
      >
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
     </b-modal>
  </div>
</template>

<script>
export default {
  name: 'UpdateProduct',
  props: ['product'],
  data() {
    return {
      modalShow: false,
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
    showModal(){
      this.form = {
        name: this.$props.product.name,
        price: this.$props.product.price.split('$')[1],
        brand: this.$props.product.brand,
        inventoryStatus: this.$props.product.inventoryStatus.toString(),
      }
    },
    resetModal(){
      console.log('Model Closed')
      this.form = {}
    },
    async handleSubmit(bvModalEvt){
      try {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        this.submitted = true
        let result = await this.$validator.validate()
        console.log(result)
        console.log('Model Submitted')
        if(result){
          await this.$store.dispatch('updateProduct', {
            name: this.form.name,
            price: '$' + this.form.price,
            brand: this.form.brand,
            inventoryStatus: this.form.inventoryStatus === 'true',
            id: this.$props.product.id
          })
          this.showToast('Product updated successfully','SUCCESS')
          this.modalShow = false
          this.submitted = false
        }
      } catch(error) {
        console.log(error)
        this.showToast(error.message,'ERROR')
      }
    }
  }
}
</script>

<style>

</style>

