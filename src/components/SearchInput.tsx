import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import SearchHistory from './SearchHistory';

interface ISearchInputProps {
    search: string,
    setSearch: (newValue: string) => void;
}
export default function SearchInput({ search, setSearch }: ISearchInputProps) {
    const [toggleHistory, setToggleHistory] = useState<boolean>(true);
    const inpRef = useRef<HTMLInputElement>(null);
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    }

    useEffect(() => {
        inpRef?.current?.focus()
        window.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.key === '/') inpRef?.current?.focus()
        })
        return () => {
            window.removeEventListener('keyup', () => { })
        }
    }, [])
    return (
        <>
            <div className="flex p-2 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 rounded items-center shadow-sm ">
                <label htmlFor="wiki-search" className="">
                </label>
                <input
                    id="wiki-search"
                    type="search"
                    className="bg-transparent outline-none flex-1 px-4 py-2"
                    placeholder="Press / to search wiki.."
                    ref={inpRef}
                    onChange={onInputChange}
                    value={search}
                />
                {/* <kbd
                    className="px-3 py-2  rounded text-neutral-400 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title="history"
                    onClick={() => {
                        setToggleHistory(prv => !prv)
                    }}>↻</kbd> */}
            </div>
            {toggleHistory &&
                <SearchHistory setSearch={setSearch} />}
        </>

    )
}
