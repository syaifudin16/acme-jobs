import { lucia } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { verify } from '@node-rs/argon2';
import { fail, redirect, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const data = {
			email: formData.get('email') as string,
			password: formData.get('password') as string
		};

		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		});

		if (!user) {
			return fail(400, { message: 'User not found' });
		}

		const validPassword = await verify(user.password, data.password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}
		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
