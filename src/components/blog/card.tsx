import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from '../../context/blog'
import { format } from 'date-fns'
import { imageLoader } from '../../lib/images'

export const Card = ({
    cover,
    date,
    description,
    slug,
    title,
    blurDataURL,
    tags,
    readTime,
}: Metadata): React.ReactElement => {
    const captializeTitle = title
        .split(' ')
        .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
        .join(' ')

    return (
        <article
            key={slug}
            className="col-span-full md:col-span-4 lg:col-span-4 rounded-md border border-gray-400"
        >
            <div className="relative overflow-auto">
                <Link href={`/blog/${slug}`} passHref>
                    <a>
                        <Image
                            loader={imageLoader}
                            src={cover}
                            alt="Person"
                            objectFit="cover"
                            blurDataURL={blurDataURL}
                            placeholder="blur"
                            height="200px"
                            width="450px"
                            className="relative transition duration-250 ease-in-out scale-100 hover:scale-110 cursor-pointer"
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col p-2 justify-between">
                <Link href={`/blog/${slug}`} passHref>
                    <h1 className="text-2xl font-bold leading-8 tracking-tight cursor-pointer">
                        {captializeTitle}
                    </h1>
                </Link>
                <p className="text-gray-500 pb-2">
                    {format(new Date(date), 'MMMM dd, yyyy')} •{' '}
                    <span>{readTime.text}</span>
                </p>
                <p className="line-clamp-3">{description}</p>
            </div>
        </article>
    )
}
