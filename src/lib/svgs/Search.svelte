<script lang="ts">
    import { ModalTypes } from 'types/main';
    import { showModal } from 'utilities/main';
</script>

<svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48"
    height="48"
    on:click={() => showModal(ModalTypes.FindProfiles)}
    ><path
        class="svg"
        d="M22 22.75q-2.7 0-4.625-1.95-1.925-1.95-1.925-4.6 0-2.75 1.925-4.65Q19.3 9.65 22 9.65t4.625 1.9q1.925 1.9 1.925 4.65 0 2.65-1.925 4.6Q24.7 22.75 22 22.75Zm21.8 22.6-6.25-6.3q-1.1.8-2.275 1.125Q34.1 40.5 33 40.5q-3.15 0-5.325-2.175Q25.5 36.15 25.5 33q0-3.15 2.175-5.35 2.175-2.2 5.325-2.2 3.15 0 5.35 2.2 2.2 2.2 2.2 5.35 0 1.1-.325 2.275Q39.9 36.45 39.05 37.5l6.35 6.3ZM33 38.3q2.25 0 3.8-1.525Q38.35 35.25 38.35 33t-1.55-3.8q-1.55-1.55-3.8-1.55t-3.775 1.55Q27.7 30.75 27.7 33t1.525 3.775Q30.75 38.3 33 38.3Zm-9.15-10.85q-1.55 2.65-1.525 5.6.025 2.95 1.625 5.45H7.15v-3.75q0-1.55.775-2.675Q8.7 30.95 10.15 30.2q2.25-1.1 5.975-2.075 3.725-.975 7.725-.675Z"
    /></svg
>

<style>
    svg {
        margin-top: 10px;
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
