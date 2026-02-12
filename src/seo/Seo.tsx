import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({ title, description, image, url }: SeoProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helpers
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setOG("og:description", description);
    }

    if (image) {
      setOG("og:image", image);
    }

    if (url) {
      setOG("og:url", url);
      setOG("og:type", "website");
    }

    setOG("og:title", title);
  }, [title, description, image, url]);

  return null;
}
