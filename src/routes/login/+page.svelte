<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<main>
	<h1>Login</h1>
	{#if form?.message}
		<p>{form.message}</p>
	{:else}
		<p>Input your email and password</p>
	{/if}

	<form method="post" use:enhance>
		<label for="email">Email</label>
		<input type="text" name="email" id="email" required />

		<label for="password">Password</label>
		<input type="password" name="password" id="password" required />

		<button type="submit">Login</button>
	</form>
	<p>
		Don't have an account? <a href="/register">Register</a>
	</p>
</main>

<style>
	main {
		padding: 1rem 0;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		font-weight: bold;
	}

	input {
		padding: 0.5rem;
	}
</style>
