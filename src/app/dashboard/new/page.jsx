"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DevForm from "@/components/DevForm";
import { axiosHandle, handlePost } from "@/lib/api";

const New = () => {
  const data = {
    name: "",
    email: "",
    phone: "",
    birth: "",
    gender: "male",
  };
  const router = useRouter();

  const onSubmit = (payload) => {
    axiosHandle("dev", "post", payload, (res) => {
      if (res.error) {
        router.push("/login");
      } else {
        router.push("/dashboard");
      }
    });
  };

  return <DevForm handleSubmit={onSubmit} data={data} />;
};

export default New;
