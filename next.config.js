/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'images.pexels.com'
        },
        {
            protocol:'https',
            hostname:'i.gifer.com'
        },
        {
            protocol:'https',
            hostname:'cdn.midjourney.com'
        },

    ]
}
}

module.exports = nextConfig
