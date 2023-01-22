import Link from "next/link";

import { Image } from "react-datocms";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link href={`/blogs/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
