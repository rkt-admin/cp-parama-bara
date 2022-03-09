<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
</script>

<div class="flex justify-center items-center">
  <card class="grid grid-cols-6 max-w-5xl rounded-xl bg-blue-800 hero-card">
    <div class="col-span-4 hero-span">
      <h3 class="font-bold text-3xl ml-7 mt-5">Today Quotes</h3>
      <blockquote class="text-white text-lg ml-5 mt-5">
        The journey is never ending. There's always gonna be growth, improvement, adversity; you
        just gotta take it all in and do what's right, continue to grow, continue to live in the
        moment
      </blockquote>
      <!-- <ButtonLink
        href="/blog"
        size="small"
        raised={true}
        arrows={true}
        class="text-white font-semibold ml-10 mt-2 mb-6">View All Posts</ButtonLink
      > -->
    </div>
    <div class="col-span-2 hero-span relative">
      <img
        src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
        class="hero-image"
        alt="Today"
      />
    </div>
  </card>
</div>

<style lang="postcss">
  h3 {
    color: var(--tw-prose-invert-headings);
    @apply mt-4;
  }
  blockquote {
    color: var(--tw-prose-invert-headings);
    @apply mt-4 border-l-0 border-white;
  }
  .hero-image {
    position: absolute;
    bottom: -24px;
    height: 5em;
    right: -57px;
  }
  .hero-card {
    margin: 0;
    padding: 0;
  }
  .hero-span {
    margin: 0;
    padding: 0;
    grid-column: span 5;
  }
  @media (min-width: 600px) {
    .hero-image {
      position: absolute;
      bottom: -32px;
      right: -144px;
      height: 6em;
    }
    .hero-span {
      margin: 0;
      padding: 0;
    }
  }
</style>
