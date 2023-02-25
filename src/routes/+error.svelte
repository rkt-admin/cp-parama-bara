<script>
    import { page } from '$app/stores'
    import Divider from '$lib/components/Divider.svelte'
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation'
    import Logo from '../components/Logo.svelte'

    const goSomeWhere = () => {
        goto('/')
    }
</script>

<div class="justify-center">
    <Divider size="medium" />
    <div
        class="
absolute
z-[-1]
w-full
h-1/2
bg-gray-900
dark:bg-gray-900
py-10
top-0
left-0 
bg-pattern-question
" />
    <center class="m-auto mt-24 ">
        <Logo size="large" text={false} dark />
        <div class="tracking-widest mt-10">
            <span class="text-yellow-400 text-5xl tracking-widest">{$page.status}</span>
            <div class="text-white text-xl mt-4 tracking-normal">
                Sorry, We couldn't find what you are looking for!
            </div>
        </div>
    </center>
    <center class="mt-6">
        <button
            on:click={goSomeWhere}
            class="text-black font-normal text-base py-2 px-4 bg-yellow-400 rounded-md hover:bg-yellow-300"
            >Go Back</button>
    </center>
    <Divider size="small" />
</div>

<style>
    .emoji-404 {
        position: relative;
        animation: mymove 2.5s infinite;
    }

    @keyframes mymove {
        33% {
            top: 0px;
        }
        66% {
            top: 20px;
        }
        100% {
            top: 0px;
        }
    }
</style>
