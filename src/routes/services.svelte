<script context="module">
  import { getJson, postJson } from '$lib/upstash'
  // Since the load function is async, it returns a promise.
  // This component won't be rendered until the promise resolves.
  
</script>

<script>
  async function load() {
    const todos = await getJson('/get/foo')
    // console.log(todos)
    // return;
  }
  async function login() {
    try {
      const result = await postJson(["SET", "foo", "bar"])
      console.log(result)
      // tokenStore.set(token)
      // error = ''
      // if (browser) goto('/about') // cannot call on server
    } catch (e) {
      console.error('login.svelte login: e =', e)
      error = 'invalid email or password'
    }
  }
</script>

<section id="services">
  <button type="button" on:click={login}>Post Upstash</button>
  <button type="button" on:click={load}>Load Data</button>
  <div class="container mx-auto">
    <div class="py-20">
      <h1 class="title-font text-center text-gray-900 mb-10 title-font font-medium">
        Our services
      </h1>
      <p class="mb-8 leading-relaxed text-center">
        We offer the following services to our clients.
      </p>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto">
        <div class="p-2 md:w-1/2 w-full">
          <div class="bg-blue-600 rounded p-4 text-center text-white">
            <p>Website design</p>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="bg-blue-600 rounded p-4 text-center text-white">
            <p>Website development</p>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="bg-blue-600 rounded p-4 text-center text-white">
            <p>Mobile application design</p>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="bg-blue-600 rounded p-4 text-center text-white">
            <p>Mobile application development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
