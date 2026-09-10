import { redirect } from "next/navigation";

export default function WaitlistRedirectPage() {
  redirect("/books#waitlist");
}
