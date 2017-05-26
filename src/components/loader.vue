<template>
    <div class="loader" :style="{ 
        height: loaderHeight(), 
        width: loaderWidth(), 
        margin: loaderMargin(), 
        borderWidth: loaderBorder() }"></div>
</template>
<script>
    export default {
        name: 'loader',
        props: ['width', 'height', 'margin', 'border'],
        methods: {
            loaderWidth() {
                return this.width == null ? '100px' : this.width
            },
            loaderHeight() {
                return this.height == null ? '100px' : this.height
            },
            loaderMargin() {
                return this.margin == null ? '40px 75px' : this.margin
            },
            loaderBorder() {
                return this.border == null ? '16px' : this.border
            }
        },
        created: () => {}
    }
</script>

<style scoped>
    .loader {
        vertical-align: middle;
        display: inline-block;
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
        margin: 40px 75px;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>