import Link from 'next/link';
import { useState } from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	const [errors, setErrors] = useState({});

	const validate = () => {
		const newErrors = {};
		if (!post.prompt.trim()) newErrors.prompt = 'Prompt is required';
		if (!post.tag.trim()) newErrors.tag = 'Tag is required';
		return newErrors;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			handleSubmit();
		}
	};

	return (
		<section className='w-full max-w-full flex-start flex-col'>
			<h1 className='head_text text-left'>
				<span className='blue_gradient'>{type} Post</span>
			</h1>
			<p className='desc text-left max-w-md'>
				{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
			</p>

			<form
				className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
				onSubmit={onSubmit}
			>
				<label>
					<span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
				</label>
				<textarea
					value={post.prompt}
					placeholder='Write your prompt here...'
					className='form_textarea'
					onChange={(e) => setPost({ ...post, prompt: e.target.value })}
				/>
				{errors.prompt && <span className='font-bold orange_gradient'>{errors.prompt}</span>}
				<label>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Tag <span className='font-normal'>(#product, #webdevelopment, #idea)</span>
					</span>
				</label>
				<input
					value={post.tag}
					placeholder='Write your tag here...'
					className='form_input'
					onChange={(e) => setPost({ ...post, tag: e.target.value })}
				/>
				{errors.tag && <span className='font-bold orange_gradient'>{errors.tag}</span>}
				<div className='flex-end mc-3 mb-5 gap-4'>
					<Link
						className='text-gray-500 text-sm'
						href={'/'}
					>
						Cancel
					</Link>
					<button
						className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
						type='submit'
						disabled={submitting}
					>
						{submitting ? `${type}ing...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
