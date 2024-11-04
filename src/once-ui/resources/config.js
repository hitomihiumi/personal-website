const baseURL = 'hitomihiumi.xyz'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'magenta',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'orange',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'HitomiHiumi',
    description: 'Just a simple personal site.'
}


// default open graph data
const og = {
    title: 'HitomiHiumi',
    description: 'Just a simple personal site.',
    type: 'website'
}

// default schema data
const schema = {
    logo: './favicon.png',
    type: 'Person',
    name: 'HitmoiHiumi',
    description: 'Just a simple personal site.',
    email: 'contact@hitomihiumi.xyz'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/_onceui',
    linkedin: 'https://www.linkedin.com/company/once-ui/',
    discord: 'https://discord.com/invite/5EyAQ4eNdS'
}

export { baseURL, style, meta, og, schema, social };