"use client";
import useSignout from "@/hooks/useSignout";

export function Logout() {
  const handelSignout = useSignout() ; 
  return (
    <div>
      <button
        className="cursor-pointer rounded-lg px-2 py-2 text-sm text-red-500 hover:text-red-500"
        onClick={handelSignout}
       
      >
        logout
      </button>
    </div>
  );
}
