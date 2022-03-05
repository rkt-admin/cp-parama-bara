<script>
  import { GoogleAuth, FacebookAuth } from '@beyonk/svelte-social-auth'
</script>

<GoogleAuth
  clientId="your-google-auth-client-id"
  on:auth-success={(e) => console.dir(e.detail.user)}
/>
<FacebookAuth appId="your-facebook-app-id" on:auth-success={(e) => console.dir(e.detail.user)} />
