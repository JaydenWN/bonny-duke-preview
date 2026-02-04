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
}

const Gallery29 = ({ className, images = imagesDefault, logoImage }: Gallery29Props) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-[#191719] py-16",
        className,
      )}
    >
      <div>
        <div className="container mx-auto mb-12 flex flex-col gap-4 text-center">
          <img src={logoImage} alt="bonnyduke logo" className="w-80 md:w-100 mx-auto"/>
          <p className="text-4xl text-white lg:text-6xl">
            Coastal Apparel. Coming Soon.
          </p>
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
          <Marquee repeat={2} className="p-0 opacity-80 [--duration:60s]">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt="gallery"
                className="aspect-[2/3] max-w-96 p-3 border border-white object-cover"
              />
            ))}
          </Marquee>
        </div>
       
        {/* Vintage film overlay */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* Vignette (dark edges) */}
  <div
    className="absolute inset-0 opacity-[0.55] dark:opacity-[0.7]"
    style={{
      background:
        "radial-gradient(120% 85% at 50% 45%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.22) 70%, rgba(0,0,0,0.45) 100%)",
      mixBlendMode: "multiply",
    }}
  />

  {/* Warm paper fade */}
  <div
    className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,244,224,0.55) 0%, rgba(255,232,200,0.25) 40%, rgba(255,255,255,0) 100%)",
      mixBlendMode: "soft-light",
    }}
  />

  {/* Light leak (top-right) */}
  <div
    className="absolute -top-1/3 -right-1/4 h-[140%] w-[70%] rotate-[-12deg] opacity-[0.22] dark:opacity-[0.18]"
    style={{
      background:
        "radial-gradient(closest-side at 35% 40%, rgba(255,170,120,0.95) 0%, rgba(255,190,120,0.55) 22%, rgba(255,255,255,0) 60%)",
      filter: "blur(18px)",
      mixBlendMode: "screen",
    }}
  />

  {/* Subtle edge burn */}
  <div
    className="absolute inset-0 opacity-[0.22] dark:opacity-[0.28]"
    style={{
      background:
        "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 55%, rgba(80,40,20,0.22) 78%, rgba(40,20,10,0.35) 100%)",
      mixBlendMode: "multiply",
    }}
  />

  {/* Grain (CSS-only, lightweight) */}
  <div
    className="absolute inset-0 opacity-[0.16] dark:opacity-[0.22]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 3px)",
      backgroundSize: "3px 3px",
      mixBlendMode: "overlay",
    }}
  />

  {/* Very faint scratches */}
  <div
    className="absolute inset-0 opacity-[0.08] dark:opacity-[0.1]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 10px)",
      backgroundSize: "180px 100%",
      mixBlendMode: "soft-light",
      transform: "rotate(-0.6deg) scale(1.03)",
    }}
  />
</div>
        
      </div>
    </section>
  );
};

export { Gallery29 };
