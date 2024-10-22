import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/iiba_splash.png";
import ImgFull2 from "images/Preview.png";
import ImgFull3 from "images/Preview-1.png";
import ImgFull4 from "images/Preview-2.png";
import ImgFull5 from "images/Preview-3.png";
import ImgFull6 from "images/Preview-4.png";
import ImgFull8 from "images/iiba_meishi_omote.png";
import ImgFull9 from "images/iiba_meishi_ura.png";
import ImgFull10 from "images/iiba_chirashi.jpg";
import ImgFull11 from "images/iiba_projects.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function iiba() {
  return (
    <Container>
      <Meta
        pageTitle="iiba"
        pageDesc="UI/UX DESIGN,GRAPHIC DESIGN"
      />
      <PostBody>
        <div>
           <figure
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          <Image
            src={ImgFull11}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        </div>
      </PostBody>
    </Container>
  );
}
