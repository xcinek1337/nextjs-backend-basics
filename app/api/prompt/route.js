import { connectToDB } from '@utils/database';

import Prompt from '@models/prompt';

export const dynamic = 'force-dynamic';
export const GET = async (req, res) => {
	try {
		await connectToDB();
		const prompts = await Prompt.find({}).populate('creator');
		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (err) {
		console.log(err);
		return new Response('Failed to fetch a posts', { status: 500 });
	}
};
