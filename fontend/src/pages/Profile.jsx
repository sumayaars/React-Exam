import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center text-xl p-8">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-50 to-gray-400">
        <div className=" w-ful min-w-min  max-w-lg p-8 rounded-2xl bg-gray-100 shadow-md text-center">
         
          <div className="flex justify-center mb-6">
            <img
              src={user.picture}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-teal-400 shadow-xl"
            />
          </div>

         
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}</h2>
          {/* <p className="text-xl text-gray-600 mb-4">{user.email}</p> */}

         
        </div>
      </div>
    )
  );
};

export default Profile;
