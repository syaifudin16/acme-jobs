<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<header>
	<h1>Acme</h1>
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
	<div class="hero">
		<h1>Acme Job</h1>
		<p>One-stop shop for all your job needs</p>
	</div>
	<div class="col-2">
		<div class="card">
			<h2>For Developer</h2>
			<p>Find your next developer job, and start your journey</p>
			<button>
				<a href="/">Browse Job</a>
			</button>
		</div>
		<div class="card">
			<h2>For Employer</h2>
			<p>Find your best developer baed on your needs</p>
			<button>
				<a href="/add">Add Job</a>
			</button>
		</div>
	</div>
	<div class="jobs">
		<h2>Recent Jobs</h2>
		{#each data.jobs as job}
			<div class="card">
				<h3>{job.title}</h3>
				<p>{job.description}</p>
				<p>{job.salary}</p>
				<p>{job.location}</p>
				<button><a href="/{job.id}">View Details</a></button>
			</div>
		{/each}
	</div>
</main>
<footer>
	<p>Copyright &copy; {new Date().getFullYear()} Acme. All rights reserved.</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}
	header nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.hero h1 {
		font-size: 3rem;
	}
	.hero p {
		font-size: 1.5rem;
	}

	.col-2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.jobs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		flex-basis: 40%;
		border: 1px solid #ccc;
		padding: 1rem 2rem;
	}
</style>
