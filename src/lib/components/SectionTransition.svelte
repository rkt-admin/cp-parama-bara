<script>
    import Saos from 'saos'
    // function handleObserver(x) {
    //     console.info(x.detail)
    // }
    // on:update={handleObserver}
</script>

<Saos
    animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
    animation_out={'slide-out-fwd-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
    top={250}
    bottom={250}>
    <slot />
</Saos>

<style>
    @keyframes -global-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes -global-slide-out-fwd-center {
        0% {
            transform: translateZ(1);
            opacity: 1;
        }
        100% {
            transform: translateZ(600px);
            opacity: 0;
        }
    }

    @keyframes -global-slide-out-top {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-1000px);
            opacity: 0;
        }
    }
</style>
