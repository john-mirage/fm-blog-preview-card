<script>
    import articleIllustration from "../images/illustration-article.svg";
    import avatarImage from "../images/image-avatar.webp";
</script>

<article class="flex flex-col items-start w-full max-w-384 bg-white p-24 rounded-card border border-black shadow-card">
    <img class="mb-24 rounded-image" src={articleIllustration} alt="Blog post illustration" draggable="false">
    <a class="mb-12 inline-block rounded-tag bg-yellow px-12 py-4 text-tag-sm text-black xs:text-tag-lg transition-colors hover-device:hover:bg-black hover-device:hover:text-white" href="/">Learning</a>
    <p class="mb-12 text-date-sm text-black xs:text-date-lg">Published 21 Dec 2023</p>
    <h2>
      <a class="mb-12 block text-title-sm text-black xs:text-title-lg transition-colors hover-device:hover:text-yellow" href="/">HTML & CSS foundations</a>
    </h2>
    <p class="mb-24 text-description-sm text-grey xs:text-description-lg">These languages are the backbone of every website, defining structure, content, and presentation.</p>
    <a class="flex justify-start items-center gap-12 group" href="/">
        <img class="w-32 h-32" src={avatarImage} alt="avatar">
        <span class="text-author-sm text-black xs:text-author-lg transition-colors hover-device:group-hover:text-yellow">Greg Hooper</span>
    </a>
</article>