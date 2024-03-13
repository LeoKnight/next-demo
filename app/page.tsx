"use client";

import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import FormModal from "./components/form-modal";
import style from "./style.module.css";

export default function Home() {
  return (
    <main className={style.page}>
      <div className={style.logo}>
        <Image
          src="/logo.jpg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>

      <div className={style.btnGroup}>
        <Link
          href="https://google.com"
          color="blue.400"
          _hover={{ color: "blue.500" }}
        >
          About
        </Link>
        <FormModal />
      </div>
    </main>
  );
}
