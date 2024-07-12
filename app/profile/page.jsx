'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Profile from '@components/Profile';

const MyProfile = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${session?.user.id}/posts`);
			const data = await response.json();

			setPosts(data);
		};
		if (session?.user.id) fetchPosts();
	}, [session?.user.id]);

	const handleEdit = async (post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};

	const handleDelete = async (post) => {
		const hasConfirmed = confirm('Are you sure you want to delete this propmpt?');
		if (hasConfirmed) {
			try {
				await fetch(`/api/prompt/${post._id}`, {
					method: 'DELETE',
				});

				// frontendowe usuniecie jest po to zeby dac natychmiaatowe poczucie usuniecia - tzn te linie pod sa tylko po zeby "zwizualizowac usuniecie" - zeby wydarzylo sie cos natychmiast - SPRYTNE
				const filteredPosts = posts.filter((p) => p._id !== post._id);
				setPosts(filteredPosts);
			} catch (error) {
				console.log(error);
			}
		}
		// router.push('/');
	};

	return (
		<Profile
			name={session ? 'My' : ''}
			desc='welcome to your personalized profile page'
			data={posts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
