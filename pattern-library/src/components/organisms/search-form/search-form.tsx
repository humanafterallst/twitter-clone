interface Props {
  className?: React.HTMLAttributes<HTMLFormElement>["className"]
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

function SearchForm({ className, onSubmit }: Props) {
  return (
    <form className={`flex items-center ${className}`} onSubmit={onSubmit}>
      <label htmlFor="simple-search" className="sr-only">
        Search Twitter
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-[#536471]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-[#EFF3F4] focus:bg-white border border-[#EFF3F4] text-gray-900 text-sm rounded-full focus:border-[#1d9bf0] block w-full pl-10 p-2.5 placeholder:text-[#536471]"
          placeholder="Search Twitter"
        />
      </div>
    </form>
  )
}

export default SearchForm