module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: { esmExternals: true },
    images: {
        domains: [
            'prod-files-secure.s3.us-west-2.amazonaws.com',
            "images.unsplash.com",
            "s3.us-west-2.amazonaws.com",
            "www.notion.so",
            "greyscale.notion.site"
        ],
    },
};