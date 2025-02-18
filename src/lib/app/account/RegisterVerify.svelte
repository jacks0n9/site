<script lang="ts">
    import type { FronvoError } from 'interfaces/all';
    import { tokenInvalid } from 'stores/all';
    import { loginSucceeded } from 'stores/main';
    import { socket } from 'stores/all';
    import SvelteSegmentedInput from 'svelte-segmented-input';
    import { fade, scale } from 'svelte/transition';
    import { setKey } from 'utilities/global';
    import Center from '$lib/app/Center.svelte';
    import { accountPanelAnimDuration } from 'stores/account';

    let code: string;
    let isErrorVisible = false;
    let errorMessage: string;

    function verify(): void {
        function setError(error: FronvoError): void {
            isErrorVisible = true;
            errorMessage = error.err.msg;
        }

        function attemptVerify(): void {
            socket.emit('registerVerify', { code }, ({ err, token }) => {
                if (err) {
                    setError({ err });
                } else {
                    setKey('token', token);
                    $tokenInvalid = false;
                    $loginSucceeded = true;
                }
            });
        }

        attemptVerify();
    }
</script>

<svelte:head>
    <title>Fronvo | Verify</title>
</svelte:head>

<div
    class="verify-container"
    transition:scale={{ duration: accountPanelAnimDuration, start: 1.1 }}
>
    <h1 id="header">Register Verification</h1>

    <h1 id="info">A 6-digit verification code has been sent to your email</h1>

    {#if isErrorVisible}
        <h1 in:fade={{ duration: 500 }} id="error-header">
            {errorMessage}
        </h1>
    {/if}

    <SvelteSegmentedInput
        bind:value={code}
        on:valueEntered={verify}
        length={6}
        style={{
            fontSize: '2rem',
            borderRadius: '10px',
            borderWidth: '2px',
            borderColorActive: 'rgb(255, 255, 255)',
            textColor: 'white',
            inputWidth: '100%',
            padding: '10px 10px 10px 10px',
        }}
    />

    <button on:click={verify}>Verify</button>
</div>

<style>
    .verify-container {
        position: fixed;
        border-radius: 10px;
        background: rgb(111, 28, 236);
        padding: 20px 30px 20px 30px;
        box-shadow: 0 0 5px black;
        text-align: center;
        width: 550px;
    }

    .verify-container #header {
        color: white;
        text-align: center;
        font-size: 3rem;
        margin: 10px 10px 30px 10px;
    }

    .verify-container #info {
        font-size: 1.8rem;
        color: white;
    }

    .verify-container #error-header {
        color: red;
        font-size: 2rem;
        width: 100%;
    }

    .verify-container button {
        font-size: 2rem;
        margin-top: 20px;
    }

    @media screen and (max-width: 720px) {
        .verify-container {
            width: 450px;
        }

        .verify-container #header {
            font-size: 2.3rem;
        }

        .verify-container #info {
            font-size: 1.6rem;
        }

        .verify-container #error-header {
            font-size: 1.7rem;
        }

        .verify-container button {
            font-size: 1.8rem;
        }
    }

    @media screen and (max-width: 520px) {
        .verify-container {
            width: 350px;
        }

        .verify-container #header {
            font-size: 1.7rem;
        }

        .verify-container #info {
            font-size: 1.4rem;
        }

        .verify-container #error-header {
            font-size: 1.4rem;
        }

        .verify-container button {
            font-size: 1.5rem;
        }
    }
</style>
