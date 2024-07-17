<main>
	<h1>Add Job</h1>
	<form method="post">
		<label for="title">Title</label>
		<input type="text" name="title" id="title" required placeholder="Job Title" />

		<label for="description">Description</label>
		<input type="text" name="description" id="description" required placeholder="Job Description" />

		<label for="location">Location</label>
		<input type="text" name="location" id="location" required />

		<label for="salary">Salary</label>
		<input type="text" name="salary" id="salary" required />
		<button type="submit">Add</button>
	</form>

	<a href="/jobs">Back to Jobs</a>
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
