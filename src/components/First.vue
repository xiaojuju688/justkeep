<template>
    
    <div>
        
        <LoginTop>2</LoginTop>
        {{msg}}
    </div>
</template>

<style >
   body{ background-color:grey;}
</style>

<script>
import LoginTop from '@/components/common/LoginTop.vue'

export default {
  
    components:{
            LoginTop
        },
        data(){
            return {
                msg:""
            }
        }
        
  
  
}
</script>
