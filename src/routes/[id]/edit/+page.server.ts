import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	return {
		job: await prisma.job.findUnique({
			where: {
				id: event.params.id
			}
		}),
		user: event.locals.user
	};
};

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const data = {
			title: formData.get('title') as string,
			description: formData.get('description') as string,
			location: formData.get('location') as string,
			salary: formData.get('salary') as string
		};

		const job = await prisma.job.update({
			where: {
				id: event.params.id
			},
			data: {
				title: data.title,
				description: data.description,
				location: data.location,
				salary: data.salary
			}
		});
		if (!job) {
			return fail(400, { message: 'Job not created' });
		}

		throw redirect(302, '/' + job.id);
	}
};
