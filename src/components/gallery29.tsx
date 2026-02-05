import { cn } from "@/lib/utils";
import { Facebook, Instagram } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const imagesDefault = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-3QqzCTIfUJI-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/john-murphey-ZWUWSEY6OGk-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
];

interface Gallery29Props {
  className?: string;
  images?: string[];
  logoImage: string;
  textImage: string;
}

const Gallery29 = ({ className, images = imagesDefault, logoImage, textImage }: Gallery29Props) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden  py-16",
        className,
      )}
    >
      <div>
        <div className="container mx-auto mb-12 flex flex-col gap-4 text-center">
          <img src={logoImage} alt="bonnyduke logo" className="w-80 md:w-100 mx-auto"/>
          <img src={textImage} alt="bonnyduke logo" className="w-80 md:w-100 mx-auto"/>
          
       <div className="mx-auto flex gap-3">
		    <a href="https://www.instagram.com/bonnyduke/" className="flex gap-3 w-fit mx-auto bg-[#3852A3] text-white border border-black p-1 rounded">
          <Instagram />
		    </a>
        <a href="https://www.facebook.com/bonnydukeapparel/" className="flex gap-3 w-fit mx-auto bg-[#3852A3] text-white border border-black p-1 rounded">
          <Facebook/>
		    </a>
       </div>

        </div>
        <div className="relative">
          <Marquee repeat={2} className="p-0[--duration:60s]">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt="gallery"
                className="aspect-[2/3] max-w-96  p-3 object-cover"
              />
            ))}
          </Marquee>
        </div>        
      </div>
    </section>
  );
};

export { Gallery29 };
