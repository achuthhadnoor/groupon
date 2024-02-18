import { useSearchHistory } from '@/providers/historyProvider';
import React from 'react'

export default function SearchHistory({ setSearch }: { setSearch: (newTerm: string) => void }) {
    const { searchHistory, clearSearchHistory } = useSearchHistory();
    return (
        <div className='flex flex-col justify-end gap-2 border-b-[1px] border-b-neutral-300 dark:border-b-neutral-600 pb-5'>
            <div className='flex justify-between'>
                <span className='text-xs font-semibold dark:text-neutral-100'>Search history</span>
                <button
                    className='text-xs px-2 py-1 bg-neutral-900 text-neutral-100 dark:bg-neutral-700 rounded-lg'
                    onClick={clearSearchHistory}
                >clear</button>
            </div>
            <div className='flex overflow-auto gap-2'>
                {searchHistory.length > 0 ? searchHistory.map((item: string, index: number) => (
                    <button
                        className='flex flex-row px-2 py-1 text-xs rounded-lg shadow-sm bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/60'
                        key={`index-${index} `}
                        onClick={() => {
                            setSearch(item);
                        }}
                    >{item}</button>
                )) : <div className='text-xs text-center dark:text-neutral-100'>No history</div>}
            </div>

        </div>
    )
}
