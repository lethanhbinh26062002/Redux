import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <Link href={`/products/create`} className="p-2 underline"> Create a new Product</Link> &emsp;&emsp;&emsp;&emsp;
            <Link href={`/products`} className="p-2 underline"> List Product</Link>
            <br />
            <br />
        </div>

    )
}

export default Header