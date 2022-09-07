<script setup>
const route = useRoute() // ルーティング情報を取得
const queryPath = route.fullPath // フルパス(/blog/articles/hello)が取得される


// 記事データ取得
const { data } = await useAsyncData('blog-article', () => queryContent(queryPath).findOne())

// 各種情報を確保
const article = {
    title: data._rawValue.title,
    tags: data._rawValue.tags.split(','),
    categories: data._rawValue.categories.split(','),
    body: data._rawValue.children
}

onMounted(() =>  {
    console.log("マウンテッド")
})

</script>
<template>
    <h1>{{article.title}}</h1>
    <h2>{{article.tags}}</h2>
    <h2>{{article.categories}}</h2>
    <div>
        <p>{{article.body}}</p>
    </div>
</template>
    