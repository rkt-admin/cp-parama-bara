<script>
  export let website
  export let name
</script>

<h2
  class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
>
  <a href={website} class="flex items-center">
    <img src="/rakit-id-logo.svg" class="h-5" alt="{name} Logo" />
    <!-- <span class="self-center text-lg sm:text-3xl font-bold whitespace-nowrap dark:text-white">{name}</span> -->
  </a>
</h2>
