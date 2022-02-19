import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "lb9i7bcz",
    dataset: "production",
    useCdn: true,
})
