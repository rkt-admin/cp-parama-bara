<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
</script>

<div class="flex justify-center items-center">
  <card class="grid grid-cols-6 max-w-5xl rounded-xl bg-blue-800 hero-card">
    <div class="col-span-4 hero-span">
      <h2 class="font-bold text-3xl ml-10 mt-8">The journey is never ending</h2>
      <p class="text-white text-lg ml-10 mt-5">
        The journey is never ending. There's always gonna be growth, improvement, adversity; you
        just gotta take it all in and do what's right, continue to grow, continue to live in the
        moment.
      </p>
      <ButtonLink
        href="/posts"
        size="medium"
        raised={true}
        arrows={true}
        class="text-white font-semibold ml-10 mt-5 mb-8">View All Posts</ButtonLink
      >
    </div>

    <div class="col-span-2 hero-span relative">
      <img
        src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
        class="hero-image"
        alt="test"
      />
    </div>
  </card>
</div>

<style>
  h2 {
    color: var(--tw-prose-invert-headings);
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
