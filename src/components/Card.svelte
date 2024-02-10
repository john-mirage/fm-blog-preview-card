<script>
    import Image from "./Image.svelte";
    import Category from "./Category.svelte";
    import PublishedDate from "./Published-date.svelte";
    import Title from "./Title.svelte";
    import Excerpt from "./Excerpt.svelte";
    import Author from "./Author.svelte";
</script>

<article class="flex flex-col items-start w-full max-w-384 bg-white p-24 rounded-card border border-black shadow-card">
    <Image />
    <Category />
    <PublishedDate />
    <Title />
    <Excerpt />
    <Author />
</article>