<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { job } = data;
</script>

<main>
	<h1>Edit Job</h1>
	<form method="post">
		<label for="title">Title</label>
		<input type="text" name="title" id="title" required value={job?.title} />

		<label for="description">Description</label>
		<input type="text" name="description" id="description" required value={job?.description} />

		<label for="location">Location</label>
		<input type="text" name="location" id="location" required value={job?.location} />

		<label for="salary">Salary</label>
		<input type="text" name="salary" id="salary" required value={job?.salary} />
		<button type="submit">Edit</button>
	</form>

	<a href="/">Back to Jobs</a>
</main>

<style>
	main {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
