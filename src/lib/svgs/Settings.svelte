<script>
    import { ModalTypes } from 'types/main';
    import { showModal } from 'utilities/main';
</script>

<svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48"
    height="48"
    on:click={() => {
        showModal(ModalTypes.Settings);
    }}
    ><path
        class="svg"
        d="m20.15 42.85-.9-5.95q-.9-.3-2.1-.975-1.2-.675-2.25-1.525l-5.5 2.55L5.45 30l5.05-3.7q-.1-.5-.15-1.1-.05-.6-.05-1.2 0-.45.05-1.1.05-.65.15-1.25l-5.05-3.7 3.95-6.9 5.55 2.5q.85-.7 2-1.375t2.25-1.025l.95-6h7.75l.9 5.95q1.1.4 2.2 1.05t2 1.4l5.65-2.5 3.9 6.9-5.15 3.7q.1.6.175 1.2.075.6.075 1.15 0 .5-.075 1.1-.075.6-.175 1.2l5.1 3.7-3.9 6.95L33 34.4q-.9.8-1.975 1.45-1.075.65-2.225 1l-.9 6Zm3.75-13.3q2.35 0 3.975-1.625T29.5 24q0-2.3-1.625-3.925T23.9 18.45q-2.3 0-3.925 1.625T18.35 24q0 2.3 1.625 3.925T23.9 29.55Z"
    /></svg
>

<style>
    svg {
        margin-top: 15px;
    }

    @media screen and (max-width: 720px) {
        svg {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 520px) {
        svg {
            margin-left: 5px;
        }
    }
</style>
