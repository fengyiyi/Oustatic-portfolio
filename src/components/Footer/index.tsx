import React from "react";
import Image from "next/image";
import { DrukWide } from "@/app/fonts";
import Button from "../UI/Button";
import s from "./Footer.module.css";
import cn from "clsx";

function Footer() {
  return (
    <>
      <div className={cn(s.root)}>
        <Image
          src={"/graphics/Footer-bg.svg"}
          alt=""
          fill
          className={cn(s.background)}
        />
        <>
          <div className={cn(s.footerDetails)}>
            <h1 className={cn(s.heading)} style={DrukWide.style}>
              期待与您合作 👋
            </h1>
            <p style={DrukWide.style}>我坚信设计会激发品牌魅力，解决问题，带来价值！</p>
            <Button
              href="https://work.weixin.qq.com/kfid/kfc8d8e52091d1658c3"
              variant="yellow"
            >
              与我联系
            </Button>
          </div>
        </>
      </div>
    </>
  );
}

export default Footer;
