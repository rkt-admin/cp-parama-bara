<script>
	export let size = 'small'; // small, medium, or large
	export let text = false; // logo-only, logo-text
	export let dark = 'light'; // light, dark
  import { URL_BASE, SITE_NAME, MODE } from '$lib/variables'
</script>

<div class="focus:shadow-outline inline-block bg-clip-text !text-transparent focus:outline-none">
	<a href={URL_BASE} class="flex items-center">
		<img
			src="/logo.svg"
			class:small={size === 'small'}
			class:medium={size === 'medium'}
			class:large={size === 'large'}
			alt="{SITE_NAME} Logo"
		/>
		{#if text}
			<div
				class="inline-block h-6 pl-2 text-lg font-light uppercase
			{dark ? 'text-slate-700 dark:text-slate-100' : 'text-slate-100 dark:text-slate-700'}"
				class:text-small={size === 'small'}
				class:text-medium={size === 'medium'}
				class:text-large={size === 'large'}
			>
				{SITE_NAME}
			</div>
		{/if}
	</a>
</div>

<style lang="postcss">
	.small {
		@apply h-6;
	}
	.medium {
		@apply h-9;
	}
	.large {
		@apply h-11;
	}
	.text-small {
		@apply text-sm font-bold;
	}
	.text-medium {
		@apply text-base font-bold;
	}
	.text-large {
		@apply text-lg font-bold;
	}
</style>

