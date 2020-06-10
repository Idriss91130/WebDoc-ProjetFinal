<template>
    <div class="text_chapter">
        <img src="../assets/mouse.png">
        <div class="line"></div>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'ChapterText',
    props: {
        text: String
    }
}
</script>

<style lang="scss">
.text_chapter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 40%;
    width: 81%;
}

.line {
    height: 5px;
    width: 190px;
    background-color: white;
}

p {
    font-family: Ebrima;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
    text-align: left;
}
</style>