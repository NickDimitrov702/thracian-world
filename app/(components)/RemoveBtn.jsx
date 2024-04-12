"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

function RemoveBtn({ id }) {
  const router = useRouter();

  const removeProject = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = fetch(`http://localhost:3000/api/ProjectsTest?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeProject} className="text-red">
      <MdDeleteForever size={22} />
    </button>
  );
}

export default RemoveBtn;
