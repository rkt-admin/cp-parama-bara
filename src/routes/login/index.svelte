<script context="module">
  export const prerender = true
</script>

<script>
  import { t, locale, locales } from '$lib/i18n'
</script>

<!-- ====== Forms Section Start -->
<section>
  <div class="container w-full max-w-xl mx-auto items-center text-center">
    <div
      class="   text-base      
                relative
                px-4
                pt-4
              "
    >
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        Rakit Account
      </h2>
      <p class="text-sm md:text-base">
        {$t('login.title.sub')}
      </p>
    </div>
    <div
      class="   text-base      
                relative
                px-8
                pb-32
                sm:px-12
                md:px-[60px]
              "
    >
      <form class="w-full py-5">
        <div class="flex items-center border-b-2 border-slate-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Email"
            aria-label="Email"
          />&
          <input
            class=" appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <button
            class="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            {$t('login.form.button.login')}
          </button>
          <!-- <button
            class="flex-shrink-0 border-transparent border-4 text-slate-500 hover:text-slate-800 text-sm py-1 px-2 rounded"
            type="button"
          >
            Cancel
          </button> -->
        </div>
      </form>
      <!-- <p class="text-base mb-6 text-[#adadad]">Connect With</p> -->
      <!-- <GoogleAuth
            clientId="1084908729896-9heh1hn3bqp3e3ibeip70l2ds6vqahhj"
            on:auth-success={(e) => console.dir(e.detail)}
          />
          <div class="py-1 block" />
          <FacebookAuth
            appId="488253266130353"
            on:auth-success={(e) => console.dir(e.detail.user)}
          /> -->
      <a href="/"> {$t('login.link.forgot-password')} </a>
    </div>
  </div>
</section>
<!-- ====== Forms Section End -->
