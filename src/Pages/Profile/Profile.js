import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FIrebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Profile;