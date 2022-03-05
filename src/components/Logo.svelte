<script>
  export let website
  export let name
</script>

<h2
  class="!text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 dark:from-violet-500 dark:to-pink-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
>
  <a href={website} class="flex items-center">
    <img src="/rakit-id-logo.svg" class="mr-2 h-7" alt="{name} Logo" />
    <!-- <span class="self-center text-lg sm:text-3xl font-bold whitespace-nowrap dark:text-white">{name}</span> -->
  </a>
</h2>
