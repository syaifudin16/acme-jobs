import { lucia } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const data = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			password: formData.get('password') as string
		};

		const hashPassword = await Bun.password.hash(data.password);

		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: hashPassword
			}
		});

		if (!user) {
			return fail(400, { message: 'User not created' });
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
} satisfies Actions;
