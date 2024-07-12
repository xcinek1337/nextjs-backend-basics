'use client';

import { useEffect, useState } from 'react';

import Profile from '@components/Profile';

const ProfilUser = ({ params }) => {
	const [posts, setPosts] = useState([]);
	const [username, setUsername] = useState('');
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/users/${params.id}/posts`);
				const result = await response.json();
				setPosts(result);
				setUsername(result[0].creator.username);
			} catch (error) {
				console.error('Error fetching data:', error);
				setError(error);
			}
		};
		fetchData();
	}, []);

	if (error) {
		return (
			<p className='max-w-5xl head_text text-center blue_gradient'>404 error. User propably doesnt exist </p>
		);
	}

	return (
		<>
			<Profile
				name={username}
				desc={`welcome to ${username} personalized profile page. Explore ${username} exceptional prompts and be inspired by the power of their imagination`}
				data={posts}
			/>
		</>
	);
};

export default ProfilUser;
