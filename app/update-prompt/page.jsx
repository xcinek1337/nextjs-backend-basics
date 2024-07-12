'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Form from '@components/Form';

const EditPrompt = () => {
    const router = useRouter()
	const searcParams = useSearchParams();
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: '', tag: '' });
	const promptId = searcParams.get('id');

	useEffect(() => {
		const getPromptDetails = async () => {
			console.log(`hi`);
			const resposne = await fetch(`/api/prompt/${promptId}`);
			const data = await resposne.json();
			setPost({ prompt: data.prompt, tag: data.tag });
		};
		if (promptId) getPromptDetails();
	}, [promptId]);

	const createPrompt = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		if (!promptId) return alert('Prompt ID not found');
		try {
			const response = await fetch(`/api/prompt/${promptId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					prompt: post.prompt,
					tag: post.tag,
				}),
			});

			if (response.ok) {
				router.push('/');
			}
		} catch (err) {
			console.log(err);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Form
			type='Edit'
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createPrompt}
		/>
	);
};

export default EditPrompt;
