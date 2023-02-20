const feature_env_variable = process.env.NEXT_PUBLIC_FEATURE_TOGGLE || "";

const FEATURE_TOGGLES = new Set(feature_env_variable.toLowerCase().split(","));

const SHOW_EDIT_PAGES = FEATURE_TOGGLES.has("edit_pages");

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "wavecrest-website-images.s3.eu-west-2.amazonaws.com",
    ],
  },

  async redirects() {
    const rules = [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/about/profile",
        permanent: false,
      },
    ];

    if (!SHOW_EDIT_PAGES) {
      rules.push({
        source: "/admin/:path*",
        destination: "/:path*",
        permanent: false,
      });
    }

    return rules;
  },
};
