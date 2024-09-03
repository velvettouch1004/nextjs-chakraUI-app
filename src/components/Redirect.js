import { redirect } from "next/navigation";

export default function Redirect(path) {
  console.log(path);

  redirect(path);
}
