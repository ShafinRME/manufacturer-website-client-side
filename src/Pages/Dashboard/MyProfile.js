import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const profile = {
            name: user.displayName,
            email: user.email,
            adress: event.target.adress.value,
            education: event.target.education.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,

        }
        fetch('http://localhost:5000/myself', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Successfully You have a ordered ${data.name}`);
                }
                else {
                    toast(`Failed to ordered ${data.name}`);
                }
            })
    }
    return (
        <div>
            <h2 className='text-center text-3xl text-primary mb-5'>My Self</h2>
            <form onSubmit={handleProfile} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                <input type="text" name="address" placeholder='Location' class="input input-bordered w-full max-w-xs" />
                <input type="text" name='education' placeholder="Eduaction" class="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                <input type="text" name='linkedin' placeholder="LinkedIn Profile" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add Profile" class="btn btn-secondary w-full max-w-xs" />

            </form>
        </div>
    );
};

export default MyProfile;