import Contentbox1 from '@/components/Contentbox1'
import Navbar2 from '@/components/Navbar2'
import Topnav1 from '@/components/Topnav1'

import React from 'react'

function index({data}) {
    return (
        <div>
            <Topnav1 />
            <Navbar2 />
            <Contentbox1 data={data} />
        </div>
    )
}
export async function getServerSideProps(context) {
    const { data } = await import('../data/Data')
    const { index } = context.query;


    const slugs = data.map((i) => {
        return i.slug;
    })

    console.log(slugs)


    if (slugs.includes(index)) {
        const pageData = data.find((i) => i.slug === index)
        return {
            props: {
                data: pageData
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}

export default index
