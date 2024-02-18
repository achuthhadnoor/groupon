'use client'
import useWikiSearch from '@/hooks/useSearchWiki';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchResults({ searchTerm }: { searchTerm: string }) {
    const { data, error, loading, nextPage, prevPage } = useWikiSearch(searchTerm, 10);
    if (loading) {
        return <div className='px-4 py-2 flex justify-center'>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    }
    if (error) {
        return <div className='bg-red-200 text-red-800'>
            {error.message}
        </div>
    }
    return (
        <div className="flex p-2 bg-neutral-50 rounded items-center shadow-sm">
            <div className='relative text-left overflow-auto'>
                {data.search.edges.map(({ node }: any) => (
                    <Link key={node.url} href={node.url} target='_blank' rel='noopener noreferrer'>
                        <div className='hover:bg-neutral-200/30 rounded border-b-[1px] border-b-neutral-200'>
                            <div className='p-2 gap-2 flex flex-col'>
                                <h2 className='text-lg font-semibold'>{node.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: node.snippet }} className='text-sm'></p>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className="flex justify-end mt-5">
                    {data.search.pageInfo.hasNextPage && (
                        <button className='px-4 p-2 bg-neutral-900 text-neutral-100 rounded' onClick={nextPage}>Next page »</button>
                    )}
                </div>
            </div>
        </div>
    )
}
