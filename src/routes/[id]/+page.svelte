<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header>
	<h1><a href="/">Acme</a></h1>
	<nav>
		{#if data.user}
			<p>Hi {data.user.name}</p>
			<form action="?/logout" method="post" use:enhance>
				<button type="submit">Logout</button>
			</form>
		{:else}
			<button><a href="/login">Login</a></button>
			<button><a href="/register">Register</a></button>
		{/if}
	</nav>
</header>

<main>
	<article>
		<h1>{data.job?.title}</h1>
		<div>
			<p>{data.job?.description}</p>
			<p>{data.job?.location}</p>
			<p>{data.job?.salary}</p>
		</div>
	</article>
	<div class="actions">
		{#if data.user && data.user.id === data.job?.userId}
			<button>
				<a href="/{data.job?.id}/edit">Edit</a>
			</button>
			<form action="?/delete" method="post" use:enhance>
				<button type="submit">Delete</button>
			</form>
		{/if}
	</div>
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}

	header a {
		text-decoration: none;
		color: inherit;
	}
	header nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	main {
		display: flex;
		flex-direction: column;
	}

	article {
		border: 1px solid #ccc;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
