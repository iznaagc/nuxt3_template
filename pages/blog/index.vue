<script setup>
    // const route = useRoute() // ルーティング情報を取得
    // const queryPath = route.fullPath // フルパス(/blog/articles/hello)が取得される
const props = defineProps({
  max: {
    type: Number,
    default: -1,
  }
})
    // 記事データ取得
    const { data } = await useAsyncData('blog-article', () => queryContent('blog').sort({date: -1}).limit(props.max).find())
    
    // // 各種情報を確保
    // const article = {
    //     title: data._rawValue.title,
    //     tags: data._rawValue.tags.split(','),
    //     categories: data._rawValue.categories.split(','),
    //     body: data._rawValue.children
    // }
    
    onMounted(() =>  {
        console.log("マウンテッド")
    })
    
</script>
<template lang="pug">
h1 Blog
h2 Use Modules Pug + Scss + vanilla-framework etc...
ul
p {{data}}
    //- ContentList(v-slot='{ list }' path='/blog' :query='{where: { tags:{$contains: "blog"} }}')
    //-     li(:key='post.date' :class='$style.post' v-for='post in (props.max === -1 ? list.slice().reverse() : data)')
    //-         ArticleLink {{ post.title }}

</template>

<style module>
.post-list {
  padding: 0;
}
.post {
  list-style-type: none;
}
</style>