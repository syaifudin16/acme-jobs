import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	return {
		user: event.locals.user
	};
};

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const userId = event.locals!.user!.id;
		const data = {
			title: formData.get('title') as string,
			description: formData.get('description') as string,
			location: formData.get('location') as string,
			salary: formData.get('salary') as string
		};

		const job = await prisma.job.create({
			data: {
				title: data.title,
				description: data.description,
				location: data.location,
				salary: data.salary,
				user: {
					connect: {
						id: userId
					}
				}
			}
		});
		if (!job) {
			return fail(400, { message: 'Job not created' });
		}

		throw redirect(302, `/${job.id}`);
	}
};
