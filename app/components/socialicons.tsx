import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/laradisestudios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/louiy9obu/image/upload/v1763965358/instagram-2_kuuijl.png"
          alt="Laradise Studios Instagram"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://nz.linkedin.com/company/laradise-studios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/louiy9obu/image/upload/v1763966034/linkedin_sdlxc0.png"
          alt="Laradise Studios LinkedIn"
        />
      </a>

      {/* X / Twitter */}
      <a
        href="https://twitter.com/laradisestudios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/louiy9obu/image/upload/v1763965358/twitter_rwwu1f.png"
          alt="Laradise Studios X (Twitter)"
        />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@laradisestudios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/louiy9obu/image/upload/v1763965357/tiktok_thnxbl.png"
          alt="Laradise Studios TikTok"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
