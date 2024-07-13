import React, { Suspense } from 'react';
import PromptCard from './PromptCard';
import Loading from '@app/loading';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
	return (
		<Suspense fallback={<Loading />}>
			<section className='w-full'>
				<h1 className='head_text text-left'>
					<span className='blue_gradient'>{name} Profile</span>
				</h1>
				<p className='desc text-left'>{desc}</p>

				<div className='mt-10 prompt_layout'>
					{data.map((post) => {
						return (
							<PromptCard
								key={post._id}
								post={post}
								handleEdit={() => handleEdit && handleEdit(post)}
								handleDelete={() => handleDelete && handleDelete(post)}
							/>
						);
					})}
				</div>
			</section>
		</Suspense>
	);
};

export default Profile;
