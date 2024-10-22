import Meta from "component/meta/meta";
import Container from "component/container/container";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull11 from "images/iiba_projects.jpg";

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
