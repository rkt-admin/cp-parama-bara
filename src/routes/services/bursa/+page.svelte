<script>
  async function test() {
    const res = await fetch(`/api/bursa?q=/get/foo`)
    const text = await res.text()

    if (res.ok) {
      return text
    } else {
      throw new Error(text)
    }
  }

  let promise = test();

  function handleClick() {
		promise = test();
	}
  //   async function login() {
  //     try {
  //       const result = await postJson(['SET', 'foo', 'bar'])
  //       console.log(result)
  //       // tokenStore.set(token)
  //       // error = ''
  //       // if (browser) goto('/about') // cannot call on server
  //     } catch (e) {
  //       console.error('login.svelte login: e =', e)
  //       // error = 'invalid email or password'
  //     }
  //   }
</script>

<!-- <button type="button" on:click={login}>Post Upstash</button> -->
<button type="button" on:click={handleClick}>Load Data</button>

<div class="p-2 md:w-1/2 w-full">
  <div class="bg-blue-600 rounded p-4 text-center text-white">
    {#await promise}
      <p>...waiting</p>
    {:then number}
      <p>The number is {number}</p>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>
