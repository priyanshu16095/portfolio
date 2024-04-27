const data = [
    {
        label: 'Home',
        to: '#',
        children: [
            {label: 'About', to: '#'},
            {label: 'Contact', to: '#', children: [{label: 'Mail', to:'#'}, {label: 'Phone', to: '#'}]},
        ]
    },
    {
        label: 'Trending',
        to: '#',
        children: [
            {label: 'News', to: '#'},
            {label: 'Industry', to: '#'}
        ]
    },
    {
        label: 'Settings',
        to: '#',
        children: [
            {label: 'Theme', to: '#'},
            {label: 'Help', to: '#'}
        ]
    }
]

export default data