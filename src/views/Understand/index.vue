<template>
    <div>了解我们</div>
    <!-- <button @click="goContact">了解我们</button> -->
    <el-button type="primary" @click="goContact">了解我们</el-button>
    <el-button type="danger">危险按钮</el-button>
</template>

<script setup>

import {useRouter} from 'vue-router'
const router = useRouter()
const goContact = ()=>{
    router.push('/contact')
}

</script>