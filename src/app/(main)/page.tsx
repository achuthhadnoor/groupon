'use client'
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const searchValue = useDebounce(search, 1000);
  return (
    <main className="flex flex-col items-center justify-between p-2 md:p-24  bg-neutral-100 w-full h-screen  overflow-auto">
      <div className="relative rounded w-full lg:w-1/2 text-center gap-5 flex-col flex ">
        <SearchInput setSearch={setSearch} search={search} />
        <hr />
        {searchValue.trim() !== '' ? <>
          <span className='text-xs font-semibold text-left'>Search Results</span> <SearchResults searchTerm={searchValue} />
        </>
          : null}
      </div>
    </main>
  );
}
