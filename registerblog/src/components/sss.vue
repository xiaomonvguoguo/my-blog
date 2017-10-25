<template>
  <div class="box">
    <div class="head"></div>
    <div class="content">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
    <div class="clear"></div>
    <div class="foot"></div>
</div>
</template>
<style>
    .box{
        /* border:1px solid red; */
        width:100%;
        
    }
    .head{
        border:1px solid red;
        width:100%;
        height:10vw;
    }
    .content{
        width:100%;
        height:30vw;
        margin:1vw auto;
        display: flex;
    }
    .left{
        border:1px solid red;
        width:10%;
        height:100%;
    }
    .center{
        border:1px solid red;
        width:40%;
        margin:0 1vw;
    }
    .right{
        border:1px solid red;
        width:50%;
        height:100%;
    }
    .foot{
        border:1px solid red;
        height: 10vw;
        overflow: hidden;
    }

</style>