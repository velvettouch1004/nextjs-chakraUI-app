"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DevForm from "@/components/DevForm";
import { axiosHandle } from "@/lib/api";

const EditPage = (props) => {
  const id = props.params.dev_id;
  const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    axiosHandle(`dev/${id}`, "get", {}, (res) => {
      if (res.error) {
        router.push("/login");
      } else {
        setData(res);
      }
    });
  }, []);

  const onSubmit = (payload) => {
    axiosHandle(`dev/${id}`, "put", payload, () => router.push("/dashboard"));
  };

  return <DevForm handleSubmit={onSubmit} data={data} />;
};

export default EditPage;
