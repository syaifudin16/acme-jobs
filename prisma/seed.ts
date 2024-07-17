import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

try {
	const user = await prisma.user.upsert({
		where: {
			email: 'kDjU6@example.com'
		},
		update: {
			email: 'kDjU6@example.com',
			name: 'John Doe'
		},
		create: {
			name: 'John Doe',
			email: 'kDjU6@example.com',
			password: Bun.password.hashSync('password')
		}
	});

	await prisma.job.createMany({
		data: [
			{
				title: 'Software Engineer',
				description: 'We are looking for a software engineer to join our team',
				location: 'San Francisco, CA',
				salary: '$100,000 - $200,000',
				userId: user.id
			},
			{
				title: 'Product Manager',
				description: 'We are looking for a product manager to join our team',
				location: 'New York, NY',
				salary: '$80,000 - $120,000',
				userId: user.id
			},
			{
				title: 'Sales Representative',
				description: 'We are looking for a sales representative to join our team',
				location: 'Los Angeles, CA',
				salary: '$50,000 - $70,000',
				userId: user.id
			},
			{
				title: 'Accountant',
				description: 'We are looking for an accountant to join our team',
				location: 'Chicago, IL',
				salary: '$60,000 - $80,000',
				userId: user.id
			},
			{
				title: 'Customer Service Representative',
				description: 'We are looking for a customer service representative to join our team',
				location: 'Houston, TX',
				salary: '$40,000 - $60,000',
				userId: user.id
			},
			{
				title: 'Customer Service Representative',
				description: 'We are looking for a customer service representative to join our team',
				location: 'Houston, TX',
				salary: '$40,000 - $60,000',
				userId: user.id
			}
		]
	});
} catch (error) {
	await prisma.$disconnect();
	console.error(error);
}
