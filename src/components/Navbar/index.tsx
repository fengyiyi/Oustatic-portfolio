import Link from "next/link";
import React from "react";
import Button from "@/components/UI/Button";
import Image from "next/image";
function Navbar() {
  return (
    <div className=" border-b border-white border-opacity-10 p-4 px-6 flex gap-4 items-center md:px-12">
      <span className="flex flex-grow">
        <Link href="/" className="text-lg font-medium">
          <Image
            src="/graphics/Logo.svg"
            alt={"/graphics/Logo.svg"}
            width={71}
            height={34}
          />
        </Link>
      </span>
      <Button
        href="https://work.weixin.qq.com/kfid/kfc8d8e52091d1658c3"
        variant="yellow"
      >
        🤝 联系我
      </Button>
      <Button
        href="https://yego.cc/"
        variant="yellow"
      >
        ✍️ 博客
      </Button>
    </div>
  );
}

export default Navbar;
