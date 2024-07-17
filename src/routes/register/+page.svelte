<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<h1>Register</h1>

	{#if form?.message}
		<p>{form.message}</p>
	{:else}
		<p>Input your name, email and password</p>
	{/if}

	<form method="post">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" required />

		<label for="email">Email</label>
		<input type="text" name="email" id="email" required />

		<label for="password">Password</label>
		<input type="password" name="password" id="password" required />

		<button type="submit">Register</button>
	</form>
	<p>
		Already have an account? <a href="/login">Login</a>
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
