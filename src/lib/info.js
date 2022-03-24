// This is for convenience as you start out with this template.
// If you'd rather hardcode these values into your pages,
// feel free to remove this file.
import { dev } from '$app/env'

/**
 * Used for SEO in /posts/[slug]
 */
let url = 'http://localhost'
if(!dev){
    url = 'https://rakit.id'
}

/**
 * Used for the header of the page and in SEO
 */
export const name = 'Rakit.id' // replace with your name
export const website = url
