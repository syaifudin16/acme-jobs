import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	const id = event.params.id;
	return {
		job: await prisma.job.findUnique({
			where: {
				id: id
			}
		}),
		user: event.locals.user
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async (event) => {
		const id = event.params.id;
		const job = await prisma.job.delete({
			where: {
				id: id
			}
		});
		if (!job) {
			return fail(400, { message: 'Job not deleted' });
		}

		throw redirect(302, '/');
	}
};
